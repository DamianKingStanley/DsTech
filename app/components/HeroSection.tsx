"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Particles from "./Particles"; // You'll need to implement this component

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Tech domains with icons (using emoji for simplicity)
  const techDomains = [
    { name: "AI Solutions", icon: "🤖" },
    { name: "Web Apps", icon: "🌐" },
    { name: "Mobile Dev", icon: "📱" },
    { name: "Cloud Tech", icon: "☁️" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Tech Coaching", icon: "👨‍🏫" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      y: -3,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 2px 10px -5px rgba(59, 130, 246, 0.4)",
    },
  };

  const infiniteScrollVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative mt-20 md:mt-14 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Particle Background */}
      <Particles className="absolute inset-0 z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90 z-0" />

      <div className="container mx-auto px-2 lg:px-2 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Pre-heading */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Innovation at Lightspeed
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400"
          >
            <span className="block">Transform Your</span>
            <span className="block">
              <span className="relative">
                <span className="relative inline-block">
                  <span className="relative z-10  text-blue-400">
                    Digital Future
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-500/30 -rotate-1 z-0"></span>
                </span>
              </span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            At Quortek, We build solutions and also onboard you into the tech
            space. We provide software solutions and empower teams through our{" "}
            <span className="font-semibold text-white">
              practical tech coaching
            </span>{" "}
            to help businesses thrive in the digital age.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full transition-all duration-300"
              >
                Reach Out
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <button
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                onClick={() => (window.location.href = "tel:+2349159822561")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+2349159822561">Schedule Call</a>
              </button>
            </motion.div>
          </motion.div>

          {/* Tech Domains Marquee */}
          <div className="relative overflow-hidden py-6">
            <motion.div
              className="flex whitespace-nowrap"
              variants={infiniteScrollVariants}
              animate="animate"
            >
              {[...techDomains, ...techDomains].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="inline-flex items-center mx-8 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl mr-3">{tech.icon}</span>
                  <span className="text-sm font-medium text-white">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
