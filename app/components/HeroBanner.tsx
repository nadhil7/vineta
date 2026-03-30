import Image from "next/image";
import bannerImage from "@/public/hero_banner.png";
import Link from "next/link";

export default function HeroBanner() {
    return (
        <section className="hero-banner">
            <Image
                src={bannerImage}
                alt="Wedding Festive Collection 2026 - Three women in embroidered dresses"
                fill
                priority
                style={{ objectFit: 'cover' }}
            />
            <div className="hero-overlay">
                <span className="hero-subtitle">ELEGANCE IN EVERY THREAD</span>
                <h1 className="hero-title">Bridal Edit</h1>
                <Link href="/shop" className="hero-btn">
                    SHOP NOW
                </Link>
            </div>
        </section>
    );
}
