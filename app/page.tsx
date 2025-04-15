"use client";
import ProductCard from "./components/ProductCard";
import { sampleProducts } from "./data/products";

export default function HomePage() {
  // Define the handler function for adding to cart
  const handleAddToCart = (productId: string | number) => {
    console.log(`Product added to cart: ${productId}`);
    // Later, this function will interact with a cart state or API
    alert(`Added product ID ${productId} to cart! (Placeholder)`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            category={product.category}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
