import ProductCard, { Product } from "./ProductCard";
import SectionHeader from "./SectionHeader";

const newArrivals: Product[] = [
    { id: 1, image: "/New_Arrival_product-1.png", name: "Short Fit Sporty Round Neck T-shirt", price: "Rs.150.00" },
    { id: 2, image: "/New_Arrival_product-2.png", name: "Short Fit Sporty Round Neck T-shirt", price: "Rs.290.00" },
    { id: 3, image: "/New_Arrival_product-3.png", name: "Short Fit Sporty Round Neck T-shirt", price: "Rs.150.00" },
    { id: 4, image: "/New_Arrival_product-1.png", name: "Short Fit Sporty Round Neck T-shirt", price: "Rs.150.00" },
    { id: 5, image: "/New_Arrival_product-2.png", name: "Short Fit Sporty Round Neck T-shirt", price: "Rs.150.00" },
];

export default function NewArrivals() {
    return (
        <section className="section">
            <SectionHeader title="New Arrivals" viewAllHref="/new-arrivals" />
            <div className="product-scroll">
                {newArrivals.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
