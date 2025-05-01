"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaQuoteLeft,
} from "react-icons/fa";

// Team members with expanded information
const teamMembers = [
  {
    name: "King Damian",
    position: "Founder & CEO",
    image:
      "https://ik.imagekit.io/webmanagement/mytech/king.PNG?updatedAt=1743758060696",
    bio: "Visionary leader with a passion for technology and innovation. King founded QUORTEK with the mission to create impactful digital solutions that transform businesses.",
    quote:
      "Technology should solve real problems and create meaningful connections.",
    expertise: [
      "Strategic Leadership",
      "Business Development",
      "Product Vision",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/damian-theking/",
      twitter: "https://x.com/_king_Damian?s=09",
      github: "https://github.com/DamianKingStanley",
      instagram: "https://www.instagram.com/quortek?igsh=YWN3aDdwOGwxYjJ1",
    },
  },
  {
    name: "Olaiya Mary",
    position: "Chief Technology Officer (CTO)",
    image:
      "https://ik.imagekit.io/webmanagement/mytech/mary.PNG?updatedAt=1743758060365",
    bio: "Tech innovator with deep expertise in software architecture and emerging technologies. Mary leads our development team with a focus on scalable, future-proof solutions.",
    quote:
      "Great technology feels invisible while making the impossible possible.",
    expertise: [
      "Software Architecture",
      "AI & Machine Learning",
      "Cloud Infrastructure",
    ],
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

const OurTeam = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={item}
            className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-wider uppercase"
          >
            Meet the Team
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            The QUORTEK Team
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Our talented team drives innovation, builds solutions, and empowers
            our clients to succeed.
          </motion.p>
        </motion.div>

        {/* Interactive Team Constellation */}
        <div className="relative max-w-6xl mx-auto mb-24">
          {/* Central thread line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

          {/* Team member selector */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-8 md:space-x-16">
              {teamMembers.map((member, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTeamMember(index)}
                  className={`relative focus:outline-none group ${
                    activeTeamMember === index ? "scale-110" : "opacity-70"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Connector to central thread */}
                  <div className="absolute left-1/2 bottom-full w-px h-8 border-l border-dashed border-gray-300 -translate-x-1/2"></div>

                  <div className="relative">
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                        activeTeamMember === index
                          ? "border-gray-800"
                          : "border-gray-300"
                      }`}
                    >
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className={`transition-all duration-500 ${
                          activeTeamMember === index
                            ? "grayscale-0"
                            : "grayscale"
                        }`}
                      />
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border transition-all duration-300 ${
                        activeTeamMember === index
                          ? "border-gray-800"
                          : "border-gray-300"
                      }`}
                    ></div>
                  </div>
                  <p
                    className={`mt-3 text-sm font-medium transition-all duration-300 ${
                      activeTeamMember === index
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {member.name}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Team member details */}
          <motion.div
            key={activeTeamMember}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left column - Image and social */}
              <div className="flex flex-col items-center md:items-end">
                <div className="relative mb-6">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gray-200">
                    <Image
                      src={
                        teamMembers[activeTeamMember].image ||
                        "/placeholder.svg"
                      }
                      alt={teamMembers[activeTeamMember].name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border border-gray-300"></div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white border border-gray-300"></div>
                </div>

                <div className="flex space-x-4 mb-8">
                  {Object.entries(
                    teamMembers[activeTeamMember].socialLinks
                  ).map(([platform, link], index) => {
                    const Icon =
                      platform === "linkedin"
                        ? FaLinkedin
                        : platform === "twitter"
                        ? FaTwitter
                        : platform === "github"
                        ? FaGithub
                        : FaInstagram;

                    return (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>

                <div className="relative p-6 border border-gray-200 rounded-lg bg-white mb-8 md:mb-0 max-w-xs">
                  <FaQuoteLeft className="text-gray-200 text-3xl absolute -top-4 -left-4" />
                  <p className="text-gray-600 italic">
                    &apos;{teamMembers[activeTeamMember].quote}&apos;
                  </p>
                </div>
              </div>

              {/* Right column - Bio and details */}
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {teamMembers[activeTeamMember].name}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {teamMembers[activeTeamMember].position}
                </p>

                <p className="text-gray-700 mb-8">
                  {teamMembers[activeTeamMember].bio}
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[activeTeamMember].expertise.map(
                      (skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Values */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Team Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and collaboration
            </p>
          </motion.div>

          <div className="relative">
            {/* Horizontal thread line */}
            <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-300 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Collaboration",
                  description:
                    "We believe great ideas emerge from diverse perspectives working together.",
                },
                {
                  title: "Innovation",
                  description:
                    "We constantly push boundaries to create solutions that make a difference.",
                },
                {
                  title: "Excellence",
                  description:
                    "We hold ourselves to the highest standards in everything we do.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Vertical connector */}
                  <div className="absolute top-0 left-1/2 h-8 w-px border-l border-dashed border-gray-300 -translate-x-1/2 -translate-y-full z-0"></div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-24 p-12 border border-gray-200 rounded-lg text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Join Our Team</h3>
          <p className="text-xl text-gray-700 mb-8">
            We&apos;re always looking for talented individuals who share our
            passion for innovation and excellence.
          </p>
          <button className="border border-gray-300 font-semibold px-6 py-3 rounded-full transition hover:bg-gray-50">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
