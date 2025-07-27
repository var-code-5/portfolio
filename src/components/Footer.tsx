import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-full h-[50vh] min-h-[50vh] bg-cpurple flex flex-col justify-between items-center text-white font-rethink-sans px-4 md:px-20'>
            <div className='flex  flex-col-reverse md:flex-row w-full h-full'>
                <div className='w-full md:w-1/2 h-full flex flex-col justify-evenly items-start '>
                    <div>
                        <h1 className='text-lg font-light font-space-grotesk'>QUICK LINKS</h1>
                        <ul className='flex font-space-grotesk text-2xl space-x-4 items-center'>
                            <li><Link href="/" className='text-white hover:text-cgreen hover:bg-black hover:border-2 hover:border-dashed underline'>Home</Link></li>
                            <li><div className='w-6 h-[2px] bg-white'></div></li>
                            <li><Link href="/projects" className='text-white hover:text-cgreen hover:bg-black hover:border-2 hover:border-dashed underline'>Projects</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg font-light font-space-grotesk'>EXTRAS</h1>
                        <ul className='flex font-space-grotesk text-2xl space-x-4 items-center'>
                            <li><Link href="https://drive.google.com/file/d/1AUyeZyy6KdL6Nv5sOb4RAnQatEr_7xxG/view?usp=sharing" className='text-white hover:text-cgreen hover:bg-black hover:border-2 hover:border-dashed underline'>RESUME</Link></li>
                            {/* <li><div className='w-6 h-[2px] bg-white'></div></li>
                            <li><Link href="/projects" className='text-white hover:text-cgreen hover:bg-black hover:border-2 hover:border-dashed underline'>Projects</Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-1/2 space-y-4 h-full flex flex-col justify-center items-start'>
                    <div className='font-rethink-sans text-4xl md:text-6xl font-bold mt-4'>
                        <h1>Would love to hear from</h1>
                        <h1 className='flex'>you <ArrowDown className='md:w-14 h-auto' strokeWidth={3}/>.</h1>
                    </div>
                    <p className='font-rethink-sans text-lg'>If you have requests or questions, kindly do not hesitate to contact me.</p>
                    <h3 className='font-rethink-sans text-2xl font-bold'>Varshithisworking@gmail.com</h3>
                </div>
            </div>
            <div className='border-t border-white mt-4 w-full flex flex-col md:flex-row justify-between items-center mb-6 p-4'>
                <div>
                    <ul className='flex space-x-4 text-lg font-space-grotesk'>
                        <li><Link href="https://www.linkedin.com/in/varshith-kumar-reddy-meda/" target="_blank" className='text-white hover:text-cgreen hover:bg-black hover:border-2 hover:border-dashed transition-all duration-300 ease-in-out'>LINKEDIN</Link></li>
                        <li><Link href="https://github.com/var-code-5" target="_blank" className='text-white hover:text-cgreen hover:bg-black hover:border-2 hover:border-dashed transition-all duration-300 ease-in-out'>GITHUB</Link></li>
                        <li><Link href="mailto:varshithisworking@gmail.com" target="_blank" className='text-white hover:text-cgreen hover:bg-black hover:border-2 hover:border-dashed transition-all duration-300 ease-in-out'>EMAIL</Link></li>
                    </ul>
                </div>
                <div className='text-white font-rethink-sans text-lg'>
                    <p>© 2025 Varshith Kumar Reddy Meda</p>
                </div>
            </div>
        </div>
    )
}
