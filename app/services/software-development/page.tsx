"use client";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaShieldAlt,
  FaTachometerAlt,
  FaCode,
  FaRocket,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

// Software development services
const softwareServices = [
  {
    name: "Custom Software Design",
    desc: "We create tailored software solutions that align with your business goals, ensuring intuitive and robust applications.",
    icon: <FaCogs className="text-4xl" />,
  },
  {
    name: "Cutting-Edge Technologies",
    desc: "We leverage modern tools like cloud computing, AI, and machine learning to build high-performance software.",
    icon: <FaCode className="text-4xl" />,
  },
  {
    name: "Security & Scalability",
    desc: "Our software is designed to be secure and scalable, growing with your business while maintaining optimal performance.",
    icon: <FaShieldAlt className="text-4xl" />,
  },
];

const benefits = [
  {
    title: "Tailored Solutions",
    desc: "We build software specifically designed to address your unique business challenges.",
    icon: <FaCogs className="text-3xl" />,
  },
  {
    title: "Uncompromising Security",
    desc: "We integrate top-tier security features to ensure data protection and business continuity.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "High Performance",
    desc: "Our software is optimized for speed, seamless operations, and a responsive user experience.",
    icon: <FaTachometerAlt className="text-3xl" />,
  },
];

const approachPrinciples = [
  {
    title: "Agile Development",
    desc: "We deliver software in iterative cycles, refining and improving based on feedback.",
    icon: <FaRocket className="text-4xl" />,
  },
  {
    title: "Continuous Improvement",
    desc: "We constantly update and enhance your software to keep up with technological advancements.",
    icon: <FaCode className="text-4xl" />,
  },
  {
    title: "Transparent Communication",
    desc: "We maintain clear communication throughout the process, keeping you informed and involved.",
    icon: <FaComments className="text-4xl" />,
  },
];

export default function SoftwareDevelopment() {
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
    <div className="relative py-18 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
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
              className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider uppercase"
            >
              Software Excellence
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Software Development by QUORTEK
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto"
            >
              We create innovative, scalable, and secure software to transform
              your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Software Services Section */}
      <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl text-gray-900 font-bold mb-6"
            >
              Building Scalable Solutions
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-900 max-w-3xl mx-auto"
            >
              We craft custom software with precision, scalability, and security
              at its core.
            </motion.p>
          </motion.div>

          {/* Thread-like connection for services */}
          <div className="relative max-w-6xl mx-auto">
            {/* Horizontal thread line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-300 z-0"></div>

            {/* Vertical thread line for mobile */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
              {softwareServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Vertical connector for desktop */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 h-8 w-px border-l border-dashed border-gray-300 -translate-x-1/2 -translate-y-full z-0"></div>

                  {/* Horizontal connector for mobile */}
                  <div className="md:hidden absolute top-0 left-1/2 w-8 h-px border-t border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

                  <div className="relative z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center border border-gray-200 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl text-gray-900 font-bold mb-6"
            >
              Why Choose QUORTEK for Software Development
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-900 max-w-3xl mx-auto"
            >
              We combine technical expertise with innovation to deliver software
              that drives results.
            </motion.p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Thread-like connection for benefits */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-300 z-0"></div>
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Vertical connector for desktop */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 h-8 w-px border-l border-dashed border-gray-300 -translate-x-1/2 -translate-y-full z-0"></div>

                  {/* Horizontal connector for mobile */}
                  <div className="md:hidden absolute top-0 left-1/2 w-8 h-px border-t border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center border border-gray-200 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl text-gray-900 md:text-4xl font-bold mb-6"
            >
              Our Approach to Software Development
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-900 max-w-3xl mx-auto"
            >
              We follow a clear and strategic process to ensure quality and
              success.
            </motion.p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Thread-like connection for approach */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-300 z-0"></div>
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
              {approachPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Vertical connector for desktop */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 h-8 w-px border-l border-dashed border-gray-300 -translate-x-1/2 -translate-y-full z-0"></div>

                  {/* Horizontal connector for mobile */}
                  <div className="md:hidden absolute top-0 left-1/2 w-8 h-px border-t border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

                  <div className="relative z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center border border-gray-200 mb-6">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to build your software solution?
            </h3>
            <p className="text-xl mb-8">
              Let&apos;s discuss how we can create a scalable and secure
              application for your business.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 rounded-full text-lg font-medium hover:bg-gray-50 transition-all">
              Reach Out Today
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
