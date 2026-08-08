import Image from "next/image";

export default function Tools() {
  return (
    <section id="tools" className="w-full py-8 flex items-center flex-col bg-foreground">
        <h1 className="font-doto text-lg text-center text-background">Tools & Languages</h1>
        <div className="flex items-center">
            <Image 
                src='https://cdn.simpleicons.org/c/black'
                width={120}
                height={120}
                alt="Image of project: Time among the stars"
                className=""
                unoptimized
            />
            <Image 
                src='https://cdn.simpleicons.org/c/black'
                width={120}
                height={120}
                alt="Image of project: Time among the stars"
                className=""
                unoptimized
            />
        </div>
    </section>
  );
}