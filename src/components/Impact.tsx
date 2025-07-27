import React from 'react'
import CountUp from './ui/CountUp'
import GlassSurface from './ui/GlassSurface';

export default function Impact() {
    const stats = [
        { label: 'Users Reached', value: 65000 },
        { label: 'Active Users', value: 800 },
        { label: 'Projects Created', value: 32 },
        { label: 'Clients Satisfied', value: 7 }
    ];

    return (
        <div className='w-full mx-auto max-w-screen-xl px-4 py-12'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left'>
                The <span className='text-cgreen font-bold font-space-grotesk'>VAR</span>-Effect
            </h1>

            <div className='mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mx-auto'>
                {stats.map((stat) => (
                    <GlassSurface key={stat.label} className='flex flex-col items-center justify-center p-4 md:p-6 text-center w-full'>
                        <div className='w-full h-auto flex flex-col items-center justify-center shrink-0'>
                            <CountUp
                                to={stat.value}
                                from={0}
                                duration={2.5}
                                separator=","
                                className="text-3xl md:text-4xl font-bold w-full block"
                                ease="power3.out"
                            />
                            <p className='mt-1 md:mt-2 text-base md:text-lg'>{stat.label}</p>
                        </div>
                    </GlassSurface>
                ))}
            </div>
        </div>
    )
}
