"use client";
import ProductCard from "./components/ProductCard";

const sampleProducts = [
  {
    id: "prod_1",
    title: "Stylish T-Shirt",
    price: 25.99,
    imageUrl: "https://via.placeholder.com/300x200/EBF4FA/808080?text=T-Shirt",
  },
  {
    id: "prod_2",
    title: "Comfortable Jeans",
    price: 49.95,
    imageUrl: "https://via.placeholder.com/300x200/E2E8F0/808080?text=Jeans",
  },
  {
    id: "prod_3",
    title: "Running Sneakers",
    price: 89.0,
    imageUrl: "https://via.placeholder.com/300x200/D6E2EF/808080?text=Sneakers",
  },
  {
    id: 4,
    title: "Classic Watch with a Very Long Title That Might Truncate",
    price: 150.5,
    imageUrl: "https://via.placeholder.com/300x200/CFD8E3/808080?text=Watch",
  }, // Example with number ID
];

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
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
