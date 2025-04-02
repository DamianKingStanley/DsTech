"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
// import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "QUORTEK's mobile app transformed our customer engagement. Their team delivered beyond our expectations with innovative solutions that drove 3x more conversions.",
    position: "CEO, TechSolutions Inc.",
    avatar: "/avatars/1.jpg", // Placeholder path
  },
  {
    name: "Jane Smith",
    feedback:
      "The website QUORTEK built for us loads 60% faster than our previous one and has significantly improved our SEO rankings. Their attention to detail is remarkable.",
    position: "Marketing Director, BrandX",
    avatar: "/avatars/2.jpg",
  },
  {
    name: "Michael Johnson",
    feedback:
      "Their AI implementation automated 80% of our manual processes. The QUORTEK team understood our needs perfectly and delivered ahead of schedule.",
    position: "CTO, DataCorp",
    avatar: "/avatars/3.jpg",
  },
  {
    name: "Emily Williams",
    feedback:
      "After their tech coaching, our team's productivity increased by 40%. The practical, hands-on approach made complex concepts easy to implement immediately.",
    position: "Founder, StartupHub",
    avatar: "/avatars/4.jpg",
  },
  {
    name: "David Brown",
    feedback:
      "Our e-commerce platform scaled seamlessly during peak seasons thanks to QUORTEK's robust architecture. Their support team is incredibly responsive.",
    position: "E-commerce Director, ShopEase",
    avatar: "/avatars/5.jpg",
  },
];

const TestimonialsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // 3D tilt effect
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const rotateX = useTransform(x, [-100, 100], [15, -15]);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

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

  return (
    <section className="relative py-28 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gray-400 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-white/10 text-white border border-white/20 uppercase"
          >
            Client Voices
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Don’t just take our word for it—hear what our clients say about
            working with QUORTEK.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={carouselRef}
        >
          {/* Fixed height container for the carousel */}
          <div className="relative min-h-[450px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl p-10"
                style={{
                  rotateY,
                  rotateX,
                  transformPerspective: 1000,
                }}
                onMouseMove={(e) => {
                  const rect = carouselRef.current?.getBoundingClientRect();
                  if (rect) {
                    x.set(e.clientX - rect.left - rect.width / 2);
                  }
                }}
                onMouseLeave={() => {
                  x.set(0);
                }}
              >
                <div className="flex flex-col md:flex-row gap-10 items-center h-full">
                  {/* Client Avatar */}
                  <motion.div
                    className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      layout="fill"
                      objectFit="cover"
                      className="filter grayscale"
                    /> */}
                  </motion.div>

                  {/* Testimonial Content */}
                  <div className="text-center md:text-left flex flex-col justify-center h-full">
                    <FaQuoteLeft className="text-3xl text-white/20 mb-6 mx-auto md:mx-0" />
                    <p className="text-sm text-gray-300 mb-8 leading-relaxed line-clamp-4">
                      {testimonials[currentIndex].feedback}
                    </p>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div
            className={`flex justify-center mt-12 gap-4 transition-opacity ${
              isHovered ? "opacity-100" : "md:opacity-30 hover:opacity-100"
            }`}
          >
            <motion.button
              onClick={prevTestimonial}
              className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft className="text-xl" />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-6" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsShowcase;
