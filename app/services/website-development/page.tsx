"use client";

import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
  FaMobileAlt,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

// Development process steps
const processSteps = [
  {
    title: "Discovery & Planning",
    desc: "We analyze your business goals, audience, and requirements to create a tailored website strategy.",
    icon: <FaLaptopCode className="text-4xl" />,
    color: "from-purple-600 to-indigo-700",
  },
  {
    title: "UI/UX Design",
    desc: "Our team designs intuitive, responsive interfaces that ensure a seamless user experience across devices.",
    icon: <FaPaintBrush className="text-4xl" />,
    color: "from-blue-600 to-cyan-700",
  },
  {
    title: "Development",
    desc: "We build your website using modern technologies like Next.js, ensuring clean, scalable, and optimized code.",
    icon: <FaCode className="text-4xl" />,
    color: "from-amber-600 to-orange-700",
  },
  {
    title: "Testing",
    desc: "We rigorously test across devices and browsers to ensure your website is responsive and bug-free.",
    icon: <FaBug className="text-4xl" />,
    color: "from-emerald-600 to-teal-700",
  },
  {
    title: "Launch",
    desc: "We deploy your website, ensuring it’s fast, secure, and ready to go live with minimal downtime.",
    icon: <FaRocket className="text-4xl" />,
    color: "from-pink-600 to-rose-700",
  },
  {
    title: "Support & Optimization",
    desc: "We provide ongoing support, updates, and SEO optimization to keep your website performing at its best.",
    icon: <FaHeadset className="text-4xl" />,
    color: "from-green-600 to-lime-700",
  },
];

// Benefits of choosing QUORTEK for website development
const benefits = [
  {
    title: "Custom Solutions",
    desc: "We create tailored websites, from landing pages to complex applications, to meet your unique needs.",
    icon: <FaLaptopCode className="text-3xl" />,
    color: "bg-blue-600/10 border-blue-600/20",
  },
  {
    title: "Responsive Design",
    desc: "Our websites are fully responsive, ensuring a seamless experience across all devices.",
    icon: <FaMobileAlt className="text-3xl" />,
    color: "bg-purple-600/10 border-purple-600/20",
  },
  {
    title: "SEO Optimization",
    desc: "We optimize your website for search engines to boost visibility and attract more traffic.",
    icon: <FaSearch className="text-3xl" />,
    color: "bg-amber-600/10 border-amber-600/20",
  },
];

export default function WebsiteDevelopment() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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
    <div className="relative py-18 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-500 filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gray-600 filter blur-3xl"></div>
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
              className="inline-block  px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-blue-100 text-blue-800 border border-blue-200 uppercase shadow-sm"
            >
              Website Excellence
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Website Development by QUORTEK
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We build user-friendly, responsive, and visually stunning websites
              that drive your business forward.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="relative py-20 ">
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
              Our Development Process
            </motion.h2>
            <motion.p variants={item} className="text-xl max-w-3xl mx-auto">
              A meticulous approach to crafting high-quality websites at every
              stage.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
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
                  <h3 className="text-2xl font-bold mb-4 ">{step.title}</h3>
                  <p className="/90">{step.desc}</p>
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
              Why Choose QUORTEK for Website Development
            </motion.h2>
            <motion.p variants={item} className="text-xl  max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver
              websites that grow your business.
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
                  <p>{benefit.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to build your website?
            </h3>
            <p className="text-xl  mb-8">
              Let’s discuss how we can create a stunning online presence for
              your business.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700  rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Reach Out Today
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
