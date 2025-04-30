"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

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

const inputVariants = {
  focus: {
    scale: 1.02,
    borderColor: "rgba(255, 255, 255, 0.5)",
    transition: { duration: 0.3 },
  },
  blur: {
    scale: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section className="relative mt-8 pb-10 py-18 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden text-black">
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
            Let’s Connect
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold bg-clip-text  bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            Contact QUORTEK
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl  max-w-3xl mx-auto"
          >
            Have a question or want to work with us? Reach out, and we’ll get
            back to you soon.
          </motion.p>
        </motion.div>

        {/* Contact Info and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="bg-blue-800 text-white rounded-2xl p-8 shadow-xl"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p variants={item} className="text-lg  mb-8">
              We’re here to help you with your tech needs. Contact us via email,
              phone, or social media.
            </motion.p>
            <div className="space-y-6">
              <motion.div
                variants={item}
                className="flex items-center space-x-3 text-lg"
              >
                <FaEnvelope />
                <span>contact@quortek.com</span>
              </motion.div>
              <motion.div
                variants={item}
                className="flex items-center space-x-3 text-lg"
              >
                <FaPhone />
                <span>+234 915 982 2561</span>
              </motion.div>
              <motion.div
                variants={item}
                className="flex space-x-6 text-2xl mt-6"
              >
                <a
                  href="https://facebook.com/king.stan.01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/_king_Damian?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/damian-theking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/quortek?igsh=YWN3aDdwOGwxYjJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-blue-800 text-white rounded-2xl p-8 shadow-xl"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Send Us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={item}>
                <label className="block  font-medium mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white  border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your name"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputVariants}
                />
              </motion.div>
              <motion.div variants={item}>
                <label className="block font-medium mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your email"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputVariants}
                />
              </motion.div>
              <motion.div variants={item}>
                <label className="block -gray-400 font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-white border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none resize-none"
                  placeholder="Write your message"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputVariants}
                ></motion.textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-white to-gray-200 text-black py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-gray-500/30 transition-all flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <FaArrowRight className="ml-2" />
              </motion.button>
            </form>
            {status && (
              <motion.p
                className="mt-4 text-center text-lg font-medium text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {status}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
