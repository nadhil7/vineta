import Image from "next/image";
import communityImage from "@/public/community stories.png";

export default function CommunityStories() {
    return (
        <section className="section">
            <div className="section-header-group">
                <h2 className="section-title">Community Stories</h2>
                <p className="section-subtitle">Customer love our products and we always strive to please them all.</p>
            </div>
            <div className="community-strip">
                <Image
                    src={communityImage}
                    alt="Community Stories - Customers wearing Vineta collection"
                    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
                />
            </div>
        </section>
    );
}
