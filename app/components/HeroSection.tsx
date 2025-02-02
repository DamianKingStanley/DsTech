"use client";
import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";

// const heroImage = "/images/heroImage.png";
const backgroundImage = "/images/Artificial-Intelligence.png";
const brands = ["Web", "Mobile", "AI", "DApp", "Simulation", "Projects"];

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-20 relative flex flex-col lg:flex-row items-center">
        {/* Left Side - Text & Button */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-4">
            DS TECH Software Development Company
          </h1>
          <p className="text-xl mb-8">...building solutions.</p>
          <p className="text-sm mb-6">
            Transforming your business ideas into practical innovations using
            the best mix of Mobile, Desktop, and Website development technology.
          </p>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => (window.location.href = "tel:+2349159822561")}
          >
            Call Us
          </button>
        </div>

        {/* Right Side - Image */}
        {/* <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <Image
            src={heroImage}
            alt="Hero Image"
            width={450}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div> */}
      </div>

      {/* Sliding Brand Logos Section */}
      <div className="relative w-full overflow-hidden mt-10">
        <motion.div
          className="flex space-x-10 justify-center text-lg font-semibold text-gray-300"
          animate={{ x: ["0%", "-50%", "50%"] }} // Slide left and restart
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {brands.concat(brands).map((item, index) => (
            <span key={index} className="mx-4 text-sm">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
