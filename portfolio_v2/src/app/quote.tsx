'use client'

export default function Quote() {
  return (
    <figure className="w-full bg-foreground py-10 overflow-hidden">
      <blockquote className="inline-block animate-quote will-change-transform">
        <span className="text-7xl text-background font-bold whitespace-nowrap pr-20">
          We've always defined ourselves by the ability to overcome the impossible.
        </span>
        <span 
          aria-hidden="true" 
          className="text-7xl text-background font-bold whitespace-nowrap pr-20"
        >
          We've always defined ourselves by the ability to overcome the impossible.
        </span>
      </blockquote>
      <figcaption className="text-background mt-4 text-right px-16">
        - Cooper, <cite className="not-italic">Interstellar</cite> -
      </figcaption>
    </figure>
  );
}