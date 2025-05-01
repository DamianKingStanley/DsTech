"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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

// Milestones
const milestones = [
  {
    year: "2015",
    title: "QUORTEK Founded",
    description:
      "Started as a small web development agency with just 3 team members.",
  },
  {
    year: "2017",
    title: "Expanded Services",
    description: "Added graphic design and branding to our core offerings.",
  },
  {
    year: "2019",
    title: "Launched Tech Coaching",
    description:
      "Introduced our Practically Tech Coaching program to help individuals build tech skills.",
  },
  {
    year: "2021",
    title: "Global Expansion",
    description:
      "Opened our first international office and reached clients in 15+ countries.",
  },
  {
    year: "2023",
    title: "Innovation Lab",
    description:
      "Established our Innovation Lab to research and develop emerging technologies.",
  },
];

const About = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={item}
              className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider uppercase"
            >
              Who We Are
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About QUORTEK Hub
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              We&apos;re a tech company dedicated to building, designing, and
              educating for a better digital future.
            </motion.p>
          </motion.div>

          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto mb-16 md:mb-24"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/tech-team.jpg"
                alt="QUORTEK team collaborating"
                width={1280}
                height={720}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-sm font-medium">
                Our headquarters in Tech City
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto">
            {/* Thread-like connection */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 mb-24 flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="relative">
                  {/* Horizontal connector */}
                  <div className="absolute top-1/2 right-0 w-12 h-px border-t border-dashed border-gray-300 z-0"></div>
                  <Image
                    src="/images/techspace.jpg"
                    alt="QUORTEK mission"
                    width={600}
                    height={400}
                    className="rounded-lg border border-gray-200"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At QUORTEK, we&apos;re on a mission to democratize technology
                  by creating innovative solutions that empower businesses and
                  individuals to thrive in the digital age. We believe that
                  technology should be accessible, intuitive, and
                  transformative.
                </p>
                <p className="text-lg text-gray-700">
                  Through our software development, design services, and
                  educational programs, we aim to bridge the gap between complex
                  technology and practical application, ensuring our clients can
                  leverage the full potential of digital tools.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col md:flex-row-reverse items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="relative">
                  <Image
                    src="/images/tech-team2.jpeg"
                    alt="QUORTEK vision"
                    width={600}
                    height={400}
                    className="rounded-lg border border-gray-200"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12">
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We envision a future where technology serves as a catalyst for
                  positive change, enabling businesses to innovate, individuals
                  to grow, and communities to thrive. QUORTEK aims to be at the
                  forefront of this transformation.
                </p>
                <p className="text-lg text-gray-700">
                  By 2030, we aspire to impact over 10,000 businesses and
                  100,000 individuals through our services and educational
                  programs, establishing ourselves as a global leader in
                  technology solutions and digital literacy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History/Timeline Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Journey
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              From humble beginnings to industry leadership.
            </motion.p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline thread */}
            <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px border-l border-dashed border-gray-300 z-0"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-16 last:mb-0 pl-8 md:pl-0 md:flex"
              >
                {/* Year marker */}
                <div className="absolute left-0 md:relative md:left-auto md:w-1/4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="ml-4 md:ml-0 font-bold text-xl">
                    {milestone.year}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/4 md:pl-12">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-12 border border-gray-200 rounded-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to work with us?
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Let&apos;s discuss how QUORTEK can help transform your ideas into
              reality.
            </p>
            <button className="border border-gray-300 font-semibold px-6 py-3 rounded-full transition hover:bg-gray-50">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
