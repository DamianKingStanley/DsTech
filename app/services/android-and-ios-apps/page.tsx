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
  FaArrowRight,
} from "react-icons/fa";

const MobileDevelopmentShowcase = () => {
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
      color: "bg-blue-100 border-blue-200",
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
      color: "bg-blue-50 border-blue-100",
    },
    {
      title: "Future-Proof Architecture",
      desc: "Modular codebases designed for easy scaling and feature additions.",
      icon: <FaCode className="text-2xl" />,
      color: "bg-blue-100 border-blue-200",
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

  const cardHover = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-100 filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={item}
            className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-blue-100 text-blue-800 border border-blue-200 uppercase shadow-sm"
          >
            Mobile Excellence
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Cross-Platform App Development
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We build performant, beautiful mobile experiences that work
            seamlessly across iOS and Android
          </motion.p>
        </motion.div>

        {/* Process Section */}
        <div className="mb-28">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            >
              Our Proven Development Process
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A meticulous approach that ensures quality at every stage
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={item}>
                <motion.div
                  variants={cardHover}
                  className={`h-full  overflow-hidden  p-8 flex flex-col`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-blue-600 rounded-xl shadow-sm">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-28">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            >
              Why Choose Our Mobile Expertise
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We combine technical excellence with strategic thinking
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={item} whileHover="hover">
                <motion.div
                  variants={cardHover}
                  className={`h-full ${benefit.color} rounded-2xl overflow-hidden shadow-lg border p-8 flex flex-col items-center text-center`}
                >
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to build your mobile app?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Let us discuss how we can bring your vision to life on both iOS
              and Android
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Reach Out Now
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileDevelopmentShowcase;
