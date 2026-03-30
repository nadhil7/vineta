import Image from "next/image";
import communityImage from "@/public/community stories.png";

export default function CommunityStories() {
    const panels = [0, 25, 50, 75, 100]; // object-position X percentages

    return (
        <section className="section">
            <div className="section-header-group">
                <h2 className="section-title">Community Stories</h2>
                <p className="section-subtitle">Customer love our products and we always strive to please them all.</p>
            </div>
            <div className="community-grid">
                {panels.map((pos, index) => (
                    <div key={index} className="community-photo">
                        <Image
                            src={communityImage}
                            alt={`Community Story ${index + 1}`}
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: `${pos}% center`,
                            }}
                            sizes="(max-width: 768px) 50vw, 20vw"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
