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
  
  {/* --- STATS SECTION --- */}
        <section className="bg-violet-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold">50K+</div>
              <div className="text-violet-100 mt-2 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold">200+</div>
              <div className="text-violet-100 mt-2 text-sm">Premium Tools</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold">4.9</div>
              <div className="text-violet-100 mt-2 text-sm">Rating</div>
            </div>
          </div>
        </section>
  
        {/* --- PRODUCTS SECTION --- */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Premium Digital Tools
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
  
            <div className="inline-flex rounded-full border border-gray-200 p-1 bg-white mt-8">
              <button
                className={`px-6 py-2 rounded-full font-medium transition text-sm ${activeTab === "products" ? "bg-violet-600 text-white shadow-sm" : "text-violet-600 hover:text-violet-700"}`}
                onClick={() => setActiveTab("products")}
              >
                Products
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition text-sm ${activeTab === "cart" ? "bg-violet-600 text-white shadow-sm" : "text-violet-600 hover:text-violet-700"}`}
                onClick={() => setActiveTab("cart")}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>
  
          {activeTab === "products" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.map((product) => {
                const isInCart = cart.some((item) => item.id === product.id);
  
                let tagClasses = "bg-violet-100 text-violet-700";
                if (product.tagType === "warning")
                  tagClasses = "bg-orange-100 text-orange-700";
                if (product.tagType === "success")
                  tagClasses = "bg-green-100 text-green-700";
  
                return (
                  <div
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-xl p-6 relative flex flex-col justify-between hover:shadow-sm transition-shadow"
                  >
                    <div>
                      <span
                        className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${tagClasses}`}
                      >
                        {product.tag}
                      </span>
  
                      <div className="text-4xl mb-4 mt-2 flex items-center justify-start h-10">
                        {product.icon.includes("/") ? (
                          <img
                            src={product.icon}
                            alt={product.name}
                            className="h-10 object-contain"
                          />
                        ) : (
                          product.icon
                        )}
                      </div>
  
                      <h3 className="text-lg font-bold mb-2 text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-xs mb-4">
                        {product.description}
                      </p>
                      <div className="mb-4">
                        <span className="text-2xl font-extrabold text-gray-900">
                          ${product.price}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">
                          /{product.period}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-xs text-gray-600"
                          >
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className={`w-full font-semibold rounded-lg py-2.5 transition ${isInCart ? "bg-green-500 text-white cursor-default" : "bg-violet-600 text-white hover:bg-violet-700"}`}
                      onClick={() => !isInCart && addToCart(product)}
                    >
                      {isInCart ? "Added to Cart" : "Buy Now"}
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            /* CART SECTION */
            <div className="max-w-3xl mx-auto">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-gray-500 bg-gray-50 rounded-xl border border-dashed">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-xl font-semibold mb-2">
                    Your cart is empty.
                  </p>
                  <button
                    className="text-violet-600 font-medium hover:underline text-sm"
                    onClick={() => setActiveTab("products")}
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-4">
                    Your Cart
                  </div>
                  <div className="divide-y divide-gray-100">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="py-4 flex justify-between items-center"
                      >
                        <div className="flex items-center space-x-4">
                          {/* Updated to handle both PNG paths and emoji placeholders in the cart */}
                          <span className="text-3xl flex items-center justify-center w-8 h-8">
                            {item.icon.includes("/") ? (
                              <img
                                src={item.icon}
                                alt={item.name}
                                className="h-8 object-contain"
                              />
                            ) : (
                              item.icon
                            )}
                          </span>
  
                          <div>
                            <div className="font-bold text-gray-900 text-sm">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              ${item.price}
                            </div>
                          </div>
                        </div>
                        <button
                          className="text-red-500 text-xs font-semibold hover:underline"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 flex justify-between items-center text-sm">
                    <span className="text-gray-500">Total:</span>
                    <span className="text-lg font-bold text-gray-900">
                      ${cart.reduce((sum, item) => sum + item.price, 0)}
                    </span>
                  </div>
                  <button
                    className="w-full bg-violet-600 text-white font-semibold rounded-lg py-3 mt-4 hover:bg-violet-700 transition text-sm"
                    onClick={handleCheckout}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </section>
  