"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaRobot,
  FaPaintBrush,
  FaCogs,
  FaUserTie,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/legacy/image";
import { useTheme } from "next-themes";

const services = [
  {
    name: "Mobile App Development",
    icon: <FaMobileAlt className="text-2xl" />,
    desc: "Building seamless, user-friendly apps for iOS and Android that drives growth.",
    image: "/images/appdev.avif",
    url: "/services/android-and-ios-apps",
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode className="text-2xl" />,
    desc: "Building fast, responsive websites with modern design that convert visitors to customers.",
    image: "/images/webdev.avif",
    url: "/services/website-development",
  },
  {
    name: "Custom Software",
    icon: <FaCogs className="text-2xl" />,
    desc: "Tailored solutions designed specifically for your unique business requirements.",
    image: "/images/softdev.avif",
    url: "/services/software-development",
  },
  {
    name: "AI Solutions",
    icon: <FaRobot className="text-2xl" />,
    desc: "Implementing intelligent automation to streamline operations and reduce costs.",
    image: "/images/Aidev.avif",
    url: "/services/general-services",
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush className="text-2xl" />,
    desc: "Creating intuitive interfaces that delight users and improve conversion rates.",
    image: "/images/uidev.avif",
    url: "/services/graphics-and-branding",
  },
  {
    name: "Tech Coaching",
    icon: <FaUserTie className="text-2xl" />,
    desc: "Practical training programs to upskill your team in modern technologies.",
    image: "/images/coachdev.avif",
    url: "/services/tech-coaching",
  },
  // {
  //   name: "IT Support",
  //   icon: <FaHeadset className="text-2xl" />,
  //   desc: "Reliable maintenance and support to keep your systems running smoothly.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   url: "/services/general-services",
  // },
  // {
  //   name: "E-commerce Solutions",
  //   icon: <FaShoppingCart className="text-2xl" />,
  //   desc: "Complete online store solutions with secure payment integration.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   url: "/services/general-services",
  // },
  // {
  //   name: "Cloud Services",
  //   icon: <FaCloud className="text-2xl" />,
  //   desc: "Scalable cloud infrastructure to support your growing business needs.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   url: "/services/api-development",
  // },
];

const ServicesShowcase = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
  };

  return (
    <section
      className={`relative py-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full ${
              theme === "dark"
                ? "bg-blue-900/30 text-blue-400"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            Our Services
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Solutions That Drive Growth
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We deliver comprehensive digital solutions tailored to your specific
            business needs.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative max-w-6xl mx-auto">
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
                    <div
                      key={`${activeIndex}-${index}`}
                      className={`h-full rounded-xl overflow-hidden border ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      } shadow-sm hover:shadow-md transition-shadow`}
                    >
                      {/* Banner Image */}
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute -bottom-6 right-6">
                          <div
                            className={`p-3 rounded-full ${
                              theme === "dark" ? "bg-blue-600" : "bg-blue-500"
                            } text-white shadow-md`}
                          >
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 pt-8">
                        <h3
                          className={`text-xl font-bold mb-3 ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {service.name}
                        </h3>
                        <p
                          className={`mb-6 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {service.desc}
                        </p>
                        <Link
                          href={service.url}
                          className={`inline-flex items-center text-sm font-medium ${
                            theme === "dark"
                              ? "text-blue-400 hover:text-blue-300"
                              : "text-blue-600 hover:text-blue-800"
                          }`}
                        >
                          Learn more
                          <FiArrowRight className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {totalGroups > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className={`p-2 rounded-full ${
                  theme === "dark"
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors`}
                aria-label="Previous services"
              >
                <FiArrowLeft />
              </button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalGroups }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === activeIndex
                        ? theme === "dark"
                          ? "bg-blue-400 w-8"
                          : "bg-blue-500 w-8"
                        : theme === "dark"
                        ? "bg-gray-600 w-4"
                        : "bg-gray-300 w-4"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className={`p-2 rounded-full ${
                  theme === "dark"
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors`}
                aria-label="Next services"
              >
                <FiArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
