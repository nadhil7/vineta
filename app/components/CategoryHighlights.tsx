"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: 1,
        image: "/category_highlights_1.png",
        mobileImage: "/category_highlights_1_mobile.png",
        alt: "Exquisite Craftsmanship - Golden Kurti Collection",
        href: "/shop",
    },
    {
        id: 2,
        image: "/category_highlights_2.png",
        mobileImage: "/category_highlights_2_mobile.png",
        alt: "Exquisite Craftsmanship - Festive Pink Collection",
        href: "/shop",
    },
];

export default function CategoryHighlights() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="category-highlights">
            <div className="section-header-group">
                <h2 className="section-title">Category Highlights</h2>
                <p className="section-subtitle">
                    Express your style with our standout collections-fashion meets sophistication
                </p>
            </div>
            <div className="category-grid">
                {categories.map((category) => (
                    <Link key={category.id} href={category.href} className="category-card">
                        <Image
                            src={isMobile ? category.mobileImage : category.image}
                            alt={category.alt}
                            fill
                            style={{ objectFit: isMobile ? "contain" : "cover" }}
                            className={isMobile ? "mobile-image" : "desktop-image"}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
