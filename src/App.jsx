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


  