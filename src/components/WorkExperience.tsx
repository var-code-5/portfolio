import React from 'react'
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack'
import { ExternalLink } from 'lucide-react';

export default function WorkExperience() {
    const workExperience = [
        {
            title: "MyPerro | Full Stack Intern",
            duration: "Jul 2024 - Present",
            description: "Developed full-stack web apps, optimized APIs, and integrated hardware devices.",
            logo: "/work/myperro.png",
            link: "https://myperro.in"
        },
        {
            title: "AutoStock AI | Full Stack Developer",
            duration: "Feb 2025 - Present",
            description: "Developed high-traffic web apps, implemented CI/CD pipelines, and improved system performance for 10K+ daily users.",
            logo: "/work/cactusit.png",
            link: "https://www.cactusits.com/"
        },
        {
            title: "Ammus Homemade  | Frontend Developer",
            duration: "Jul 2024 - Present",
            description: "Developed and maintained the frontend of a web application using React, ensuring a responsive and user-friendly interface.",
            logo: "/work/ammus.png",
            link: "https://ammus-homemade.vercel.app/"
        },
        {
            title: "Agasthya  | Full Stack Developer",
            duration: "July 2025 - Present",
            description: "Currently Developing the brand identity and website for a local business.",
            logo: "/work/agasthya.png",
        }
    ];
    return (
        <div className='w-full h-[100vh] sm:h-[70vh] mx-auto max-w-screen-xl relative'>
            <h1 className="absolute font-rethink-sans text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] font-bold opacity-5 gsap-reveal w-full text-center">Work Experience</h1>
            <ScrollStack className="w-full h-full">
                {workExperience.map((item, index) => (
                    <ScrollStackItem key={index} itemClassName={`flex flex-col md:flex-row items-center justify-center gap-4 ${index % 2 === 0 ? 'bg-cgreen text-black' : 'bg-cpurple text-white'}`}>
                        <div className="flex flex-col items-center gap-4 w-full md:w-1/2 font-rethink-sans ">
                            <h2 className="text-2xl md:text-4xl font-bold font-space-grotesk">{item.title}</h2>
                            <p className="text-lg text-muted-foreground">{item.duration}</p>
                            <p className="text-lg text-center">{item.description}</p>
                        </div>
                        <div className='w-full md:w-1/2 h-auto '>
                            <div
                                className="group relative w-full aspect-[750/400] bg-background-light"
                                style={{
                                    backgroundImage: `url(${item.logo})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center 50%',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                {
                                    item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-4 right-4 bg-background/70 text-foreground size-12 inline-flex justify-center items-center transition-all opacity-0 hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
                                        >
                                            <ExternalLink />
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </div>
    )
}