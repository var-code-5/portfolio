'use client';
import React, { useEffect, useRef } from 'react'
import Link from "next/link";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Skills() {
    // Register ScrollTrigger plugin
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate main elements
        gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach(elem => {
            gsap.from(elem, {
                y: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Stagger list items
        const sections = gsap.utils.toArray<HTMLElement>('ul');
        sections.forEach(section => {
            const items = section.querySelectorAll('.gsap-reveal-stagger');
            gsap.from(items, {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            });
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen w-full mx-auto max-w-screen-xl px-4 py-12 sm:py-16" id="skills-section">
            <div className="flex items-center justify-between w-full">
                <p className="hidden md:flex flex-col justify-start font-space-grotesk text-3xl sm:text-4xl lg:text-6xl font-bold text-right opacity-50 w-1/6 self-end ml-5">
                    <span className="text-left text-nowrap text-cgreen gsap-reveal">Used by</span>
                    <span className="self-end text-right text-nowrap text-cpurple gsap-reveal">my hands</span>
                    <span className="text-left text-nowrap gsap-reveal">and mind</span>
                </p>
                <h1 className="font-rethink-sans text-7xl sm:text-9xl md:text-[15rem] lg:text-[20rem] font-bold text-right opacity-5 gsap-reveal">Skills</h1>
            </div>
            
            <div className="w-full flex flex-col md:flex-row mt-8 md:mt-0">
                <div className="hidden md:block md:min-w-[20%]"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 sm:p-4 w-full">
                    <div className='flex flex-row md:flex-col justify-between items-start md:items-baseline col-span-1 md:col-span-1'>
                        <div className="w-1/2 md:w-full mb-6 md:mb-0">
                            <h3 className="font-space-grotesk text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6 gsap-reveal">Languages</h3>
                            <ul className="list-disc pl-5 font-rethink-sans text-base sm:text-lg">
                                {["Python", "GO", "JavaScript", "TypeScript", "HTML,CSS", "C/C++", "SQL"].map((item, index) => (
                                    <li key={index} className="gsap-reveal-stagger">{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-1/2 md:w-full">
                            <h3 className="font-space-grotesk text-xl sm:text-2xl md:text-3xl font-bold mt-0 md:mt-6 mb-3 md:mb-6 gsap-reveal">Specials</h3>
                            <ul className="list-disc pl-5 font-rethink-sans text-base sm:text-lg">
                                <li className="gsap-reveal-stagger">ChatGpt 😁</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 mt-6 md:mt-0">
                        <h3 className="col-span-2 font-space-grotesk text-xl sm:text-2xl md:text-3xl font-bold mb-3 gsap-reveal">Frameworks/Libraries/Others</h3>
                        <ul className="list-disc pl-5 font-rethink-sans text-base sm:text-lg">
                            {["React", "Next.js", "remix", "Tailwind CSS", "GSAP", "Git", "Github"].map((item, index) => (
                                <li key={index} className="gsap-reveal-stagger">{item}</li>
                            ))}
                        </ul>

                        <ul className="list-disc pl-5 font-rethink-sans text-base sm:text-lg">
                            {["Gorrila mux", "Express", "AWS, GCP, OCI", "CI/CD", "Open Telemetry", "Docker", "Kubernetes"].map((item, index) => (
                                <li key={index} className="gsap-reveal-stagger">{item}</li>
                            ))}
                        </ul>

                        <div className="col-span-1 sm:col-span-2 mt-6">
                            <p className="font-rethink-sans text-base sm:text-lg gsap-reveal">The list goes on... as the <span className="text-cpurple">possibilities are endless</span>.</p>
                            <p className="font-rethink-sans text-base sm:text-lg gsap-reveal">To see the full list of my skills, feel free to <Link href="/contact">reach out!</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
