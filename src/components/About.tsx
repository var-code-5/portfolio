'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
    const containerRef = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate the title
        gsap.fromTo(
            '.about-title',
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.about-title',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
        
        // Animate the intro paragraph
        gsap.fromTo(
            '.about-intro',
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                delay: 0.2,
                scrollTrigger: {
                    trigger: '.about-intro',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
        
        // Animate each section
        gsap.utils.toArray('.about-section').forEach((section) => {
            gsap.fromTo(
                section as Element,
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: section as Element,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    
    return (
        <div ref={containerRef} className='min-h-screen w-full mx-auto max-w-screen-xl px-4 py-16' id='about'>
            <h1 className='about-title text-4xl font-bold mb-8 font-space-grotesk border-b-2 text-cpurple border-cgreen capitalize'>Let&apos;s talk about Me..</h1>
            <p className='about-intro text-lg mb-8 font-rethink-sans'>
                Hey there! mi llamo Varshit, I am a 20-year-old software engineer from India (that sound generic right). I love reading, eating, sleeping and coding. lets get to know me
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-rethink-sans'>
                <div className='about-section col-span-1 md:col-span-2'>
                    <h2 className='text-2xl font-bold mb-4 font-space-grotesk '>Education</h2>
                    <ul>
                        <li>
                            <h3 className='text-lg font-semibold'>Bachelor of Technology in Computer Science and Engineering</h3>
                            <p className='text-sm'>VIT Vellore, 2023 - Present</p>
                        </li>
                        <li className='mt-4'>
                            <h3 className='text-lg font-semibold'>Secondary School and Higher Secondary School</h3>
                            <p className='text-sm'>Sainik School Kalikiri, 2016 - 2023</p>
                        </li>
                    </ul>
                </div>
                
                <div className='about-section col-span-1'>
                    <h2 className='text-2xl font-bold mb-4 font-space-grotesk'>Languages</h2>
                    <ul>
                        <li className='mb-2'>Telugu</li>
                        <li className='mb-2'>English</li>
                        <li className='mb-2'>Hindi</li>
                        <li className='mb-2'>Kannada</li>
                        <li className='mb-2'>Tamil (a little, don&apos;t judge me)</li>
                        <li className='mb-2'>Spanish (also a little, learning)</li>
                    </ul>
                </div>

                <div className='about-section col-span-1'>
                    <h2 className='text-2xl font-bold mb-4 font-space-grotesk'>Sports</h2>
                    <ul>
                        <li className='mb-2'>BasketBall</li>
                        <li className='mb-2'>Cricket</li>
                        <li className='mb-2'>Football</li>
                        <li className='mb-2'>Badminton</li>
                        <li className='mb-2'>Table Tennis</li>
                        <li className='mb-2'>Any sport u can think of (was a cadet at some point in my life ;) )</li>
                    </ul>
                </div>

                <div className='about-section col-span-1'>
                    <h2 className='text-2xl font-bold mb-4 font-space-grotesk'>Books</h2>
                    <ul>
                        <li className='mb-2'>Harry Potter</li>
                        <li className='mb-2'>Percy Jackson + The Olympians</li>
                        <li className='mb-2'>Roald Dahl</li>
                        <li className='mb-2'>Ultra learning</li>
                        <li className='mb-2'>Mangas (you name it)</li>
                    </ul>
                </div>

                <div className='about-section col-span-1'>
                    <h2 className='text-2xl font-bold mb-4 font-space-grotesk'>Music</h2>
                    <ul>
                        <li className='mb-2'>Anything that sounds good</li>
                        <li className='mb-2'>Lofi</li>
                        <li className='mb-2'>Indie</li>
                        <li className='mb-2'>Pop</li>
                        <li className='mb-2'>Rock</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}