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
  
  