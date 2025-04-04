"use client";

import React from "react";
import Image from "next/image";
import { motion, useTransform, useMotionValue } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

// Updated team members (removed duplicate "Olaiya Mary" and ensured unique social links)
const teamMembers = [
  {
    name: "King Damian",
    position: "Founder & CEO",
    image:
      "https://ik.imagekit.io/webmanagement/mytech/king.PNG?updatedAt=1743758060696", // Placeholder image path
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/damian-stanley-ba6aa422a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/_king_Damian?s=09",
      github: "https://github.com/DamianKingStanley",
      instagram: "https://www.instagram.com/quortek?igsh=YWN3aDdwOGwxYjJ1",
    },
  },
  {
    name: "Olaiya Mary",
    position: "Chief Technology Officer (CTO)",
    image:
      "https://ik.imagekit.io/webmanagement/mytech/mary.PNG?updatedAt=1743758060365", // Placeholder image path
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/olaiyamary",
      twitter: "https://twitter.com/olaiyamary",
      github: "https://github.com/olaiyamary",
      instagram: "https://instagram.com/olaiyamary",
    },
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

const OurTeam = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 mt-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
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
            Meet the Team
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            The QUORTEK Team
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Our talented team drives innovation, builds solutions, and empowers
            our clients to succeed.
          </motion.p>
        </motion.div>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="h-full perspective-1000"
            >
              <motion.div
                variants={cardHover}
                className="h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col items-center text-center"
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
                {/* Team Member Image */}
                <motion.div
                  className="relative w-24 h-24 rounded-full mb-4 overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="filter grayscale"
                  />
                </motion.div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h2>
                <p className="text-gray-400 mb-4">{member.position}</p>
                <div className="flex space-x-4">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {member.socialLinks.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <FaInstagram size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-1 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Want to join the QUORTEK team?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                We’re always looking for talented individuals to help us
                innovate and grow.
              </p>
              <button className="inline-flex items-center justify-center px-4 py-4 bg-gradient-to-r from-white to-gray-200 text-black rounded-full text-lg font-medium hover:shadow-lg hover:shadow-gray-500/30 transition-all">
                Explore Careers
                <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurTeam;
