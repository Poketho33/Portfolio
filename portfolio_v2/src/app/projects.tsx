import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-10">
      <div className="flex flex-col items-center">
          <h1 className="font-doto text-lg">Projects</h1>
          {/* Project: Time among the stars */}
          <div className="h-[500px] w-full flex items-start justify-end flex-col relative px-16">
              <p className="text-7xl font-bold text-center absolute w-full left-1/2 top-1/2 -translate-1/2 z-30">Time Among The Stars</p>
              <p className="max-w-[500px]">A timing game where players try to achieve the high-score through the precision of their clicks. The main mechanic of the game is an on click event that checks, using mathematics, if it was timed correctly.</p>
              <div className="pt-4 space-x-4">
                  <a href="https://github.com/Poketho33/Time-Among-the-Stars" target="_blank" className="underline">source code</a>
                  <a href="https://poketho33.github.io/Time-Among-the-Stars/" target="_blank" className="underline">live</a>
              </div>
              <Image 
                src='/time_game.png'
                width={700}
                height={700}
                alt="Image of project: Time among the stars"
                className="absolute right-0 top-14 z-10"
              />
          </div>


      </div>
  </section>
  );
}