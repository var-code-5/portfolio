'use client';
import React, { useState, useRef } from 'react';
import copy from "copy-to-clipboard";

export default function Email() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipText, setTooltipText] = useState('Click to copy');
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setTooltipPos({ x: e.clientX + 10, y: e.clientY + 10 });
    };

    const handleMouseEnter = () => {
        setShowTooltip(true);
        setTooltipText('Click to copy');
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
        setTooltipText('Click to copy');
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const copyToClipboard = () => {
        copy("Varshithisworking@gmail.com");
        setTooltipText('Successfully copied!');
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setShowTooltip(false);
            setTooltipText('Click to copy');
        }, 1200);
    };

    return (
        <>
            <div
                className="absolute top-3/4 -left-20 rotate-90 font-space-grotesk text-lg cursor-pointer select-none hidden md:block"
                onClick={copyToClipboard}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                Varshithisworking@gmail.com
            </div>
            {showTooltip && (
                <div
                    style={{
                        position: 'fixed',
                        left: tooltipPos.x,
                        top: tooltipPos.y,
                        background: '#222',
                        color: '#fff',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.95rem',
                        pointerEvents: 'none',
                        zIndex: 1000,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                >
                    {tooltipText}
                </div>
            )}
        </>
    );
}
