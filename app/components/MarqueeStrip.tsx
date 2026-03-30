"use client";

import Link from "next/link";

const marqueeItems = [
    "New Arrivals",
    "50% Off on selected Items",
    "New Arrivals",
    "Summer Sale",
    "50% Off on selected Items",
    "New Arrivals",
    "Summer Sale",
    "50% Off on selected Items",
];

export default function MarqueeStrip() {
    return (
        <div className="marquee-strip">
            <div className="marquee-track">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                    <div key={index} className="marquee-item">
                        <div className="marquee-dot" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
