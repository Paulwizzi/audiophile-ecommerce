"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../components/context/cartcontext";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "lucide-react"; // For the orange check icon

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("eMoney");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  // Form input states
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, total: grandTotal }),
  });
    setShowModal(true);
  };

  const handleReturnHome = () => {
    clearCart();
    setShowModal(false);
    router.push("/");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping + vat;

  const mainItem = cart[0];
  const remainingCount = cart.length > 1 ? cart.length - 1 : 0;

  return (
    <main className="bg-[#F2F2F2] min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg md:col-span-2"
        >
          <h2 className="text-2xl font-bold uppercase mb-8">Checkout</h2>

          {/* Billing Details */}
          <section className="mb-8">
            <h3 className="text-[#D87D4A] uppercase text-sm font-bold mb-4">
              Billing Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alexei@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 202-555-0136"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm"
                  required
                />
              </div>
            </div>
          </section>

          {/* Shipping Info */}
          <section className="mb-8">
            <h3 className="text-[#D87D4A] uppercase text-sm font-bold mb-4">
              Shipping Info
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs uppercase mb-1">Address</label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="w-full border rounded-lg p-3 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-1">ZIP Code</label>
                <input
                  type="text"
                  placeholder="10001"
                  className="w-full border rounded-lg p-3 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-1">City</label>
                <input
                  type="text"
                  placeholder="New York"
                  className="w-full border rounded-lg p-3 text-sm"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase mb-1">Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  className="w-full border rounded-lg p-3 text-sm"
                  required
                />
              </div>
            </div>
          </section>

          {/* Payment Details */}
          <section>
            <h3 className="text-[#D87D4A] uppercase text-sm font-bold mb-4">
              Payment Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <p className="text-xs uppercase font-semibold">Payment Method</p>
              <div className="flex flex-col gap-2">
                <label className="border rounded-lg p-3 text-sm flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "eMoney"}
                    onChange={() => setPaymentMethod("eMoney")}
                  />
                  e-Money
                </label>
                <label className="border rounded-lg p-3 text-sm flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {paymentMethod === "eMoney" && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs uppercase mb-1">
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    placeholder="238521993"
                    className="w-full border rounded-lg p-3 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase mb-1">
                    e-Money PIN
                  </label>
                  <input
                    type="text"
                    placeholder="6891"
                    className="w-full border rounded-lg p-3 text-sm"
                    required
                  />
                </div>
              </div>
            )}
          </section>

          <button
            type="submit"
            className="w-full bg-[#D87D4A] text-white py-3 mt-6 rounded-md uppercase text-sm hover:bg-[#FBAF85] transition"
          >
            Continue & Pay
          </button>
        </form>

        {/* Summary */}
        <aside className="bg-white p-8 rounded-lg h-fit">
          <h3 className="font-bold uppercase text-lg mb-6">Summary</h3>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-xs">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold">
                  x{item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">Total</span>
              <span className="font-bold">${total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">Shipping</span>
              <span className="font-bold">${shipping}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">VAT (Included)</span>
              <span className="font-bold">${vat.toFixed(0)}</span>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-gray-500 uppercase">Grand Total</span>
              <span className="font-bold text-[#D87D4A]">
                ${grandTotal.toFixed(0)}
              </span>
            </div>
          </div>
        </aside>
      </div>

      {/* ✅ Confirmation Modal (Styled Like Your Example) */}
      {showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-lg max-w-md w-full p-8 shadow-xl text-center">
      
      {/* Orange Check Icon */}
      <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>

      {/* Title + Message */}
      <h2 className="text-2xl text-left font-bold uppercase mb-2 mt-4 leading-tight">
        Thank You <br /> For Your Order
      </h2>
      <p className="text-gray-500 text-left mb-6 text-sm">
        You will receive an email confirmation shortly.
      </p>

      {/* Order Summary */}
      {mainItem && (
        <div className="bg-[#F1F1F1] rounded-lg overflow-hidden mb-6 flex flex-col md:flex-row">
          {/* Left side: item info */}
          <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-gray-300">
            <div className="flex items-center gap-4 p-4">
              <img
                src={mainItem.image}
                alt={mainItem.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex flex-col text-left">
                <p className="text-sm font-semibold">{mainItem.name}</p>
                <p className="text-gray-500 text-xs">
                  ${mainItem.price.toLocaleString()}
                </p>
              </div>
              <span className="ml-auto text-gray-500 text-xs">
                x{mainItem.quantity}
              </span>
            </div>

            {/* Additional items line */}
            {remainingCount > 0 && (
              <p className="text-center text-gray-500 text-xs py-3 border-t border-gray-300">
                and {remainingCount} other item{remainingCount > 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Right side: grand total */}
          <div className="bg-black text-white flex flex-col justify-center items-center p-4 md:w-40">
            <p className="text-xs uppercase text-gray-400 mb-1">Grand Total</p>
            <p className="font-bold text-lg">${grandTotal.toLocaleString()}</p>
          </div>
        </div>
      )}

      {/* Back to home button */}
      <button
        onClick={handleReturnHome}
        className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-3 rounded-md uppercase font-semibold text-sm transition"
      >
        Back to Home
      </button>
    </div>
  </div>
)}

    </main>
  );
}
