import Email from "@/components/Email";
import Preloader from "@/components/Preloader";
import DarkVeil from "@/components/ui/DarkVeil";

export default function Home() {
  
  return (
    <>
      <Preloader />
      <div className=" w-full h-screen overflow-hidden relative">
        <DarkVeil speed={1} />

        {/* email */}
        <Email />

        {/* stats summary */}
        <div className="hidden md:block absolute bottom-6 right-6 h-auto w-96 text-right space-y-2">
          <h3 className="font-space-grotesk text-3xl">Work Experience</h3>
          <p className="font-rethink-sans text-black-text">1.5 years</p>
          <h3 className="font-space-grotesk text-3xl">Projects</h3>
          <p className="font-rethink-sans text-black-text">10+</p>
        </div>

      </div>
      <div className="min-h-screen">
        <h1>this is a second one </h1>
      </div>
    </>
  );
}
