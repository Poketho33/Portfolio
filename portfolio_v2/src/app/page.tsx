import 'server-only'

import HeroSection from './hero';
import QuoteSection from './quote';
import ProjectsSection from './projects';
import ToolsSection from './tools';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <QuoteSection/>
      <ProjectsSection/>
      <ToolsSection/>
    </>
  );
}
