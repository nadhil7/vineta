import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: 1,
        image: "/category_highlights_1.png",
        alt: "Exquisite Craftsmanship - Golden Kurti Collection",
        href: "/shop",
    },
    {
        id: 2,
        image: "/category_highlights_2.png",
        alt: "Exquisite Craftsmanship - Festive Pink Collection",
        href: "/shop",
    },
];

export default function CategoryHighlights() {
    return (
        <section className="section">
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
                            src={category.image}
                            alt={category.alt}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                        <div className="category-card-overlay" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
