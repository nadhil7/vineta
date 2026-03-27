import Image from "next/image";
import bannerImage from "@/public/hero_banner.png";

export default function HeroBanner() {
    return (
        <section className="hero-banner">
            <Image
                src={bannerImage}
                alt="Wedding Festive Collection 2026 - Three women in embroidered dresses"
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
            />
        </section>
    );
}
