"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import {
  FaRocket,
  FaHandsHelping,
  FaLightbulb,
  FaUserShield,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const benefits = [
    {
      icon: <FaRocket className="text-4xl" />,
      title: "Cutting-Edge Innovation",
      description:
        "We leverage the latest technologies to build future-proof solutions that give you a competitive edge.",
      color: "text-purple-600",
      bgColor: "bg-purple-500",
      lightBg: "bg-purple-50",
      borderColor: "border-purple-200",
      y: useTransform(scrollYProgress, [0, 1], [0, -30]),
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Practical Tech Coaching",
      description:
        "Our hands-on training programs equip your team with real-world skills that drive immediate impact.",
      color: "text-blue-600",
      bgColor: "bg-blue-500",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-200",
      y: useTransform(scrollYProgress, [0, 1], [0, -50]),
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Tailored Solutions",
      description:
        "We don't do cookie-cutter - every solution is custom-crafted to address your unique challenges.",
      color: "text-amber-600",
      bgColor: "bg-amber-500",
      lightBg: "bg-amber-50",
      borderColor: "border-amber-200",
      y: useTransform(scrollYProgress, [0, 1], [0, -20]),
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "Trusted Partnership",
      description:
        "Your success is our priority. We build long-term relationships based on transparency and results.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-500",
      lightBg: "bg-emerald-50",
      borderColor: "border-emerald-200",
      y: useTransform(scrollYProgress, [0, 1], [0, -40]),
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

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={item}
            className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200 shadow-sm"
          >
            The QUORTEK Difference
          </motion.span>

          <motion.h2
            variants={item}
            className="text-2xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Why Industry Leaders Choose Us
          </motion.h2>

          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine technical excellence with practical business
            understanding to deliver solutions that drive real results.
          </motion.p>
        </motion.div>

        {/* Benefits Section - Open Layout */}
        <div className="mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
              }`}
              style={{ y: benefit.y }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex flex-col md:flex-row items-start gap-8 max-w-4xl">
                {/* Icon Column */}
                <div className="flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                    whileHover={{
                      rotate: 5,
                      scale: 1.1,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.icon}
                  </motion.div>
                </div>

                {/* Content Column */}
                <div className="flex-grow">
                  <div
                    className={`h-1 w-16 ${benefit.bgColor} rounded-full mb-4 hidden md:block`}
                  ></div>
                  <h3 className={`text-2xl font-bold mb-3 ${benefit.color}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{benefit.description}</p>

                  {/* Decorative background */}
                  <div
                    className={`absolute -z-10 top-0 left-0 w-full h-full ${benefit.lightBg} rounded-3xl opacity-30 transform -rotate-1 scale-105`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Reasons */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            More Reasons to Partner With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "90% client retention rate",
              "Industry-leading 24/7 support",
              "Agile development process",
              "Transparent pricing models",
            ].map((reason, index) => (
              <div key={index} className="flex items-start">
                <FiCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
                <p className="text-lg text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            whileHover={{
              y: -3,
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Reach Out Today
            <FiArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
