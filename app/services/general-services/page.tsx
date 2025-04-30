"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaRobot,
  FaPaintBrush,
  FaCogs,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";

const ServicesShowcase = () => {
  const services = [
    {
      name: "Mobile App Development",
      icon: <FaMobileAlt className="text-4xl" />,
      desc: "Crafting seamless cross-platform experiences with React Native and Flutter that drive engagement and growth.",
      url: "/services/android-and-ios-apps",
      image: "/images/appdev.avif",

      imagePosition: "right",
    },
    {
      name: "Web Development",
      icon: <FaLaptopCode className="text-4xl" />,
      desc: "Building performant, accessible websites with Next.js that rank higher and convert better.",
      url: "/services/website-development",
      image: "/images/webdev.avif",

      imagePosition: "left",
    },
    {
      name: "Custom Software",
      icon: <FaCogs className="text-4xl" />,
      desc: "Tailored solutions that automate workflows and solve unique business challenges at scale.",
      url: "/services/software-development",
      image: "/images/softdev.avif",

      imagePosition: "right",
    },
    {
      name: "AI Solutions",
      icon: <FaRobot className="text-4xl" />,
      desc: "Implementing machine learning models that extract insights and automate decision-making.",
      url: "/services/software-development",
      image: "/images/Aidev.avif",

      imagePosition: "left",
    },
    {
      name: "UI/UX Design",
      icon: <FaPaintBrush className="text-4xl" />,
      desc: "Human-centered designs that delight users and drive measurable business outcomes.",
      url: "/services/graphics-and-branding",
      image: "/images/uidev.avif",

      imagePosition: "right",
    },
    {
      name: "Tech Coaching",
      icon: <FaUserTie className="text-4xl" />,
      desc: "Hands-on training programs that upskill teams in modern technologies and best practices.",
      url: "/services/tech-coaching",
      image: "/images/coachdev.avif",

      imagePosition: "left",
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
    <section className="relative py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-100 filter blur-3xl opacity-50"></div>
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
            className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-blue-100 text-blue-800 border border-blue-200 uppercase shadow-sm"
          >
            What We Offer
          </motion.span>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Comprehensive Tech Solutions
          </motion.h2>

          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine technical expertise with business acumen to deliver
            solutions that drive real impact
          </motion.p>
        </motion.div>

        {/* Services List */}
        <motion.div
          className="space-y-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`flex flex-col ${
                service.imagePosition === "left"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2">
                <div className="mb-6 inline-flex p-4 bg-blue-100 rounded-xl">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">{service.desc}</p>
                <Link
                  href={service.url}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium"
                >
                  Explore Service
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
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
          <p className="text-xl text-gray-600 mb-8">
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
