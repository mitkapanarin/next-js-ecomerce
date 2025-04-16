"use client";

import ProductCard from "@/app/components/ProductCard";
import { sampleProducts } from "@/app/data/products";
import { use } from "react";

interface CategoryPageParamsPromise {
  slug: string;
}

interface CategoryPageProps {
  params: Promise<CategoryPageParamsPromise>;
}

const handleAddToCart = (productId: string | number) => {
  console.log(`Add to cart clicked for product: ${productId}`);
  alert(`(Placeholder) Added product ID ${productId} to cart!`);
};

export default function CategoryPage({
  params: paramsPromise,
}: CategoryPageProps) {
  // Use the 'use' hook to resolve the params Promise
  const params = use(paramsPromise);
  const categorySlug = params.slug;

  const productsToShow = sampleProducts.filter(
    (product) => product.category === categorySlug
  );

  const displayCategoryName =
    categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        {displayCategoryName} Products
      </h1>

      {productsToShow.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsToShow.map((product) => (
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
      ) : (
        <p className="text-center text-gray-600">
          No products found in the "{displayCategoryName}" category yet.
        </p>
      )}
    </div>
  );
}
