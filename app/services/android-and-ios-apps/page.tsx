"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaCode,
  FaPaintBrush,
  FaBug,
  FaRocket,
  FaHeadset,
  FaReact,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { useTheme } from "next-themes";

const MobileDevelopmentShowcase = () => {
  const { theme } = useTheme();
  const processSteps = [
    {
      title: "Discovery & Strategy",
      desc: "We conduct in-depth research to understand your business goals, target audience, and competitive landscape to create a winning mobile strategy.",
      icon: <FaMobileAlt className="text-2xl" />,
    },
    {
      title: "UI/UX Design",
      desc: "Our designers craft intuitive interfaces with pixel-perfect attention to detail, ensuring seamless user journeys and delightful experiences.",
      icon: <FaPaintBrush className="text-2xl" />,
    },
    {
      title: "Cross-Platform Development",
      desc: "Using React Native, we build high-performance apps that work flawlessly on both iOS and Android from a single codebase.",
      icon: <FaReact className="text-2xl" />,
    },
    {
      title: "Quality Assurance",
      desc: "We rigorously test across hundreds of device configurations to ensure your app performs perfectly in all scenarios.",
      icon: <FaBug className="text-2xl" />,
    },
    {
      title: "App Store Deployment",
      desc: "We handle the complete submission process to Google Play and Apple App Store, optimizing for discoverability and conversions.",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      title: "Ongoing Optimization",
      desc: "We provide continuous updates, performance monitoring, and feature enhancements to keep your app ahead of the competition.",
      icon: <FaHeadset className="text-2xl" />,
    },
  ];

  const benefits = [
    {
      title: "Native Performance",
      desc: "React Native delivers truly native experiences with 90%+ code reuse across platforms.",
      icon: <FaMobileAlt className="text-2xl" />,
    },
    {
      title: "iOS & Android Expertise",
      desc: "Deep platform knowledge ensures we leverage each OS's unique capabilities.",
      icon: (
        <div className="flex gap-2">
          <FaApple className="text-2xl" />
          <FaAndroid className="text-2xl" />
        </div>
      ),
    },
    {
      title: "Future-Proof Architecture",
      desc: "Modular codebases designed for easy scaling and feature additions.",
      icon: <FaCode className="text-2xl" />,
    },
  ];
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className={`relative py-20 overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.span
            variants={item}
            className={`inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full ${
              theme === "dark"
                ? "bg-blue-900/30 text-blue-400"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            Mobile Excellence
          </motion.span>

          <motion.h1
            variants={item}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Cross-Platform App Development
          </motion.h1>

          <motion.p
            variants={item}
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We build performant, beautiful mobile experiences that work
            seamlessly across iOS and Android
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-28 max-w-4xl mx-auto">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center`}
              initial="hidden"
              whileInView="visible"
              variants={item}
              viewport={{ once: true }}
            >
              <div
                className={`w-1/2 p-6 ${
                  index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                    theme === "dark"
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {step.icon}
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Why Choose Our Mobile Expertise
            </motion.h2>
            <motion.p
              variants={item}
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We combine technical excellence with strategic thinking
            </motion.p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`flex-1 p-8 rounded-xl ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-50 hover:bg-gray-100"
                } transition-all`}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    theme === "dark"
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {benefit.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDevelopmentShowcase;
