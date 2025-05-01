"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Particles from "./Particles";
import Image from "next/image";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const techDomains = [
    { name: "AI Solutions", icon: "🤖" },
    { name: "Web Apps", icon: "🌐" },
    { name: "Mobile Dev", icon: "📱" },
    { name: "Cloud Tech", icon: "☁️" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Tech Coaching", icon: "👨‍🏫" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      y: -3,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 2px 10px -5px rgba(59, 130, 246, 0.4)",
    },
  };

  const infiniteScrollVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative pt-10  min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Subtle Particles Background */}
      <Particles className="absolute inset-0 z-0 opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 shadow-sm">
                Innovation at Lightspeed
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-800"
            >
              <span className="block">Transform Your</span>
              <span className="block">
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">
                    Digital Future
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-500/30 -rotate-1 z-0"></span>
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              At Quortek, We build solutions and also onboard you into the tech
              space. We provide software solutions and empower teams through our{" "}
              <span className="font-semibold text-gray-800">
                practical tech coaching
              </span>{" "}
              to help businesses thrive in the digital age.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8 lg:mb-0"
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg"
                >
                  Reach Out
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <button
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-full border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 shadow-md"
                  onClick={() => (window.location.href = "tel:+2349159822561")}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+2349159822561">Schedule Call</a>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Banner Image */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute -right-16 -top-16 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-blue-200 rounded-full filter blur-3xl opacity-70"></div>

              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/hero-image.avif"
                  alt="Digital Transformation"
                  layout="fill"
                  objectFit="cover"
                  className="z-10"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-20"></div>

                {/* Floating elements */}
                <div className="absolute top-10 right-10 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg z-30 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Innovative
                    </p>
                    <p className="text-xs text-gray-600">Solutions</p>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg z-30 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Expert
                    </p>
                    <p className="text-xs text-gray-600">Coaching</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Domains Scrolling Section */}
        <div className="relative overflow-hidden py-6 mt-12">
          <motion.div
            className="flex whitespace-nowrap"
            variants={infiniteScrollVariants}
            animate="animate"
          >
            {[...techDomains, ...techDomains].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="inline-flex items-center mx-8 px-6 py-3 rounded-full bg-white shadow-md border border-gray-100"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-800">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
