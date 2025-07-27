import About from "@/components/About";
import Email from "@/components/Email";
import Impact from "@/components/Impact";
import Preloader from "@/components/Preloader";
import ProjectList from "@/components/ProjectList";
import Skills from "@/components/Skills";
import DarkVeil from "@/components/ui/DarkVeil";
import ScrollDownInd from "@/components/ui/ScrollDownInd";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {

  return (
    <>
      <Preloader />

      {/* Hero section */}
      <div className=" w-full h-screen overflow-hidden relative">
        <DarkVeil speed={1} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] text-[20vw] lg:text-[200px] font-space-grotesk font-bold text-center text-cpurple leading-none">
          <p className="absolute -bottom-[15%] -left-[20%] text-black-text font-normal font-rethink-sans text-4xl">I am the</p>
          <span className="inline-block translate-y-full">V</span>
          <span className="inline-block translate-y-full">A</span>
          <span className="inline-block translate-y-full">R</span>
          <p className="absolute -right-[43%] -bottom-[89%] text-black-text font-space-grotesk text-[6vw] lg:text-6xl font-bold">IABLE</p>
          <p className="absolute right-[5%] -bottom-[120%] font-rethink-sans text-[4vw] lg:text-4xl text-black-text font-normal text-nowrap">You are looking for !!</p>
        </div>

        {/* email */}
        <Email />

        {/* stats summary */}
        <div className="hidden md:block absolute bottom-6 right-6 h-auto w-96 text-right space-y-2">
          <h3 className="font-space-grotesk text-3xl">Work Experience</h3>
          <p className="font-rethink-sans text-black-text">1.5 years</p>
          <h3 className="font-space-grotesk text-3xl">Projects</h3>
          <p className="font-rethink-sans text-black-text">10+</p>
        </div>

        <ScrollDownInd className="absolute bottom-20 left-1/2 transform -translate-x-1/2" />
      </div>

      <WorkExperience />
      <Impact />
      <Skills />
      <ProjectList />
      <About />

    </>
  );
}
