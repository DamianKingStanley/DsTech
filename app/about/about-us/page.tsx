"use client";

import React from "react";
import { motion } from "framer-motion";

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

const About = () => {
  return (
    <section className="relative mt-8 py-18 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden text-black">
      <div className="container mx-auto px-6">
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
            className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-white/10  border border-white/20 uppercase"
          >
            Who We Are
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            About QUORTEK Hub
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl 0 max-w-3xl mx-auto"
          >
            We’re a tech company dedicated to building, designing, and educating
            for a better digital future.
          </motion.p>
        </motion.div>

        {/* About Us Content */}
        <motion.div
          className="max-w-4xl mx-auto  mb-20"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="text-lgtext-gray-400 leading-relaxed mb-2"
          >
            At <strong>QUORTEK</strong>, we’re passionate about empowering
            businesses and individuals through technology. Our mission is to
            create innovative solutions that drive growth, streamline
            operations, and prepare you for the future.
          </motion.p>
          <motion.p variants={item} className="text-lg  leading-relaxed mb-6">
            With expertise in software development, design, and tech education,
            we craft solutions that are not only functional but also
            forward-thinking. Whether you’re looking to build a cutting-edge
            application, design a stunning brand, or upskill through our
            Practically Tech Coaching, we’re here to help you succeed.
          </motion.p>
          <motion.p variants={item} className="text-lg  leading-relaxed">
            We believe technology can transform the world for the better. That’s
            why we focus on delivering lasting value, combining innovation with
            practical solutions to support your goals in an ever-evolving
            digital landscape.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
