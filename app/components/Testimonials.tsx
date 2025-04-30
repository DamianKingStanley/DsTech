"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "QUORTEK's mobile app transformed our customer engagement. Their team delivered beyond our expectations with innovative solutions that drove 3x more conversions.",
    position: "CEO, TechSolutions Inc.",
    avatar: "/placeholder.svg?height=100&width=100", // Placeholder path
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback:
      "The website QUORTEK built for us loads 60% faster than our previous one and has significantly improved our SEO rankings. Their attention to detail is remarkable.",
    position: "Marketing Director, BrandX",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    feedback:
      "Their AI implementation automated 80% of our manual processes. The QUORTEK team understood our needs perfectly and delivered ahead of schedule.",
    position: "CTO, DataCorp",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Emily Williams",
    feedback:
      "After their tech coaching, our team's productivity increased by 40%. The practical, hands-on approach made complex concepts easy to implement immediately.",
    position: "Founder, StartupHub",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "David Brown",
    feedback:
      "Our e-commerce platform scaled seamlessly during peak seasons thanks to QUORTEK's robust architecture. Their support team is incredibly responsive.",
    position: "E-commerce Director, ShopEase",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
];

const TestimonialsShowcase = () => {
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
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  // Get current testimonial
  const current = testimonials[currentIndex];

  return (
    <section className="relative py-12 md:py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-100 filter blur-3xl opacity-50"></div>
      </div>

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
            className="inline-block px-4 py-1 md:px-6 md:py-2 mb-4 md:mb-6 text-xs md:text-sm font-medium tracking-wider rounded-full bg-blue-100 text-blue-800 border border-blue-200 uppercase shadow-sm"
          >
            Client Voices
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Don&apos;t just take our word for it—hear what our clients say about
            working with QUORTEK.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto" ref={carouselRef}>
          {/* Fixed height container for the carousel */}
          <div className="relative min-h-[500px] md:min-h-[450px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="relative h-full">
                  {/* Background card */}
                  <div className="absolute inset-0 bg-white shadow-xl border border-gray-100 transform rotate-1"></div>

                  {/* Main content card */}
                  <div className="relative h-full bg-white shadow-xl border border-gray-100 p-6 md:p-10 z-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center h-full">
                      {/* Left column - Client info */}
                      <div className="flex flex-col items-center md:items-start space-y-4">
                        {/* Client Avatar */}
                        <motion.div
                          className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="absolute inset-0 bg-blue-200 rounded-full transform rotate-6"></div>
                          <div className="absolute inset-0 bg-blue-100 rounded-full transform -rotate-3"></div>
                          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                              src={current.avatar || "/placeholder.svg"}
                              alt={current.name}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        </motion.div>

                        {/* Client details */}
                        <div className="text-center md:text-left mt-2 md:mt-4">
                          <h3 className="text-lg md:text-xl font-bold text-gray-800">
                            {current.name}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {current.position}
                          </p>

                          {/* Rating */}
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

                      {/* Right column - Testimonial Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <FaQuoteLeft className="text-2xl md:text-3xl text-blue-200 mb-4 md:mb-6" />
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed italic px-2 sm:px-0">
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
              className="p-3 md:p-4 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
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
                      ? "bg-blue-500 w-6 md:w-8"
                      : "bg-gray-300 w-2 md:w-3"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 md:p-4 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
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
