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
            At DS Tech, we don&apos;t just deliver solutions, we create
            innovative, results-driven, and customer-focused experiences. Our
            commitment to integrity, collaboration, and continuous improvement
            ensures that we stay ahead of the curve, providing exceptional value
            to our clients.
          </p>
          <p className="text-lg mb-6 text-justify">
            We embrace cutting-edge technology to develop solutions that drive
            efficiency and success. Trust and transparency are at the core of
            our business. Further more, we work closely with our clients to
            understand their unique needs and proffer solutions accordingly.
          </p>
          <p className="text-lg mb-6 text-justify">
            Your success is our priority. We go above and beyond to deliver
            outstanding results. We measure success by the impact we create. We
            are always evolving to offer the best solutions in the industry.
          </p>
          <p className="text-lg mb-6 text-justify">
            Choosing DS Tech means partnering with a team that is deeply
            invested in your success. Let&apos;s work together to bring your
            vision to life.
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
