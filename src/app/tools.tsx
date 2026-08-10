import Image from "next/image";

export default function Tools() {
  return (
    <section id="tools" className="w-full py-8 flex items-center flex-col bg-foreground">
        <h1 className="font-doto text-lg text-center text-background">Tools & Languages</h1>
        <div className="flex items-center pt-6 space-x-6">
            <div className="flex flex-col items-center justify-center gap-4">
                <Image 
                    src='https://cdn.simpleicons.org/c/black'
                    width={80}
                    height={80}
                    alt="C icon"
                    className=""
                    unoptimized
                />
                <p className="text-background">C</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <Image 
                    src='https://cdn.simpleicons.org/sharp/black'
                    width={80}
                    height={80}
                    alt="Sharp icon"
                    className=""
                    unoptimized
                />
                <p className="text-background">C#</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <Image 
                    src='https://cdn.simpleicons.org/unity/black'
                    width={80}
                    height={80}
                    alt="Unity icon"
                    className=""
                    unoptimized
                />
                <p className="text-background">Unity</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <Image 
                    src='https://cdn.simpleicons.org/html5/black'
                    width={80}
                    height={80}
                    alt="HTML5 icon"
                    className=""
                    unoptimized
                />
                <p className="text-background">HTML</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <Image 
                    src='https://cdn.simpleicons.org/css/black'
                    width={80}
                    height={80}
                    alt="CSS icon"
                    className=""
                    unoptimized
                />
                <p className="text-background">CSS</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <Image 
                    src='https://cdn.simpleicons.org/javascript/black'
                    width={80}
                    height={80}
                    alt="JS icon"
                    className=""
                    unoptimized
                />
                <p className="text-background">Javascript</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <Image 
                    src='https://cdn.simpleicons.org/nextdotjs/black'
                    width={80}
                    height={80}
                    alt="Next.js icon"
                    className=""
                    unoptimized
                />
                <p className="text-background">Next.js</p>
            </div>
        </div>
    </section>
  );
}