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
        <div className="h-screen w-full min-h-screen mx-auto max-w-screen-xl px-4" id="skills-section">
            <div className="flex items-center justify-between w-full h-auto">
                <p className="flex flex-col justify-start font-space-grotesk text-6xl font-bold text-right opacity-50 w-1/6 self-end">
                    <span className="text-left text-nowrap text-cgreen gsap-reveal">Used by</span>
                    <span className="self-end text-right text-nowrap text-cpurple gsap-reveal">my hands</span>
                    <span className="text-left text-nowrap gsap-reveal">and mind</span>
                </p>
                <h1 className="font-rethink-sans text-[20rem] font-bold text-right opacity-5 gsap-reveal">Skills</h1>
            </div>
            <div className="w-full flex">
                <div className="min-w-[20%]"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
                    <div>
                        <h3 className="font-space-grotesk text-3xl font-bold mb-6 gsap-reveal">Languages</h3>
                        <ul className="list-disc pl-5 font-rethink-sans text-lg">
                            {["Python", "GO", "JavaScript", "TypeScript", "HTML,CSS", "C/C++", "SQL"].map((item, index) => (
                                <li key={index} className="gsap-reveal-stagger">{item}</li>
                            ))}
                        </ul>

                        <h3 className="font-space-grotesk text-3xl font-bold mt-6 mb-6 gsap-reveal">Specials</h3>
                        <ul className="list-disc pl-5 font-rethink-sans text-lg">
                            <li className="gsap-reveal-stagger">ChatGpt 😁</li>
                        </ul>
                    </div>

                    <div className="col-span-2 grid grid-cols-2">
                        <h3 className="col-span-2 font-space-grotesk text-3xl font-bold mb-3 gsap-reveal">Frameworks/Libraries/Others</h3>
                        <ul className="list-disc pl-5 font-rethink-sans text-lg">
                            {["React", "Next.js", "remix", "Tailwind CSS", "GSAP", "Git", "Github"].map((item, index) => (
                                <li key={index} className="gsap-reveal-stagger">{item}</li>
                            ))}
                        </ul>

                        <ul className="list-disc pl-5 font-rethink-sans text-lg">
                            {["Gorrila mux", "Express", "AWS, GCP, OCI", "CI/CD", "Open Telemetry", "Docker", "Kubernetes"].map((item, index) => (
                                <li key={index} className="gsap-reveal-stagger">{item}</li>
                            ))}
                        </ul>

                        <p className="font-rethink-sans text-lg col-span-2 gsap-reveal">The list goes on... as the <span className="text-cpurple">possibilities are endless</span>.</p>
                        <p className="font-rethink-sans text-lg col-span-2 gsap-reveal">To see the full list of my skills, feel free to <Link href="/contact">reach out!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
