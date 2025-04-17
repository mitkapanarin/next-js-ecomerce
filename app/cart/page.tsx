"use client";

import Image from "next/image";
import Link from "next/link";

const placeholderCartItems = [
  {
    id: "prod_2",
    title: "Comfortable Jeans",
    price: 49.95,
    imageUrl: "https://via.placeholder.com/300x200/E2E8F0/808080?text=Jeans",
    category: "clothes",
    quantity: 1,
  },
  {
    id: "prod_3",
    title: "Wireless Mouse",
    price: 89.0,
    imageUrl: "https://via.placeholder.com/300x200/D6E2EF/808080?text=Mouse",
    category: "tech",
    quantity: 1,
  },
];

const subtotal = placeholderCartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
const tax = subtotal * 0.08;
const total = subtotal + tax;

export default function CartPage() {
  const handleRemoveItem = (id: string | number) => {
    console.log("Remove item:", id);
    alert(`Placeholder: Remove item ${id}`);
  };

  const handleUpdateQuantity = (id: string | number, newQuantity: number) => {
    console.log("Update quantity:", id, newQuantity);
    alert(`Placeholder: Update item ${id} quantity to ${newQuantity}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Your Shopping Cart
      </h1>

      {placeholderCartItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="divide-y divide-gray-200 border rounded-lg overflow-hidden shadow-sm">
              {placeholderCartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-4 gap-4 flex-wrap"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="flex-grow min-w-[150px]">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <label htmlFor={`quantity-${item.id}`} className="sr-only">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      name={`quantity-${item.id}`}
                      min="1"
                      max="99"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      className="w-16 p-1 border rounded text-center"
                      aria-label={`Quantity for ${item.title}`}
                    />
                  </div>
                  <div className="min-w-[80px] text-right">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 font-medium"
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="border rounded-lg p-6 shadow-sm bg-gray-50">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                Proceed to Checkout (Placeholder)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
