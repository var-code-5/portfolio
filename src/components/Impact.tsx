import React from 'react'
import CountUp from './ui/CountUp'
import GlassSurface from './ui/GlassSurface';

export default function Impact() {
    const stats = [
        { label: 'Total Users', value: 1000 },
        { label: 'Active Users', value: 800 },
        { label: 'Projects Created', value: 150 },
        { label: 'Community Members', value: 500 }
    ];

    return (
        <div className='w-full mx-auto max-w-screen-xl px-4'>
            <h1 className='text-6xl '>The <span className='text-cgreen font-bold font-space-grotesk'>VAR</span>-Effect</h1>

            <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
                {stats.map((stat) => (
                    <GlassSurface key={stat.label} className='flex flex-col items-center justify-center p-6 text-center'>
                        <CountUp
                            to={stat.value}
                            from={0}
                            duration={2.5}
                            separator=","
                            className="text-4xl font-bold w-full"
                            ease="power3.out"
                        />
                        <p className='mt-2 text-lg'>{stat.label}</p>
                    </GlassSurface>
                ))}
            </div>
        </div>
    )
}
