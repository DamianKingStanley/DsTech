"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaRobot,
  FaPaintBrush,
  FaCogs,
  FaUserTie,
  FaHeadset,
  FaShoppingCart,
  FaCloud,
} from "react-icons/fa";
import Link from "next/link";

// Updated services with black-and-white gradients
const services = [
  {
    name: "Mobile App Development",
    icon: <FaMobileAlt className="text-3xl" />,
    desc: "Crafting seamless, user-friendly apps for iOS and Android.",
    color: "from-gray-700 to-gray-900",
    url: "/services/android-and-ios-apps",
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode className="text-3xl" />,
    desc: "Building fast, responsive websites with modern design.",
    color: "from-gray-600 to-gray-800",
    url: "/services/website-development",
  },
  {
    name: "Custom Software",
    icon: <FaCogs className="text-3xl" />,
    desc: "Tailored solutions to meet your business needs.",
    color: "from-gray-700 to-gray-900",
    url: "/services/software-development",
  },
  {
    name: "AI & Machine Learning",
    icon: <FaRobot className="text-3xl" />,
    desc: "Innovative AI to automate and optimize workflows.",
    color: "from-gray-600 to-gray-800",
    url: "/services/general-services",
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush className="text-3xl" />,
    desc: "Designing intuitive, visually stunning experiences.",
    color: "from-gray-700 to-gray-900",
    url: "/services/graphics-and-branding",
  },
  {
    name: "Tech Coaching",
    icon: <FaUserTie className="text-3xl" />,
    desc: "Hands-on education for all skill levels.",
    color: "from-gray-600 to-gray-800",
    url: "/services/tech-coaching",
  },
  {
    name: "Support & Maintenance",
    icon: <FaHeadset className="text-3xl" />,
    desc: "Reliable support to keep systems running.",
    color: "from-gray-700 to-gray-900",
    url: "/services/general-services",
  },
  {
    name: "E-commerce Solutions",
    icon: <FaShoppingCart className="text-3xl" />,
    desc: "Powerful online stores with seamless functionality.",
    color: "from-gray-600 to-gray-800",
    url: "/services/general-services",
  },
  {
    name: "Cloud Services",
    icon: <FaCloud className="text-3xl" />,
    desc: "Scalable cloud infrastructure and solutions.",
    color: "from-gray-700 to-gray-900",
    url: "/services/api-development",
  },
];

const ServicesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);

  // 3D tilt effect
  const rotateX = useTransform(x, [-100, 100], [-15, 15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // Responsive layout
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) setVisibleCount(4);
      else if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalGroups = Math.ceil(services.length / visibleCount);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalGroups);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

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
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    }),
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-500 filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gray-400 filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/10 text-white border border-white/20 uppercase">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            Comprehensive Tech Solutions
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We deliver end-to-end digital solutions tailored to your business
            needs, combining cutting-edge technology with practical expertise.
          </motion.p>
        </motion.div>

        {/* Services Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fixed height container for the carousel */}
          <div className="relative min-h-[400px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {services
                  .slice(
                    activeIndex * visibleCount,
                    activeIndex * visibleCount + visibleCount
                  )
                  .map((service, index) => (
                    <motion.div
                      key={`${activeIndex}-${index}`}
                      className="h-full"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-br rounded-2xl overflow-hidden border border-white/10 shadow-xl"
                        style={{
                          rotateX,
                          rotateY,
                          transformPerspective: 1000,
                        }}
                        onHoverStart={() => x.set(0)}
                        onHoverEnd={() => x.set(0)}
                      >
                        <div
                          className={`p-8 h-full flex flex-col bg-gradient-to-br ${service.color}`}
                        >
                          <div className="mb-6 text-white/90">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {service.name}
                          </h3>
                          <p className="text-white/80 mb-6 flex-grow">
                            {service.desc}
                          </p>
                          <button className="self-start text-white/90 hover:text-white transition-colors flex items-center w-fit">
                            <Link
                              href={service.url || "/default-url"}
                              className="inline-block text-white border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300"
                            >
                              Learn More
                            </Link>
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {totalGroups > 1 && (
            <div
              className={`flex justify-center mt-10 space-x-4 transition-opacity ${
                isHovered ? "opacity-100" : "opacity-30"
              }`}
            >
              <motion.button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowLeft />
              </motion.button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalGroups }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === activeIndex ? "bg-white w-6" : "bg-white/30"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowRight />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
