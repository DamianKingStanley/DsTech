"use client";
import { motion } from "framer-motion";
import {
  FaPalette,
  FaPaintBrush,
  FaRocket,
  FaVectorSquare,
  FaBullhorn,
} from "react-icons/fa";
import { useTheme } from "next-themes";

const designServices = [
  {
    name: "Branding Strategy",
    icon: <FaRocket className="text-4xl" />,
    desc: "We develop a unique brand voice and visual style that resonates with your audience, from logo creation to full brand guidelines.",
  },
  {
    name: "Logo Design",
    icon: <FaPalette className="text-4xl" />,
    desc: "Our team creates impactful logos that visually communicate your brand's essence, leaving a lasting impression.",
  },
  {
    name: "Custom Graphics",
    icon: <FaPaintBrush className="text-4xl" />,
    desc: "We craft tailored graphics, from banners to digital art, to elevate your brand's identity and engage your audience.",
  },
  {
    name: "UI/UX Design",
    icon: <FaVectorSquare className="text-4xl" />,
    desc: "We design user-centric interfaces for websites and apps, focusing on aesthetics, usability, and functionality.",
  },
  {
    name: "Marketing Materials",
    icon: <FaBullhorn className="text-4xl" />,
    desc: "From brochures to social media graphics, we create marketing materials that boost your brand's visibility.",
  },
];

const benefits = [
  {
    title: "Tailored Creativity",
    desc: "We deliver custom designs that align perfectly with your brand's vision and goals.",
    icon: <FaPaintBrush className="text-3xl" />,
  },
  {
    title: "User-Centric Focus",
    desc: "Our designs prioritize usability and engagement, ensuring a seamless experience.",
    icon: <FaVectorSquare className="text-3xl" />,
  },
  {
    title: "Brand Consistency",
    desc: "We ensure all design elements reflect your brand identity cohesively.",
    icon: <FaPalette className="text-3xl" />,
  },
];

export default function GraphicsAndBranding() {
  const { theme } = useTheme();

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
    <div
      className={`relative py-28 overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900"
          : "bg-gradient-to-b from-white via-blue-50 to-white"
      }`}
    >
      {/* Hero Section */}
      <section className="relative py-10 md:py-16 overflow-hidden">
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
              Design Excellence
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold  mb-6"
            >
              Transform Your Brand with QUORTEK
            </motion.h1>

            <motion.p variants={item} className="text-xl  max-w-3xl mx-auto">
              We shape your brand identity with custom graphics, unique designs,
              and creative solutions that stand out.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Design Services Section */}
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
              Our Design Process
            </motion.h2>
            <motion.p variants={item} className="text-xl  max-w-3xl mx-auto">
              A meticulous approach to crafting impactful designs at every
              stage.
            </motion.p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Thread-like connection for design services */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {designServices.map((service, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col items-center text-center ${
                      index % 2 === 0
                        ? "md:items-end md:text-right"
                        : "md:items-start md:text-left"
                    } lg:items-center lg:text-center`}
                  >
                    {/* Horizontal connector to central thread */}
                    <div
                      className={`absolute top-10 h-px border-t border-dashed border-gray-300 z-0 ${
                        index % 2 === 0
                          ? "md:w-1/2 md:left-1/2 lg:left-auto lg:right-1/2"
                          : "md:w-1/2 md:right-1/2 lg:right-auto lg:left-1/2"
                      } lg:w-1/3`}
                    ></div>

                    <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center border border-gray-200 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                      {service.name}
                    </h3>
                    <p className="">{service.desc}</p>
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
              Why Choose QUORTEK for Design
            </motion.h2>
            <motion.p variants={item} className="text-xl  max-w-3xl mx-auto">
              We combine creativity with strategic thinking to elevate your
              brand.
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

                  <div className="relative z-10 w-16 h-16 rounded-full  flex items-center justify-center border border-gray-200 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
