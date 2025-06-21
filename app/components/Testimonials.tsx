"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/legacy/image";
import { useTheme } from "next-themes";

const testimonials = [
  {
    name: "Mr. Chaste",
    feedback:
      "We partnered with Damian, founder and CEO of QuortekHub, in building our mobile app for our startup, and they delivered excellent work. The app has helped us onboard 3x more users than our previous solution.",
    position: "Founder, Sanicle Cloud",
    avatar: "/images/testimonials/chaste.jpg",
    rating: 5,
  },
  {
    name: "Mr. Francis",
    feedback:
      "After their tech coaching, our team's productivity increased by 40%. The practical approach made complex concepts easy to understand. We've implemented their recommendations across all our projects.",
    position: "Student",
    avatar: "/images/testimonials/francis.jpg",
    rating: 5,
  },
  {
    name: "Peter Dickson",
    feedback:
      "QuortekHub built my hospital queue management system for my school project. My supervisor was impressed with the professional quality - it looked like a commercial product rather than a student project.",
    position: "CEO, Cephas Digital",
    avatar: "/images/testimonials/peter.jpg",
    rating: 5,
  },
];

const TestimonialsShowcase = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
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
    hidden: { y: 50, opacity: 0 },
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
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className={`relative py-20 overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={itemVariants}
            className={`inline-block px-4 py-1 md:px-6 md:py-2 mb-4 md:mb-6 text-xs md:text-sm font-medium tracking-wider rounded-full ${
              theme === "dark"
                ? "bg-blue-900/30 text-blue-400"
                : "bg-blue-100 text-blue-800"
            } uppercase`}
          >
            Client Voices
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-base md:text-xl max-w-3xl mx-auto px-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Don&apos;t just take our word for it—hear what our clients say about
            working with us.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto" ref={carouselRef}>
          <div className="relative min-h-[500px] md:min-h-[450px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="relative h-full">
                  <div
                    className={`relative h-full shadow-xl rounded-xl ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    } border p-6 md:p-10`}
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center h-full">
                      {/* Client info */}
                      <div className="flex flex-col items-center md:items-start space-y-4">
                        <motion.div
                          className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                              src={current.avatar}
                              alt={current.name}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        </motion.div>

                        <div className="text-center md:text-left mt-2 md:mt-4">
                          <h3
                            className={`text-lg md:text-xl font-bold ${
                              theme === "dark" ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {current.name}
                          </h3>
                          <p
                            className={`text-sm md:text-base ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {current.position}
                          </p>
                          <div className="flex justify-center md:justify-start mt-1 md:mt-2">
                            {[...Array(current.rating)].map((_, i) => (
                              <FaStar
                                key={i}
                                className="text-yellow-400 text-sm md:text-base"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <FaQuoteLeft
                          className={`text-2xl md:text-3xl ${
                            theme === "dark" ? "text-gray-600" : "text-gray-300"
                          } mb-4 md:mb-6`}
                        />
                        <p
                          className={`text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {current.feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 md:mt-12 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className={`p-3 md:p-4 rounded-full shadow-md border ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              } transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft className="text-lg md:text-xl" />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 md:h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? theme === "dark"
                        ? "bg-blue-400 w-6 md:w-8"
                        : "bg-blue-500 w-6 md:w-8"
                      : theme === "dark"
                      ? "bg-gray-600 w-2 md:w-3"
                      : "bg-gray-300 w-2 md:w-3"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className={`p-3 md:p-4 rounded-full shadow-md border ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              } transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight className="text-lg md:text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsShowcase;
