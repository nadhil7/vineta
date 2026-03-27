import Image from "next/image";

export interface Product {
    id: number;
    image: string;
    name: string;
    price: string;
    originalPrice?: string;
    saleLabel?: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card">
            <div className="product-image-wrap">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="product-info">
                <p className="product-name">{product.name}</p>
                <div className="product-pricing">
                    <span className="product-price">{product.price}</span>
                    {product.originalPrice && (
                        <span className="product-original-price">{product.originalPrice}</span>
                    )}
                    {product.saleLabel && (
                        <span className="product-sale-label">{product.saleLabel}</span>
                    )}
                </div>
                <button className="add-to-cart-btn">Add To Cart</button>
            </div>
        </div>
    );
}
