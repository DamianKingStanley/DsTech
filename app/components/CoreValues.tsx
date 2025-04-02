"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
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
      icon: <FaLightbulb className="text-5xl" />,
      color: "from-purple-600 to-indigo-700",
      y: useTransform(scrollYProgress, [0, 1], [0, -50]),
      delay: 0.1,
    },
    {
      title: "Uncompromising Integrity",
      description:
        "We operate with unwavering honesty, building trust through complete transparency.",
      icon: <FaShieldAlt className="text-5xl" />,
      color: "from-blue-600 to-cyan-700",
      y: useTransform(scrollYProgress, [0, 1], [0, -30]),
      delay: 0.2,
    },
    {
      title: "Relentless Excellence",
      description:
        "We pursue perfection in every detail, delivering work that sets new benchmarks.",
      icon: <FaStar className="text-5xl" />,
      color: "from-amber-600 to-orange-700",
      y: useTransform(scrollYProgress, [0, 1], [0, -40]),
      delay: 0.3,
    },
    {
      title: "Collaborative Genius",
      description:
        "We harness diverse perspectives to create solutions greater than the sum of their parts.",
      icon: <FaUsers className="text-5xl" />,
      color: "from-emerald-600 to-teal-700",
      y: useTransform(scrollYProgress, [0, 1], [0, -60]),
      delay: 0.4,
    },
    {
      title: "Empathy-Driven Design",
      description:
        "We craft technology that resonates deeply with human needs and aspirations.",
      icon: <FaHandsHelping className="text-5xl" />,
      color: "from-pink-600 to-rose-700",
      y: useTransform(scrollYProgress, [0, 1], [0, -20]),
      delay: 0.5,
    },
    {
      title: "Global Impact",
      description:
        "We build solutions that transcend borders and create worldwide transformation.",
      icon: <FaGlobe className="text-5xl" />,
      color: "from-green-600 to-lime-700",
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
    hidden: { y: 50, opacity: 0, rotateX: 15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardHover = {
    hover: {
      y: -15,
      rotateX: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-black to-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            x: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 filter blur-3xl"
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
            className="inline-block px-6 py-3 mb-6 text-sm font-semibold tracking-wider rounded-full bg-black text-white uppercase"
          >
            Our Cultural Pillars
          </motion.span>

          <motion.h2
            variants={item}
            className="text-2xl md:text-6xl font-bold bg-clip-text text-blue-400 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-8"
          >
            The Foundations of Our Excellence
          </motion.h2>

          <motion.p
            variants={item}
            className="text-sm md:text-2xl text-white max-w-4xl mx-auto leading-relaxed"
          >
            These core principles are the bedrock of our culture and the compass
            that guides every decision we make.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              custom={value.delay}
              whileHover="hover"
              className="h-full perspective-1000"
            >
              <motion.div
                variants={cardHover}
                className={`h-full bg-gradient-to-br ${value.color} rounded-3xl overflow-hidden shadow-2xl p-10 text-white relative group`}
                style={{ y: value.y }}
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full filter blur-xl"></div>

                <motion.div
                  className="mb-8 inline-block p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                  whileHover={{
                    rotate: 15,
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  {value.title}
                </h3>
                <p className="text-white/90 text-sm md:text-xl leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-2xl text-white italic max-w-3xl mx-auto"
            whileInView={{
              scale: [1, 1.02, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            Our values are not just words on a wall - they are lived every day
            by every team member, in every project we undertake.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
