'use client';
import React from 'react'
import CountUp from 'react-countup'
import GlassSurface from './ui/GlassSurface';

export default function Impact() {
    const stats = [
        { label: 'Users Reached', value: 65000 },
        { label: 'Active Users', value: 800 },
        { label: 'Projects', value: 32 },
        { label: 'Clients Satisfied', value: 7 }
    ];

    return (
        <div className='w-full mx-auto max-w-screen-xl px-4 py-20 '>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left'>
                The <span className='text-cgreen font-bold font-space-grotesk'>VAR</span>-Effect
            </h1>

            <div className='mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full mx-auto '>
                {stats.map((stat) => (
                    <div key={stat.label} className='flex flex-col items-center justify-center p-4 md:p-6 text-center w-full shadow-lg sm:shadow-2xl rounded-2xl '>
                        <div className='w-full h-auto flex flex-col items-center justify-center shrink-0'>
                            <CountUp
                                end={stat.value}
                                start={0}
                                duration={1.5}
                                separator=","
                                className="text-3xl md:text-4xl font-bold w-full block"
                                enableScrollSpy
                                useEasing
                            />
                            <p className='mt-1 md:mt-2 text-base md:text-lg'>{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
