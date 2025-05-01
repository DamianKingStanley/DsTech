"use client";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
  FaMobileAlt,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

// Development process steps
const processSteps = [
  {
    title: "Discovery & Planning",
    desc: "We analyze your business goals, audience, and requirements to create a tailored website strategy.",
    icon: <FaLaptopCode className="text-4xl" />,
  },
  {
    title: "UI/UX Design",
    desc: "Our team designs intuitive, responsive interfaces that ensure a seamless user experience across devices.",
    icon: <FaPaintBrush className="text-4xl" />,
  },
  {
    title: "Development",
    desc: "We build your website using modern technologies like Next.js, ensuring clean, scalable, and optimized code.",
    icon: <FaCode className="text-4xl" />,
  },
  {
    title: "Testing",
    desc: "We rigorously test across devices and browsers to ensure your website is responsive and bug-free.",
    icon: <FaBug className="text-4xl" />,
  },
  {
    title: "Launch",
    desc: "We deploy your website, ensuring it's fast, secure, and ready to go live with minimal downtime.",
    icon: <FaRocket className="text-4xl" />,
  },
  {
    title: "Support & Optimization",
    desc: "We provide ongoing support, updates, and SEO optimization to keep your website performing at its best.",
    icon: <FaHeadset className="text-4xl" />,
  },
];

// Benefits of choosing QUORTEK for website development
const benefits = [
  {
    title: "Custom Solutions",
    desc: "We create tailored websites, from landing pages to complex applications, to meet your unique needs.",
    icon: <FaLaptopCode className="text-3xl" />,
  },
  {
    title: "Responsive Design",
    desc: "Our websites are fully responsive, ensuring a seamless experience across all devices.",
    icon: <FaMobileAlt className="text-3xl" />,
  },
  {
    title: "SEO Optimization",
    desc: "We optimize your website for search engines to boost visibility and attract more traffic.",
    icon: <FaSearch className="text-3xl" />,
  },
];

export default function WebsiteDevelopment() {
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
    <div className="relative py-18 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white  text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-5 overflow-hidden">
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
              Website Excellence
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Website Development by QUORTEK
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              We build user-friendly, responsive, and visually stunning websites
              that drive your business forward.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="relative pt-2 pb-32">
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
              Our Development Process
            </motion.h2>
            <motion.p variants={item} className="text-xl max-w-3xl mx-auto">
              A meticulous approach to crafting high-quality websites at every
              stage.
            </motion.p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Thread line connecting all steps */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 mb-24 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Line from center to content */}
                <div className="absolute left-1/2 top-10 w-16 h-px border-t border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-left" : "text-left"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border border-gray-200">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1"></div>
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
              Why Choose QUORTEK for Website Development
            </motion.h2>
            <motion.p variants={item} className="text-xl max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver
              websites that grow your business.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
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
            className="max-w-3xl mx-auto p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to build your website?
            </h3>
            <p className="text-xl mb-8">
              Let&apos;s discuss how we can create a stunning online presence
              for your business.
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
