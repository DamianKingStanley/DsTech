"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCode, FaUsers, FaArrowRight } from "react-icons/fa";

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

// Why Choose QUORTEK benefits
const benefits = [
  {
    title: "Innovation-Driven",
    desc: "We leverage cutting-edge technology to deliver solutions that keep you ahead.",
    icon: <FaRocket className="text-4xl" />,
    color: "from-gray-700 to-gray-900",
  },
  {
    title: "Expertise in Tech",
    desc: "Our team brings deep industry knowledge to every project, ensuring quality results.",
    icon: <FaCode className="text-4xl" />,
    color: "from-gray-600 to-gray-800",
  },
  {
    title: "Client-Focused",
    desc: "We prioritize your needs, providing 24/7 support to help your business thrive.",
    icon: <FaUsers className="text-4xl" />,
    color: "from-gray-700 to-gray-900",
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 mt-12">
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
            className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-white/10 text-white border border-white/20 uppercase"
          >
            Who We Are
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            About QUORTEK
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            We’re a tech company dedicated to building, designing, and educating
            for a better digital future.
          </motion.p>
        </motion.div>

        {/* About Us Content */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="text-lg text-gray-400 leading-relaxed mb-6"
          >
            At <strong>QUORTEK</strong>, we’re passionate about empowering
            businesses and individuals through technology. Our mission is to
            create innovative solutions that drive growth, streamline
            operations, and prepare you for the future.
          </motion.p>
          <motion.p
            variants={item}
            className="text-lg text-gray-400 leading-relaxed mb-6"
          >
            With expertise in software development, design, and tech education,
            we craft solutions that are not only functional but also
            forward-thinking. Whether you’re looking to build a cutting-edge
            application, design a stunning brand, or upskill through our
            Practically Tech Coaching, we’re here to help you succeed.
          </motion.p>
          <motion.p
            variants={item}
            className="text-lg text-gray-400 leading-relaxed"
          >
            We believe technology can transform the world for the better. That’s
            why we focus on delivering lasting value, combining innovation with
            practical solutions to support your goals in an ever-evolving
            digital landscape.
          </motion.p>
        </motion.div>

        {/* Why Choose Us Section */}
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
                Why Choose QUORTEK
              </motion.h2>
              <motion.p
                variants={item}
                className="text-xl text-gray-400 max-w-3xl mx-auto"
              >
                We’re your trusted partner in tech, combining innovation,
                expertise, and a client-first approach.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover="hover"
                  className="h-full perspective-1000"
                >
                  <motion.div
                    variants={cardHover}
                    className={`h-full bg-gradient-to-br ${benefit.color} rounded-2xl overflow-hidden shadow-xl p-8 flex flex-col`}
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
                        {benefit.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-white/90">{benefit.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to work with QUORTEK?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Let’s build, design, or upskill together to achieve your goals.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black rounded-full text-lg font-medium hover:shadow-lg hover:shadow-gray-500/30 transition-all">
                Get Started
                <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
