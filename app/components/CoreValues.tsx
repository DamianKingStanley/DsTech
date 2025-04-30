"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import {
  FaLightbulb,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

const CoreValues = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const values = [
    {
      title: "Radical Innovation",
      description:
        "We challenge conventions with groundbreaking solutions that transform industries.",
      icon: <FaLightbulb className="text-3xl" />,
      color: "text-purple-600",
      bgColor: "bg-purple-500",
      lightBg: "bg-purple-50",
      image: "/images/core-value-one.avif",
      y: useTransform(scrollYProgress, [0, 1], [0, -50]),
      delay: 0.1,
    },
    {
      title: "Uncompromising Integrity",
      description:
        "We operate with unwavering honesty, building trust through complete transparency.",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "text-blue-600",
      bgColor: "bg-blue-500",
      lightBg: "bg-blue-50",
      image: "/images/core-value-two.avif",

      y: useTransform(scrollYProgress, [0, 1], [0, -30]),
      delay: 0.2,
    },
    {
      title: "Relentless Excellence",
      description:
        "We pursue perfection in every detail, delivering work that sets new benchmarks.",
      icon: <FaStar className="text-3xl" />,
      color: "text-amber-600",
      bgColor: "bg-amber-500",
      lightBg: "bg-amber-50",
      image: "/images/core-value-three.avif",

      y: useTransform(scrollYProgress, [0, 1], [0, -40]),
      delay: 0.3,
    },
    {
      title: "Collaborative Genius",
      description:
        "We harness diverse perspectives to create solutions greater than the sum of their parts.",
      icon: <FaUsers className="text-3xl" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-500",
      lightBg: "bg-emerald-50",
      image: "/images/core-value-four.avif",

      y: useTransform(scrollYProgress, [0, 1], [0, -60]),
      delay: 0.4,
    },
    {
      title: "Empathy-Driven Design",
      description:
        "We craft technology that resonates deeply with human needs and aspirations.",
      icon: <FaHandsHelping className="text-3xl" />,
      color: "text-pink-600",
      bgColor: "bg-pink-500",
      lightBg: "bg-pink-50",
      image: "/images/core-value-five.jpg",

      y: useTransform(scrollYProgress, [0, 1], [0, -20]),
      delay: 0.5,
    },
    {
      title: "Global Impact",
      description:
        "We build solutions that transcend borders and create worldwide transformation.",
      icon: <FaGlobe className="text-3xl" />,
      color: "text-green-600",
      bgColor: "bg-green-500",
      lightBg: "bg-green-50",
      image: "/images/core-value-six.avif",

      y: useTransform(scrollYProgress, [0, 1], [0, -50]),
      delay: 0.6,
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
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

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 filter blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            x: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 filter blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 80]),
            x: useTransform(scrollYProgress, [0, 1], [0, 50]),
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={item}
            className="inline-block px-6 py-3 mb-6 text-sm font-semibold tracking-wider rounded-full bg-blue-100 text-blue-800 uppercase shadow-sm"
          >
            Our Cultural Pillars
          </motion.span>

          <motion.h2
            variants={item}
            className="text-2xl md:text-6xl font-bold text-gray-800 mb-8"
          >
            The Foundations of Our Excellence
          </motion.h2>

          <motion.p
            variants={item}
            className="text-sm md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            These core principles are the bedrock of our culture and the compass
            that guides every decision we make.
          </motion.p>
        </motion.div>

        {/* Values in alternating layout */}
        <div className="space-y-32">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
              initial="hidden"
              whileInView="visible"
              variants={container}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image Section */}
              <motion.div
                className="w-full lg:w-1/2 relative"
                variants={item}
                style={{ y: value.y }}
              >
                <div
                  className={`absolute inset-0 ${value.lightBg} rounded-3xl transform rotate-3 scale-95 opacity-70`}
                ></div>
                <div className="relative overflow-hidden rounded-1xl shadow-xl">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div className="w-full lg:w-1/2 relative" variants={item}>
                <div className="relative">
                  {/* Decorative number */}
                  <div className="absolute -left-10 -top-20 text-9xl font-bold opacity-5">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center p-4 ${value.bgColor} text-white rounded-2xl shadow-lg mb-6`}
                    whileHover={{
                      rotate: 15,
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`text-3xl md:text-4xl font-bold mb-6 ${value.color}`}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl">
                    {value.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className={`mt-8 h-1 w-20 ${value.bgColor} rounded-full`}
                  ></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block max-w-4xl mx-auto p-8 bg-blue-50 rounded-2xl shadow-sm border border-blue-100"
            whileInView={{
              scale: [1, 1.02, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            <p className="text-2xl text-gray-700 italic">
              Our values are not just words on a wall - they are lived every day
              by every team member, in every project we undertake.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
