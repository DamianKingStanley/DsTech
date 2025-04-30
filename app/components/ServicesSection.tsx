"use client";

import { useState, useEffect } from "react";
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
  // FaHeadset,
  // FaShoppingCart,
  // FaCloud,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Updated services with light theme and banner images
const services = [
  {
    name: "Mobile App Development",
    icon: <FaMobileAlt className="text-3xl" />,
    desc: "Crafting seamless, user-friendly apps for iOS and Android.",
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
    iconBg: "bg-blue-500",
    image: "/images/appdev.avif",
    url: "/services/android-and-ios-apps",
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode className="text-3xl" />,
    desc: "Building fast, responsive websites with modern design.",
    color: "bg-purple-50 border-purple-200",
    textColor: "text-purple-700",
    iconBg: "bg-purple-500",
    image: "/images/webdev.avif",
    url: "/services/website-development",
  },
  {
    name: "Custom Software",
    icon: <FaCogs className="text-3xl" />,
    desc: "Tailored solutions to meet your business needs.",
    color: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-700",
    iconBg: "bg-emerald-500",
    image: "/images/softdev.avif",
    url: "/services/software-development",
  },
  {
    name: "AI & Machine Learning",
    icon: <FaRobot className="text-3xl" />,
    desc: "Innovative AI to automate and optimize workflows.",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    iconBg: "bg-amber-500",
    image: "/images/Aidev.avif",

    url: "/services/general-services",
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush className="text-3xl" />,
    desc: "Designing intuitive, visually stunning experiences.",
    color: "bg-pink-50 border-pink-200",
    textColor: "text-pink-700",
    iconBg: "bg-pink-500",
    image: "/images/uidev.avif",
    url: "/services/graphics-and-branding",
  },
  {
    name: "Tech Coaching",
    icon: <FaUserTie className="text-3xl" />,
    desc: "Hands-on education for all skill levels.",
    color: "bg-indigo-50 border-indigo-200",
    textColor: "text-indigo-700",
    iconBg: "bg-indigo-500",
    image: "/images/coachdev.avif",

    url: "/services/tech-coaching",
  },
  // {
  //   name: "Support & Maintenance",
  //   icon: <FaHeadset className="text-3xl" />,
  //   desc: "Reliable support to keep systems running.",
  //   color: "bg-teal-50 border-teal-200",
  //   textColor: "text-teal-700",
  //   iconBg: "bg-teal-500",
  //   image: "/placeholder.svg?height=200&width=400",
  //   url: "/services/general-services",
  // },
  // {
  //   name: "E-commerce Solutions",
  //   icon: <FaShoppingCart className="text-3xl" />,
  //   desc: "Powerful online stores with seamless functionality.",
  //   color: "bg-orange-50 border-orange-200",
  //   textColor: "text-orange-700",
  //   iconBg: "bg-orange-500",
  //   image: "/placeholder.svg?height=200&width=400",
  //   url: "/services/general-services",
  // },
  // {
  //   name: "Cloud Services",
  //   icon: <FaCloud className="text-3xl" />,
  //   desc: "Scalable cloud infrastructure and solutions.",
  //   color: "bg-sky-50 border-sky-200",
  //   textColor: "text-sky-700",
  //   iconBg: "bg-sky-500",
  //   image: "/placeholder.svg?height=200&width=400",
  //   url: "/services/api-development",
  // },
];

const ServicesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);

  // 3D tilt effect
  const rotateX = useTransform(x, [-100, 100], [-5, 5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

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
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-200 filter blur-3xl opacity-50"></div>
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
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200 uppercase shadow-sm">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Comprehensive Tech Solutions
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
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
          <div className="relative min-h-[450px] overflow-hidden">
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
                      whileHover={{
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`h-full rounded-2xl overflow-hidden border ${service.color} shadow-md`}
                        style={{
                          rotateX,
                          rotateY,
                          transformPerspective: 1000,
                        }}
                        onHoverStart={() => x.set(0)}
                        onHoverEnd={() => x.set(0)}
                      >
                        {/* Banner Image */}
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Icon overlay on image */}
                          <div className="absolute -bottom-6 right-6">
                            <motion.div
                              className={`p-4 ${service.iconBg} rounded-full text-white shadow-lg`}
                              whileHover={{
                                rotate: 15,
                                scale: 1.1,
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {service.icon}
                            </motion.div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 pt-8">
                          <h3
                            className={`text-xl font-bold ${service.textColor} mb-3`}
                          >
                            {service.name}
                          </h3>
                          <p className="text-gray-700 mb-6 flex-grow">
                            {service.desc}
                          </p>
                          <Link
                            href={service.url || "/default-url"}
                            className={`inline-block ${
                              service.textColor
                            } border ${service.color.replace(
                              "bg-",
                              "border-"
                            )} px-4 py-2 rounded-full text-sm hover:bg-white hover:shadow-md transition-all duration-300`}
                          >
                            Learn More
                          </Link>
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
                isHovered ? "opacity-100" : "opacity-70"
              }`}
            >
              <motion.button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
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
                    className={`h-3 rounded-full transition-all ${
                      i === activeIndex ? "bg-blue-500 w-6" : "bg-gray-300 w-3"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
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
