import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ShoppingCart,
  Trash2,
  Check,
  Play,
  User,
  Box,
  Rocket,
} from "lucide-react";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import productsData from "./data/products.json";

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products"); // For toggling Products / Cart

  // Add to Cart Functionality
  const addToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);
    if (isAlreadyInCart) {
      toast.info(`${product.name} is already in the cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  // Remove from Cart Functionality
  const removeFromCart = (productId) => {
    const removedItem = cart.find((item) => item.id === productId);
    setCart(cart.filter((item) => item.id !== productId));
    toast.error(`${removedItem.name} removed from cart!`);
  };

  // Proceed to Checkout
  const handleCheckout = () => {
    setCart([]);
    toast.success("Proceeding to checkout! Cart cleared.");
  };


  return (
      <div className="min-h-screen text-gray-800 bg-white font-sans">
        <ToastContainer position="top-right" autoClose={2000} />
  
        {/* --- NAVBAR --- */}
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-violet-600">DigiTools</div>
            <div className="hidden md:flex space-x-8 font-medium text-gray-600">
              <a href="#" className="hover:text-violet-600 transition">
                Products
              </a>
              <a href="#" className="hover:text-violet-600 transition">
                Features
              </a>
              <a href="#" className="hover:text-violet-600 transition">
                Pricing
              </a>
              <a href="#" className="hover:text-violet-600 transition">
                Testimonials
              </a>
              <a href="#" className="hover:text-violet-600 transition">
                FAQ
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <div
                className="flex items-center text-gray-700 hover:text-violet-600 transition cursor-pointer"
                onClick={() => setActiveTab("cart")}
              >
                <ShoppingCart className="w-5 h-5 mr-1" />
                <span className="font-medium">Login</span>
              </div>
              <button className="bg-violet-600 text-white font-medium hover:bg-violet-700 rounded-full px-5 py-2 transition">
                Get Started
              </button>
            </div>
          </div>
        </nav>
  
   {/* --- HERO SECTION --- */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-bold text-violet-600 tracking-wide bg-violet-50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
                New: AI-Powered Tools Available
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 leading-tight text-gray-900">
                Supercharge Your <br />
                Digital Workflow
              </h1>
              <p className="text-gray-500 text-base mb-4 max-w-lg">
                Access premium AI tools, design assets, templates, and
                productivity software—all in one place. Start creating faster
                today.
              </p>
              <a
                href="#"
                className="text-violet-600 font-medium hover:underline text-sm block mb-6"
              >
                Explore Products
              </a>
              <div className="flex space-x-4 items-center">
                <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg px-6 py-3 transition">
                  Explore Products
                </button>
                <button className="border border-violet-600 text-violet-600 hover:bg-violet-50 font-semibold rounded-lg px-6 py-3 flex items-center justify-center space-x-2 transition">
                  <Play className="w-4 h-4 mr-1 fill-current" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/banner.png"
                  alt="Workflow Mockup"
                  className="rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>
  