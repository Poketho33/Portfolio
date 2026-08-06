"use client"

import { useEffect, useState, useRef } from "react";


export default function Hero() {
    const starPath = "M12.1958 3.7082C13.3932 0.0229549 18.6068 0.0229588 19.8042 3.7082L20.7148 6.51064C21.2503 8.15873 22.7861 9.27457 24.519 9.27457H27.4657C31.3406 9.27457 32.9517 14.233 29.8168 16.5106L27.4329 18.2426C26.031 19.2612 25.4443 21.0667 25.9798 22.7148L26.8904 25.5172C28.0878 29.2025 23.8699 32.267 20.735 29.9894L18.3511 28.2574C16.9492 27.2388 15.0508 27.2388 13.6489 28.2574L11.265 29.9894C8.1301 32.267 3.91219 29.2025 5.10959 25.5172L6.02016 22.7148C6.55566 21.0667 5.96903 19.2612 4.56708 18.2426L2.18317 16.5106C-0.95168 14.233 0.659425 9.27457 4.53432 9.27457H7.48098C9.21389 9.27457 10.7497 8.15873 11.2852 6.51064L12.1958 3.7082Z";

    const [canUpdateStar, setCanUpdateStar] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const starConfig = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ];

    const [stars, setStars] = useState<{ id: number; top: string; left: string; color: string }[]>([]);

    const handleAnimationEnd = () => {
        if(canUpdateStar){
            handleCanUpdateStar();
        }
    };

    const handleCanUpdateStar = () => {
        setCanUpdateStar(false);
        const randomDelay = Math.floor(Math.random() * 1000);
        timerRef.current = setTimeout(() => {
            setCanUpdateStar(true);
        }, randomDelay);
    };

    // Clean up active timers if the component unmounts
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    useEffect(() => {
        const generatedStars = starConfig.map((star) => {
            // Generate random pastel colors
            const hue = Math.floor(Math.random() * 360);
            // Generate random position
            const positionY = Math.floor(Math.random() * 100);
            const positionX = Math.floor(Math.random() * 100);

            return {
                ...star,
                color: `hsl(${hue}, 70%, 80%)`,
                top: `${positionY}%`,
                left: `${positionX}%`

            };
        });
        setStars(generatedStars);
    }, []);

    return (
        <section id="home" className="h-[600px] w-full overflow-x-hidden overflow-y-hidden bg-background relative mx-auto">
            <div className="w-[300px] h-[300px] bg-background shadow-[inset_-3rem_-2.33rem_0.75rem_0rem_var(--foreground)] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"></div>             

            {/* Rays CCW starting from bottom left */}
            <svg className="absolute w-1/2 h-auto fill-background-2 z-10 top-9/20 right-1/2" viewBox="0 0 846 395" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 201.5V394.5L845.5 79.5L797 0L0 201.5Z"/>
            </svg>    
            <svg className="absolute w-1/2 h-auto fill-background-2 z-10 top-15/20 right-7/20 -rotate-[42deg]" viewBox="0 0 846 395" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 201.5V394.5L845.5 79.5L797 0L0 201.5Z"/>
            </svg>  
            <svg className="absolute w-1/2 h-auto fill-background-2 z-10 top-15/20 left-7/20 [transform:scaleX(-1)_rotate(-42deg)]" viewBox="0 0 846 395" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 201.5V394.5L845.5 79.5L797 0L0 201.5Z"/>
            </svg>  
            <svg className="absolute w-1/2 h-auto fill-background-2 z-10 top-9/20 left-1/2 -scale-x-100" viewBox="0 0 846 395" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 201.5V394.5L845.5 79.5L797 0L0 201.5Z"/>
            </svg>  
            <svg className="absolute w-1/2 h-auto fill-background-2 z-10 bottom-9/20 left-1/2 -scale-100" viewBox="0 0 846 395" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 201.5V394.5L845.5 79.5L797 0L0 201.5Z"/>
            </svg>  
            <svg className="absolute w-1/2 h-auto fill-background-2 z-10 bottom-15/20 left-7/20 [transform:scale(-1)_rotate(-42deg)]" viewBox="0 0 846 395" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 201.5V394.5L845.5 79.5L797 0L0 201.5Z"/>
            </svg>  
            <svg className="absolute w-1/2 h-auto fill-background-2 z-10 bottom-15/20 right-7/20 [transform:scaleY(-1)_rotate(-42deg)]" viewBox="0 0 846 395" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 201.5V394.5L845.5 79.5L797 0L0 201.5Z"/>
            </svg>  
            <svg className="absolute w-1/2 h-auto fill-background-2 z-10 bottom-9/20 right-1/2 -scale-y-100" viewBox="0 0 846 395" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 201.5V394.5L845.5 79.5L797 0L0 201.5Z"/>
            </svg>  

            {/* Hero content */}
            <div className="hero__container">
                <h1 className="hero__name DM_bold">thomas eleveld</h1>
                <p className="hero__descr">Website and game developer based in Eindhoven, creating digital experiences with personality and creativity.</p>
            </div>

            {/* Stars */}
            {stars.map((star) => (
                <svg
                    key={star.id}
                    className={`absolute z-20 h-6 w-6 animate-star opacity-0`}
                    onAnimationEnd={handleAnimationEnd}
                    style={{ top: star.top, left: star.left, fill: star.color }}
                    viewBox="0 0 32 31"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={starPath} />
                </svg>
            ))}
        </section>
    )
}