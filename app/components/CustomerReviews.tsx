import Image from "next/image";

interface Review {
    id: number;
    rating: number;
    text: string;
    reviewer: string;
    avatar: string;
}

const reviews: Review[] = [
    {
        id: 1,
        rating: 4,
        text: "I recently bought a gorgeous kurti and I'm thrilled! The soft fabric and stunning design fit perfectly, and I've received many compliments. It's versatile enough for both special occasions and casual wear. I highly recommend it for anyone wanting to enhance their wardrobe!",
        reviewer: "Reshma",
        avatar: "/customer_reshma.png",
    },
    {
        id: 2,
        rating: 4,
        text: "I recently bought a gorgeous kurti and I'm thrilled! The soft fabric and stunning design fit perfectly, and I've received many compliments. It's versatile enough for both special occasions and casual wear. I highly recommend it for anyone wanting to enhance their wardrobe!",
        reviewer: "Reshma",
        avatar: "/customer_reshma.png",
    },
    {
        id: 3,
        rating: 4,
        text: "I recently bought a gorgeous kurti and I'm thrilled! The soft fabric and stunning design fit perfectly, and I've received many compliments. It's versatile enough for both special occasions and casual wear. I highly recommend it for anyone wanting to enhance their wardrobe!",
        reviewer: "Reshma",
        avatar: "/customer_reshma.png",
    },
    {
        id: 4,
        rating: 4,
        text: "I recently bought a gorgeous kurti and I'm thrilled! The soft fabric and stunning design fit perfectly, and I've received many compliments. It's versatile enough for both special occasions and casual wear. I highly recommend it for anyone wanting to enhance their wardrobe!",
        reviewer: "Reshma",
        avatar: "/customer_reshma.png",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={star <= rating ? "#f59e0b" : "none"}
                    stroke={star <= rating ? "#f59e0b" : "#d1d5db"}
                    strokeWidth={1.5}
                    width="18"
                    height="18"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                </svg>
            ))}
        </div>
    );
}

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="review-card">
            <StarRating rating={review.rating} />
            <p className="review-text">{review.text}</p>
            <div className="reviewer-info">
                <div className="reviewer-avatar">
                    <Image
                        src={review.avatar}
                        alt={review.reviewer}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <span className="reviewer-name">{review.reviewer}</span>
            </div>
        </div>
    );
}

export default function CustomerReviews() {
    return (
        <section className="section">
            <div className="section-header-group">
                <h2 className="section-title">Customer Say!</h2>
                <p className="section-subtitle">Customer love our products and we always strive to please them all.</p>
            </div>
            <div className="reviews-grid">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </section>
    );
}
