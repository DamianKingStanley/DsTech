"use client";
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

const coachingPrograms = [
  {
    name: "Web Development",
    icon: <FaCode className="text-4xl" />,
    desc: "Master front-end, back-end, and full-stack development with HTML, CSS, JavaScript, React, and Next.js.",
  },
  {
    name: "App Development",
    icon: <FaMobileAlt className="text-4xl" />,
    desc: "Learn iOS and Android app development with React Native, Swift, and Kotlin for cross-platform solutions.",
  },
  {
    name: "Data Science",
    icon: <FaDatabase className="text-4xl" />,
    desc: "Explore data analysis with Python, SQL, and data visualization to turn data into actionable insights.",
  },
  {
    name: "Cybersecurity",
    icon: <FaLock className="text-4xl" />,
    desc: "Gain hands-on skills in securing systems and networks with the latest cybersecurity tools.",
  },
  {
    name: "Game Development",
    icon: <FaGamepad className="text-4xl" />,
    desc: "Create interactive games using Unity and Unreal Engine, focusing on coding and game mechanics.",
  },
  {
    name: "AI & Machine Learning",
    icon: <FaRobot className="text-4xl" />,
    desc: "Build intelligent systems with machine learning, deep learning, and neural networks.",
  },
  {
    name: "Cloud Computing",
    icon: <FaCloud className="text-4xl" />,
    desc: "Master AWS, Azure, and Google Cloud to design scalable and secure cloud infrastructure.",
  },
  {
    name: "DevOps",
    icon: <FaDev className="text-4xl" />,
    desc: "Learn CI/CD, automation, and DevOps practices for faster, reliable software delivery.",
  },
  {
    name: "Blockchain",
    icon: <FaParachuteBox className="text-4xl" />,
    desc: "Develop decentralized apps (dApps) and explore smart contracts and distributed ledgers.",
  },
];

// Benefits of choosing QUORTEK's Practically Tech Coaching
const benefits = [
  {
    title: "Hands-On Learning",
    desc: "Our coaching emphasizes practical, real-world projects to build your skills.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    title: "Expert Mentors",
    desc: "Learn from industry professionals with years of experience in tech.",
    icon: <FaDev className="text-3xl" />,
  },
  {
    title: "Career Growth",
    desc: "Gain the skills and confidence to advance your career in tech.",
    icon: <FaRocket className="text-3xl" />,
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
              Practically Tech Coaching
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Unlock Your Potential with QUORTEK
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Hands-on tech coaching to help you master in-demand skills and
              advance your career.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coaching Programs Section */}
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
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Coaching Programs
            </motion.h2>
            <motion.p variants={item} className="text-xl max-w-3xl mx-auto">
              Comprehensive training in a wide range of tech disciplines,
              tailored to your goals.
            </motion.p>
          </motion.div>

          {/* Thread-like connection for programs */}
          <div className="relative max-w-7xl mx-auto">
            {/* Central thread line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {coachingPrograms.map((program, index) => {
                // Calculate row and column for positioning

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Horizontal connector to central thread */}
                    <div className="absolute top-10 h-px border-t border-dashed border-gray-300 z-0 w-full md:w-1/2 lg:w-1/3"></div>

                    <div className="relative z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center border border-gray-200 mb-6">
                      {program.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                      {program.name}
                    </h3>
                    <p className="text-gray-600">{program.desc}</p>
                  </motion.div>
                );
              })}
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
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Why Choose Practically Tech Coaching
            </motion.h2>
            <motion.p variants={item} className="text-xl max-w-3xl mx-auto">
              We empower you with the skills and confidence to succeed in tech.
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

      {/* CTA Section */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-12 border border-gray-200 rounded-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to start your tech journey?
            </h3>
            <p className="text-xl mb-8">
              Join Practically Tech Coaching and unlock your potential with
              expert guidance.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 rounded-full text-lg font-medium hover:bg-gray-50 transition-all">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
