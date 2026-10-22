import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
