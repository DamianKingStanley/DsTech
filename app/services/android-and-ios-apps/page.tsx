"use client";

import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const processSteps = [
    {
      title: "Discovery & Strategy",
      desc: "We conduct in-depth research to understand your business goals, target audience, and competitive landscape to create a winning mobile strategy.",
      icon: <FaMobileAlt className="text-4xl" />,
      color: "from-purple-600 to-indigo-700",
    },
    {
      title: "UI/UX Design",
      desc: "Our designers craft intuitive interfaces with pixel-perfect attention to detail, ensuring seamless user journeys and delightful experiences.",
      icon: <FaPaintBrush className="text-4xl" />,
      color: "from-blue-600 to-cyan-700",
    },
    {
      title: "Cross-Platform Development",
      desc: "Using React Native, we build high-performance apps that work flawlessly on both iOS and Android from a single codebase.",
      icon: <FaReact className="text-4xl" />,
      color: "from-amber-600 to-orange-700",
    },
    {
      title: "Quality Assurance",
      desc: "We rigorously test across hundreds of device configurations to ensure your app performs perfectly in all scenarios.",
      icon: <FaBug className="text-4xl" />,
      color: "from-emerald-600 to-teal-700",
    },
    {
      title: "App Store Deployment",
      desc: "We handle the complete submission process to Google Play and Apple App Store, optimizing for discoverability and conversions.",
      icon: <FaRocket className="text-4xl" />,
      color: "from-pink-600 to-rose-700",
    },
    {
      title: "Ongoing Optimization",
      desc: "We provide continuous updates, performance monitoring, and feature enhancements to keep your app ahead of the competition.",
      icon: <FaHeadset className="text-4xl" />,
      color: "from-green-600 to-lime-700",
    },
  ];

  const benefits = [
    {
      title: "Native Performance",
      desc: "React Native delivers truly native experiences with 90%+ code reuse across platforms.",
      icon: <FaMobileAlt className="text-3xl" />,
      color: "bg-blue-600/10 border-blue-600/20",
    },
    {
      title: "iOS & Android Expertise",
      desc: "Deep platform knowledge ensures we leverage each OS's unique capabilities.",
      icon: (
        <div className="flex gap-2">
          <FaApple className="text-3xl" />
          <FaAndroid className="text-3xl" />
        </div>
      ),
      color: "bg-purple-600/10 border-purple-600/20",
    },
    {
      title: "Future-Proof Architecture",
      desc: "Modular codebases designed for easy scaling and feature additions.",
      icon: <FaCode className="text-3xl" />,
      color: "bg-amber-600/10 border-amber-600/20",
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
      y: -15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500 filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={item}
              className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-white/10 text-white border border-white/20 uppercase"
            >
              Mobile Excellence
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
            >
              Cross-Platform App Development
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              We build performant, beautiful mobile experiences that work
              seamlessly across iOS and Android
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Proven Development Process
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              A meticulous approach that ensures quality at every stage
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover="hover"
                className="h-full perspective-1000"
              >
                <motion.div
                  variants={cardHover}
                  className={`h-full bg-gradient-to-br ${step.color} rounded-2xl overflow-hidden shadow-xl p-8 flex flex-col`}
                  style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 1000,
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    x.set(e.clientX - rect.left - rect.width / 2);
                    y.set(e.clientY - rect.top - rect.height / 2);
                  }}
                  onMouseLeave={() => {
                    x.set(0);
                    y.set(0);
                  }}
                >
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      className="p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                      whileHover={{
                        rotate: 15,
                        scale: 1.1,
                        backgroundColor: "rgba(255,255,255,0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/90">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Why Choose Our Mobile Expertise
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              We combine technical excellence with strategic thinking
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover="hover"
                className="h-full"
              >
                <motion.div
                  variants={cardHover}
                  className={`h-full ${benefit.color} rounded-2xl overflow-hidden shadow-xl p-8 border backdrop-blur-sm flex flex-col items-center text-center`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to build your mobile app?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let us discuss how we can bring your vision to life on both iOS
              and Android
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Reach Out Now
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopmentShowcase;
