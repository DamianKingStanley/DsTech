"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaLock,
  FaGamepad,
  FaRobot,
  FaCloud,
  FaDev,
  FaParachuteBox,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

// Updated coaching programs to reflect QUORTEK's focus
const coachingPrograms = [
  {
    name: "Web Development",
    icon: <FaCode className="text-4xl" />,
    desc: "Master front-end, back-end, and full-stack development with HTML, CSS, JavaScript, React, and Next.js.",
    color: "from-purple-600 to-indigo-700",
  },
  {
    name: "App Development",
    icon: <FaMobileAlt className="text-4xl" />,
    desc: "Learn iOS and Android app development with React Native, Swift, and Kotlin for cross-platform solutions.",
    color: "from-blue-600 to-cyan-700",
  },
  {
    name: "Data Science",
    icon: <FaDatabase className="text-4xl" />,
    desc: "Explore data analysis with Python, SQL, and data visualization to turn data into actionable insights.",
    color: "from-amber-600 to-orange-700",
  },
  {
    name: "Cybersecurity",
    icon: <FaLock className="text-4xl" />,
    desc: "Gain hands-on skills in securing systems and networks with the latest cybersecurity tools.",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "Game Development",
    icon: <FaGamepad className="text-4xl" />,
    desc: "Create interactive games using Unity and Unreal Engine, focusing on coding and game mechanics.",
    color: "from-pink-600 to-rose-700",
  },
  {
    name: "AI & Machine Learning",
    icon: <FaRobot className="text-4xl" />,
    desc: "Build intelligent systems with machine learning, deep learning, and neural networks.",
    color: "from-green-600 to-lime-700",
  },
  {
    name: "Cloud Computing",
    icon: <FaCloud className="text-4xl" />,
    desc: "Master AWS, Azure, and Google Cloud to design scalable and secure cloud infrastructure.",
    color: "from-sky-600 to-blue-700",
  },
  {
    name: "DevOps",
    icon: <FaDev className="text-4xl" />,
    desc: "Learn CI/CD, automation, and DevOps practices for faster, reliable software delivery.",
    color: "from-gray-800 to-gray-900",
  },
  {
    name: "Blockchain",
    icon: <FaParachuteBox className="text-4xl" />,
    desc: "Develop decentralized apps (dApps) and explore smart contracts and distributed ledgers.",
    color: "from-gray-700 to-gray-800",
  },
];

// Benefits of choosing QUORTEK's Practically Tech Coaching
const benefits = [
  {
    title: "Hands-On Learning",
    desc: "Our coaching emphasizes practical, real-world projects to build your skills.",
    icon: <FaCode className="text-3xl" />,
    color: "bg-blue-600/10 border-blue-600/20",
  },
  {
    title: "Expert Mentors",
    desc: "Learn from industry professionals with years of experience in tech.",
    icon: <FaDev className="text-3xl" />,
    color: "bg-purple-600/10 border-purple-600/20",
  },
  {
    title: "Career Growth",
    desc: "Gain the skills and confidence to advance your career in tech.",
    icon: <FaRocket className="text-3xl" />,
    color: "bg-amber-600/10 border-amber-600/20",
  },
];

export default function TechCoaching() {
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
              Practically Tech Coaching
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold  mb-6"
            >
              Unlock Your Potential with QUORTEK
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl  max-w-3xl mx-auto"
            >
              Hands-on tech coaching to help you master in-demand skills and
              advance your career.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coaching Programs Section */}
      <section className="relative py-10">
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
              Our Coaching Programs
            </motion.h2>
            <motion.p variants={item} className="text-xl  max-w-3xl mx-auto">
              Comprehensive training in a wide range of tech disciplines,
              tailored to your goals.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coachingPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover="hover"
                className="h-full perspective-1000"
              >
                <motion.div
                  variants={cardHover}
                  className={`h-full bg-gradient-to-br ${program.color} rounded-2xl overflow-hidden shadow-xl p-8 flex flex-col`}
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
                      {program.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {program.name}
                  </h3>
                  <p className="text-white/90">{program.desc}</p>
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
              Why Choose Practically Tech Coaching
            </motion.h2>
            <motion.p variants={item} className="text-xl  max-w-3xl mx-auto">
              We empower you with the skills and confidence to succeed in tech.
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
                  <p className="">{benefit.desc}</p>
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
            <h3 className="text-2xl text-white md:text-3xl font-bold mb-6">
              Ready to start your tech journey?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join Practically Tech Coaching and unlock your potential with
              expert guidance.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
