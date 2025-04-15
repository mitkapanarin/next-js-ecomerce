import React from "react";

interface ProductCardProps {
  id: string | number;
  imageUrl: string;
  title: string;
  price: number;
  onAddToCart: (productId: string | number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  title,
  price,
  onAddToCart,
}) => {
  const handleAddToCartClick = () => {
    onAddToCart(id);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2 truncate" title={title}>
          {title}
        </h3>
        <p className="text-gray-700 font-bold mb-4">${price.toFixed(2)}</p>
        <div className="flex-grow"></div>
        <button
          onClick={handleAddToCartClick}
          className="mt-auto w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          aria-label={`Add ${title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
