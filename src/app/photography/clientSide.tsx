"use client";

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

type clientSideProps = {
    images: {
        url: string;
        height: number;
        width: number;
    }[];
}

export default function BlogAdminPageClientSide({ images } : clientSideProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!sectionRef.current || !triggerRef.current) return;
        if (!images.length) return;

        const totalWidth = (sectionRef.current.scrollWidth + 64) - window.innerWidth;

        const tween = gsap.fromTo(
            sectionRef.current,
            { x: 0 },
            {
                x: `-${totalWidth}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: `+=${totalWidth}px`,
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [images]);


    return (
        <div ref={triggerRef} className="relative mt-12 pt-4">
            <div className="px-12 lg:px-16 pb-10">
                <h2 className="text-[2.5rem] pt-[80px] font-doto">Photography</h2>
                <p className="text-sm text-foreground text-justify leading-tight whitespace-pre-line max-w-lg md:w-[40%]">
                    These are pictures I've taken on my journey.
                </p>
            </div>

            <section className="overflow-hidden pb-12 pt-4">
                <div
                    ref={sectionRef}
                    className="flex flex-row relative items-end gap-x-6 pl-16"
                >
                    {images.map((img, index) => (
                        <Image
                            src={img.url}
                            key={img.url}
                            alt={`Image ${index}`}
                            width={img.width}
                            height={img.height}
                            className="rounded-xl"
                            sizes="(max-width: 768px) 100vw, 28vw"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}