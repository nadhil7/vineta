import Image from "next/image";
import timelessImage from "@/public/Timeless_Grace.jpg";

export default function TimelessGraceBanner() {
    return (
        <div className="promo-banner-wrapper">
            <section className="promo-banner">
                <Image
                    src={timelessImage}
                    alt="Timeless Grace - Summer Dress Collection"
                    style={{ width: "100%", height: "auto", display: "block" }}
                />
            </section>
        </div>
    );
}
