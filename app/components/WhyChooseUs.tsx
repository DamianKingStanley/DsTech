"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const heroImage = "/images/robot.png";
// const backgroundImage = "/images/comp.png";
const brands = ["Web", "Mobile", "AI", "DApp", "Simulation", "Projects"];

const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-white text-black  py-10"
      //   style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-opacity-60"></div>

      <div className="container bg-white text-black mx-auto px-6 lg:px-20 relative flex flex-col-reverse lg:flex-row items-center gap-3">
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl font-bold mb-4 mt-3">Why Choose Us</h1>
          <p className="text-xl mb-8">We are the best. No Cap!</p>
          <p className="text-lg mb-6 text-justify">
            At DS Tech, we believe that our company stands out from the
            competition. With a strong focus on innovation, integrity,
            collaboration, customer focus, results-orientation, and continuous
            improvement, we are uniquely positioned to provide exceptional value
            to our clients. In this article, we will explore why you should
            choose DS Tech Innovations as your partner for your next project.
          </p>
          <p className="text-lg mb-6 text-justify">
            We believe that our commitment to innovation, integrity,
            collaboration, customer focus, results-orientation, and continuous
            improvement sets us apart from the competition. We are passionate
            about what we do, and we are committed to delivering exceptional
            value to our clients. If you are looking for a partner who is
            committed to your success, we encourage you to consider Starnet
            Innovations for your next project.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <Image
            src={heroImage}
            alt="Hero Image"
            width={450}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Sliding Brand Logos Section */}
      <div className="relative w-full overflow-hidden mt-10">
        <motion.div
          className="flex space-x-10 justify-center text-lg font-semibold"
          animate={{ x: ["0%", "-50%", "50%"] }} // Slide left and restart
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {brands.concat(brands).map((item, index) => (
            <span key={index} className="mx-4 text-xl">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
