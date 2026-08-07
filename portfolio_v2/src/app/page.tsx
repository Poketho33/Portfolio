import Image from "next/image";

import HeroSection from './hero';
import QuoteSection from './quote';
import ProjectsSection from './projects';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <QuoteSection/>
      <ProjectsSection/>
    </>
  );
}
