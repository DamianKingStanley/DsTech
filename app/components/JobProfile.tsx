"use client";

import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const JobProfile = () => {
  const projects = [
    {
      title: "Crime and Criminal Check System",
      description:
        "Revolutionary platform empowering African writers to publish stories while enabling readers to discover authentic narratives. Features AI-powered recommendations and monetization tools.",
      image: "/images/crime.png",
      url: "https://npfcrimesystem.netlify.app/",
      tags: ["React.js", "Node.js", "MongoDB"],
      accentColor: "from-purple-600 to-indigo-700",
    },
    {
      title: "Mental Health ChatBot",
      description:
        "AI-powered mental health companion providing 24/7 student support with personalized coping strategies and crisis resources.",
      image: "/images/studentmentalhealth.png",
      url: "https://studentmentalhealth.netlify.app",
      tags: ["React", "Python", "NLP"],
      accentColor: "from-blue-600 to-cyan-700",
    },
    {
      title: "Bookshop E-Commerce",
      description:
        "Full-featured online bookstore with advanced search, personalized recommendations, and seamless checkout experience.",
      image: "/images/ebookshop.png",
      url: "https://mouau-ebookshop.netlify.app",
      tags: ["React", "Stripe API", "Redux"],
      accentColor: "from-amber-600 to-orange-700",
    },
  ];

  // 3D tilt effect
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
            Few of Our Portfolio
          </motion.span>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            Showcase of Excellence
          </motion.h2>

          <motion.p
            variants={item}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our innovative solutions that combine cutting-edge
            technology with exceptional user experiences
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="h-full perspective-1000"
            >
              <motion.div
                variants={cardHover}
                className={`h-full bg-gradient-to-br ${project.accentColor} rounded-2xl overflow-hidden shadow-2xl flex flex-col`}
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
                {/* Project Image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  {/* <p className="text-white/90 mb-6 flex-grow">
                    {project.description}
                  </p> */}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 text-white text-xs rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Live Project
                    <FiExternalLink className="ml-2" />
                  </a>
                </div>
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
            Ready to create something extraordinary together?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JobProfile;
