"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const JobProfile = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "VastSea Carrier",
      description:
        "Premium Delivery Service. World-class delivery solutions with speed and professionalism you can trust.",
      image: "/images/shipment.PNG",
      url: "https://vastseacarrier.vercel.app/",
      tags: ["React.js", "Node.js", "MongoDB"],
      accentColor: "bg-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
    },
    {
      title: "LegalGenius",
      description:
        "Generate court-ready contracts, agreements, and legal forms with AI precision. Save thousands in lawyer fees while maintaining professional standards.",
      image: "/images/legaldoc.PNG",
      url: "https://legalgeniusai.vercel.app/",
      tags: ["React", "Python", "NLP"],
      accentColor: "bg-blue-100",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
    },
    {
      title: "Police Crime Intelligence System",
      description:
        "Law Enforcement Data Management. Access, analyze, and manage criminal records efficiently",
      image: "/images/law.PNG",
      url: "https://npfcrimesystem.vercel.app/",
      tags: ["React", "Express.js", "Node.js"],
      accentColor: "bg-amber-100",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-purple-200 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-blue-200 filter blur-3xl"></div>
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
            Few of Our Portfolio
          </motion.span>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Showcase of Excellence
          </motion.h2>

          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our innovative solutions that combine cutting-edge
            technology with exceptional user experiences
          </motion.p>
        </motion.div>

        {/* Interactive Project Showcase */}
        <div className="max-w-6xl mx-auto">
          {/* Project Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.button
                key={index}
                variants={item}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeProject === index
                    ? `${project.accentColor} ${project.textColor} shadow-md`
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => setActiveProject(index)}
              >
                {project.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Project Display */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={activeProject}
          >
            {/* Project Image */}
            <div className="relative">
              {/* Background decorative elements */}
              <div
                className={`absolute -top-6 -left-6 w-full h-full ${projects[activeProject].accentColor} rounded-2xl opacity-50 transform -rotate-3`}
              ></div>
              <div
                className={`absolute -bottom-6 -right-6 w-full h-full bg-gray-100 rounded-2xl opacity-50 transform rotate-3`}
              ></div>

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                <div className="aspect-video relative">
                  <Image
                    src={projects[activeProject].image || "/placeholder.svg"}
                    alt={projects[activeProject].title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3
                  className={`text-3xl font-bold ${projects[activeProject].textColor}`}
                >
                  {projects[activeProject].title}
                </h3>
                <p className="text-xl text-gray-700">
                  {projects[activeProject].description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 ${projects[activeProject].accentColor} ${projects[activeProject].textColor} text-sm rounded-full border ${projects[activeProject].borderColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Responsive design for all devices",
                    "Intuitive user interface",
                    "High-performance architecture",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className={`mr-2 p-1 rounded-full ${projects[activeProject].accentColor} ${projects[activeProject].textColor}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Link */}
              <motion.a
                href={projects[activeProject].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 ${projects[activeProject].textColor} bg-white border ${projects[activeProject].borderColor} rounded-full shadow-sm hover:shadow-md transition-all`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                View Live Project
                <FiExternalLink className="ml-2" />
              </motion.a>
            </div>
          </motion.div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeProject === index ? "bg-blue-500 w-8" : "bg-gray-300"
                }`}
                onClick={() => setActiveProject(index)}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-700 mb-8">
            Ready to create something extraordinary together?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-lg font-medium shadow-md transition-all"
            whileHover={{
              y: -3,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
            <FiArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default JobProfile;
