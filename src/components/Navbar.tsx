'use client';
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

import GlassSurface from "@/components/ui/GlassSurface";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 md:left-[20%] md:right-[20%] p-4">
            <GlassSurface
                width="100%"
                height="auto"
                borderRadius={100}
                className="px-6 py-2"
            >
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <div className="flex flex-row items-center justify-between w-full">
                        {/* Logo */}
                        <div className="flex ml-4 md:ml-0 items-center">
                            <h1 className="text-2xl font-bold text-black">
                                Logo
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-black/90 hover:text-black transition-colors duration-200 font-medium"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-black p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                            <div className="flex flex-col space-y-2">
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="text-black/90 hover:text-black transition-colors duration-200 font-medium py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </GlassSurface>
        </nav>
    )
}
