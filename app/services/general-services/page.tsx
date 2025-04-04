"use client";

import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import Link from "next/link";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaRobot,
  FaPaintBrush,
  FaCogs,
  FaUserTie,
  FaHeadset,
  FaShoppingCart,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

const ServicesShowcase = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const services = [
    {
      name: "Mobile App Development",
      icon: <FaMobileAlt className="text-4xl" />,
      desc: "Crafting seamless cross-platform experiences with React Native and Flutter that drive engagement and growth.",
      url: "/services/android-and-ios-apps",
      color: "from-purple-600 to-indigo-700",
    },
    {
      name: "Web Development",
      icon: <FaLaptopCode className="text-4xl" />,
      desc: "Building performant, accessible websites with Next.js that rank higher and convert better.",
      url: "/services/website-development",
      color: "from-blue-600 to-cyan-700",
    },
    {
      name: "Custom Software",
      icon: <FaCogs className="text-4xl" />,
      desc: "Tailored solutions that automate workflows and solve unique business challenges at scale.",
      url: "/services/software-development",
      color: "from-amber-600 to-orange-700",
    },
    {
      name: "AI Solutions",
      icon: <FaRobot className="text-4xl" />,
      desc: "Implementing machine learning models that extract insights and automate decision-making.",
      url: "/services/software-development",
      color: "from-emerald-600 to-teal-700",
    },
    {
      name: "UI/UX Design",
      icon: <FaPaintBrush className="text-4xl" />,
      desc: "Human-centered designs that delight users and drive measurable business outcomes.",
      url: "/services/graphics-and-branding",
      color: "from-pink-600 to-rose-700",
    },
    {
      name: "Tech Coaching",
      icon: <FaUserTie className="text-4xl" />,
      desc: "Hands-on training programs that upskill teams in modern technologies and best practices.",
      url: "/services/tech-coaching",
      color: "from-violet-600 to-fuchsia-700",
    },
    {
      name: "Support & Maintenance",
      icon: <FaHeadset className="text-4xl" />,
      desc: "Proactive monitoring and rapid response to keep your systems running optimally.",
      url: "/services/general-services",
      color: "from-sky-600 to-blue-700",
    },
    {
      name: "E-commerce Solutions",
      icon: <FaShoppingCart className="text-4xl" />,
      desc: "Scalable storefronts with seamless checkout experiences that boost conversions.",
      url: "/servicesgeneral-servicess",
      color: "from-green-600 to-lime-700",
    },
    {
      name: "API Development",
      icon: <FaCode className="text-4xl" />,
      desc: "RESTful and GraphQL APIs built for security, performance, and developer experience.",
      url: "/services/general-services",
      color: "from-indigo-600 to-purple-700",
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
    <section className="relative py-28 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-blue-500 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={item}
            className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-white/10 text-white border border-white/20 uppercase"
          >
            What We Offer
          </motion.span>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            Comprehensive Tech Solutions
          </motion.h2>

          <motion.p
            variants={item}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We combine technical expertise with business acumen to deliver
            solutions that drive real impact
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="h-full perspective-1000"
            >
              <motion.div
                variants={cardHover}
                className={`h-full bg-gradient-to-br ${service.color} rounded-2xl overflow-hidden shadow-xl p-8 flex flex-col`}
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
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.name}
                </h3>
                <p className="text-white/90 mb-6 flex-grow">{service.desc}</p>
                <Link
                  href={service.url}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all border border-white/20"
                >
                  Explore Service
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your business with technology?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
