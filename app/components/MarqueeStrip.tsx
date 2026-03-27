"use client";

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
                    <span key={index} className="marquee-item">
                        <span className="marquee-dot" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
