"use client";

import { useCart } from "../components/context/cartcontext";
import { useState, useRef, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";



const CartDropdown: React.FC = () => {
  const { cart, clearCart, updateQty, getTotalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const isCheckoutPage = pathname === "/checkout";

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    const handleCheckout = () => {
    setIsOpen(false); // close dropdown (optional)
    router.push("/checkout"); // navigate to checkout page
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Cart Icon */}
      <button
        aria-label="Toggle cart"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2"
      >
        <FiShoppingCart size={22} />
        {getTotalItems() > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#D87D4A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
         <>
          {/* Overlay for mobile */}
          <div
            className="fixed inset-0 bg-black/40 z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          />

        <div
       className="z-50 bg-white rounded-lg shadow-2xl p-6 text-gray-800 w-80
         transition-all duration-200 ease-out
         sm:absolute sm:right-0 sm:mt-3
         fixed sm:top-auto sm:left-auto sm:translate-x-0 sm:translate-y-0
         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold uppercase text-sm">Cart ({getTotalItems()})</h4>
            <button onClick={clearCart} className="text-gray-500 text-xs hover:text-black">
              Remove all
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-6">
              Your cart is empty.
            </p>
          ) : (
            <>
              <ul className="space-y-4 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-contain bg-[#F1F1F1]"
                      />
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">${item.price}</p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="bg-[#F1F1F1] flex items-center justify-between rounded-md w-20 px-2 py-1">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-black text-sm font-bold"

                      >
                        −
                      </button>
                      <span className="font-semibold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-black text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Total */}
              <div className="flex justify-between items-center mt-6">
                <span className="uppercase text-gray-500 text-xs tracking-wide">Total</span>
                <span className="font-bold text-lg">${total.toFixed(2)}</span>
              </div>

              {/* Checkout */}
              <button 
               onClick={handleCheckout}
               className="mt-6 w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-3 rounded-md uppercase font-semibold text-sm tracking-wider transition">
                Checkout
              </button>
            </>
          )}
        </div>
         </>   
      )}
    </div>
  );
};

export default CartDropdown;


