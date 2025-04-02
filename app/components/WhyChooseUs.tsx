"use client";

import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import {
  FaRocket,
  FaHandsHelping,
  FaLightbulb,
  FaUserShield,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 3D tilt effect
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const benefits = [
    {
      icon: <FaRocket className="text-4xl" />,
      title: "Cutting-Edge Innovation",
      description:
        "We leverage the latest technologies to build future-proof solutions that give you a competitive edge.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Practical Tech Coaching",
      description:
        "Our hands-on training programs equip your team with real-world skills that drive immediate impact.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Tailored Solutions",
      description:
        "We don't do cookie-cutter - every solution is custom-crafted to address your unique challenges.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "Trusted Partnership",
      description:
        "Your success is our priority. We build long-term relationships based on transparency and results.",
      color: "from-emerald-500 to-teal-600",
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
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500 filter blur-3xl"></div>
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
            className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/10 text-white border border-white/20"
          >
            The QUORTEK Difference
          </motion.span>

          <motion.h2
            variants={item}
            className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            Why Industry Leaders Choose Us
          </motion.h2>

          <motion.p
            variants={item}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We combine technical excellence with practical business
            understanding to deliver solutions that drive real results.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              custom={index}
              whileHover="hover"
              className="h-full"
            >
              <motion.div
                variants={cardHover}
                className={`h-full bg-gradient-to-br ${benefit.color} rounded-2xl overflow-hidden shadow-xl p-8 text-white`}
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
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Reasons */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "90% client retention rate",
              "Industry-leading 24/7 support",
              "Agile development process",
              "Transparent pricing models",
            ].map((reason, index) => (
              <div key={index} className="flex items-start">
                <FiCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-lg text-gray-300">{reason}</p>
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
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            whileHover={{
              y: -3,
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
            <FiArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
