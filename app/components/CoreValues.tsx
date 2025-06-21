"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/legacy/image";
import {
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";
import { useTheme } from "next-themes";

const CoreValues = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const values = [
    {
      title: "Radical Innovation",
      description:
        "We don't just follow trends - we question assumptions and develop new approaches. When others say 'this is how it's always been done,' we ask 'how could it work better?' This mindset led us to develop our unique hybrid app framework that reduces development time by 40% while improving performance.",
      icon: <FaLightbulb className="text-3xl" />,
      color: theme === "dark" ? "text-purple-400" : "text-purple-600",
      bgColor: theme === "dark" ? "bg-purple-700" : "bg-purple-500",
      lightBg: theme === "dark" ? "bg-purple-900/30" : "bg-purple-50",
      image: "/images/core-value-one.avif",
      y: useTransform(scrollYProgress, [0, 1], [0, -50]),
      delay: 0.1,
    },
    {
      title: "Uncompromising Integrity",
      description:
        "We maintain complete transparency in our work, from clear project pricing to honest timelines. When we hit a snag (which happens in complex projects), we communicate immediately with solutions, not excuses. Our clients appreciate that we've never missed a contractual obligation in 2 years of business.",
      icon: <FaShieldAlt className="text-3xl" />,
      color: theme === "dark" ? "text-blue-400" : "text-blue-600",
      bgColor: theme === "dark" ? "bg-blue-700" : "bg-blue-500",
      lightBg: theme === "dark" ? "bg-blue-900/30" : "bg-blue-50",
      image: "/images/core-value-two.avif",
      y: useTransform(scrollYProgress, [0, 1], [0, -30]),
      delay: 0.2,
    },
    {
      title: "Relentless Excellence",
      description:
        "Our quality standards mean we review every line of code, test every feature from multiple angles, and refine designs until they're intuitive. ",
      color: theme === "dark" ? "text-amber-400" : "text-amber-600",
      bgColor: theme === "dark" ? "bg-amber-700" : "bg-amber-500",
      lightBg: theme === "dark" ? "bg-amber-900/30" : "bg-amber-50",
      image: "/images/core-value-three.avif",
      y: useTransform(scrollYProgress, [0, 1], [0, -40]),
      delay: 0.3,
    },
    {
      title: "Collaborative Genius",
      description:
        "We combine developers, designers, and business analysts in every project from day one. This cross-functional approach helped a recent client identify 3 unexpected revenue opportunities during development. Our weekly 'idea jams' have generated 12 patentable concepts in the past two years.",
      icon: <FaUsers className="text-3xl" />,
      color: theme === "dark" ? "text-emerald-400" : "text-emerald-600",
      bgColor: theme === "dark" ? "bg-emerald-700" : "bg-emerald-500",
      lightBg: theme === "dark" ? "bg-emerald-900/30" : "bg-emerald-50",
      image: "/images/core-value-four.avif",
      y: useTransform(scrollYProgress, [0, 1], [0, -60]),
      delay: 0.4,
    },
    {
      title: "Empathy-Driven Design",
      description:
        "We spend time observing real users before writing code. For a hospital app, our team shadowed nurses for 20 hours, leading to a one-handed interface that reduced medication errors by 22%. We measure success by how easily users achieve their goals, not just technical benchmarks.",
      icon: <FaHandsHelping className="text-3xl" />,
      color: theme === "dark" ? "text-pink-400" : "text-pink-600",
      bgColor: theme === "dark" ? "bg-pink-700" : "bg-pink-500",
      lightBg: theme === "dark" ? "bg-pink-900/30" : "bg-pink-50",
      image: "/images/core-value-five.jpg",
      y: useTransform(scrollYProgress, [0, 1], [0, -20]),
      delay: 0.5,
    },
    {
      title: "Global Impact",
      description:
        "Our system can support businesses in different countries, with localization going beyond translation to cultural adaptation. We built a techie match platform, that helps developers and tech gurus get matched with others, by their tech preferences. Technology should bridge gaps, not create them.",
      icon: <FaGlobe className="text-3xl" />,
      color: theme === "dark" ? "text-green-400" : "text-green-600",
      bgColor: theme === "dark" ? "bg-green-700" : "bg-green-500",
      lightBg: theme === "dark" ? "bg-green-900/30" : "bg-green-50",
      image: "/images/core-value-six.avif",
      y: useTransform(scrollYProgress, [0, 1], [0, -50]),
      delay: 0.6,
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className={`relative py-32 overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900"
          : "bg-gradient-to-b from-white via-blue-50 to-white"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${
            theme === "dark" ? "bg-purple-900/10" : "bg-blue-500/5"
          } filter blur-3xl`}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            x: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
        />
        <motion.div
          className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full ${
            theme === "dark" ? "bg-blue-900/10" : "bg-purple-500/5"
          } filter blur-3xl`}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 80]),
            x: useTransform(scrollYProgress, [0, 1], [0, 50]),
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={item}
            className={`inline-block px-6 py-3 mb-6 text-sm font-semibold tracking-wider rounded-full ${
              theme === "dark"
                ? "bg-blue-900/30 text-blue-400"
                : "bg-blue-100 text-blue-800"
            } uppercase shadow-sm`}
          >
            Our Cultural Pillars
          </motion.span>

          <motion.h2
            variants={item}
            className={`text-2xl md:text-6xl font-bold mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            The Foundations of Our Excellence
          </motion.h2>

          <motion.p
            variants={item}
            className={`text-sm md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            These principles guide how we work with clients, solve problems, and
            measure success.
          </motion.p>
        </motion.div>

        {/* Values in alternating layout */}
        <div className="space-y-32">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
              initial="hidden"
              whileInView="visible"
              variants={container}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image Section */}
              <motion.div
                className="w-full lg:w-1/2 relative"
                variants={item}
                style={{ y: value.y }}
              >
                <div
                  className={`absolute inset-0 ${value.lightBg} rounded-3xl transform rotate-3 scale-95 opacity-70`}
                ></div>
                <div
                  className={`relative overflow-hidden rounded-1xl shadow-xl ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                  } border`}
                >
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${
                      theme === "dark"
                        ? "from-gray-900/50 to-transparent"
                        : "from-gray-900/30 to-transparent"
                    }`}
                  ></div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div className="w-full lg:w-1/2 relative" variants={item}>
                <div className="relative">
                  {/* Decorative number */}
                  <div
                    className={`absolute -left-10 -top-20 text-9xl font-bold ${
                      theme === "dark" ? "opacity-10" : "opacity-5"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center p-4 ${value.bgColor} text-white rounded-2xl shadow-lg mb-6`}
                    whileHover={{
                      rotate: 15,
                      scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`text-3xl md:text-4xl font-bold mb-6 ${value.color}`}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-lg md:text-xl leading-relaxed max-w-xl ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {value.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className={`mt-8 h-1 w-20 ${value.bgColor} rounded-full`}
                  ></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`inline-block max-w-4xl mx-auto p-8 rounded-2xl shadow-sm border ${
              theme === "dark"
                ? "bg-gray-800/50 border-gray-700"
                : "bg-blue-50 border-blue-100"
            }`}
            whileInView={{
              scale: [1, 1.02, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            <p
              className={`text-2xl italic ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              These values shape our daily decisions, from which projects we
              take on to how we structure our teams. They&apos;re why 85% of our
              business comes from repeat clients.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
