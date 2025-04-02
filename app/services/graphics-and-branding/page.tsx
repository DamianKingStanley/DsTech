"use client";

import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import {
  FaPalette,
  FaPaintBrush,
  FaRocket,
  FaVectorSquare,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";

// Updated services to reflect QUORTEK's focus on design
const designServices = [
  {
    name: "Branding Strategy",
    icon: <FaRocket className="text-4xl" />,
    desc: "We develop a unique brand voice and visual style that resonates with your audience, from logo creation to full brand guidelines.",
    color: "from-purple-600 to-indigo-700",
  },
  {
    name: "Logo Design",
    icon: <FaPalette className="text-4xl" />,
    desc: "Our team creates impactful logos that visually communicate your brand’s essence, leaving a lasting impression.",
    color: "from-blue-600 to-cyan-700",
  },
  {
    name: "Custom Graphics",
    icon: <FaPaintBrush className="text-4xl" />,
    desc: "We craft tailored graphics, from banners to digital art, to elevate your brand’s identity and engage your audience.",
    color: "from-amber-600 to-orange-700",
  },
  {
    name: "UI/UX Design",
    icon: <FaVectorSquare className="text-4xl" />,
    desc: "We design user-centric interfaces for websites and apps, focusing on aesthetics, usability, and functionality.",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "Marketing Materials",
    icon: <FaBullhorn className="text-4xl" />,
    desc: "From brochures to social media graphics, we create marketing materials that boost your brand’s visibility.",
    color: "from-green-600 to-lime-700",
  },
];

// Benefits of choosing QUORTEK for design
const benefits = [
  {
    title: "Tailored Creativity",
    desc: "We deliver custom designs that align perfectly with your brand’s vision and goals.",
    icon: <FaPaintBrush className="text-3xl" />,
    color: "bg-blue-600/10 border-blue-600/20",
  },
  {
    title: "User-Centric Focus",
    desc: "Our designs prioritize usability and engagement, ensuring a seamless experience.",
    icon: <FaVectorSquare className="text-3xl" />,
    color: "bg-purple-600/10 border-purple-600/20",
  },
  {
    title: "Brand Consistency",
    desc: "We ensure all design elements reflect your brand identity cohesively.",
    icon: <FaPalette className="text-3xl" />,
    color: "bg-amber-600/10 border-amber-600/20",
  },
];

export default function GraphicsAndBranding() {
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
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
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
              className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider rounded-full bg-white/10 text-white border border-white/20 uppercase"
            >
              Design Excellence
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
            >
              Transform Your Brand with QUORTEK
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              We shape your brand identity with custom graphics, unique designs,
              and creative solutions that stand out.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Design Services Section */}
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
              Our Design Process
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              A meticulous approach to crafting impactful designs at every
              stage.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {designServices.map((service, index) => (
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
                  <p className="text-white/90">{service.desc}</p>
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
              Why Choose QUORTEK for Design
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              We combine creativity with strategic thinking to elevate your
              brand.
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
              Ready to elevate your brand?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let’s discuss how we can bring your vision to life with stunning
              designs.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Start Your Project
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
