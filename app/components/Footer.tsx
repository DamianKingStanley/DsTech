"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-800"
      } text-white`}
    >
      <div className="container mx-auto px-6 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Information */}
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">QUORTEK</h2>
            <h3 className="text-lg font-semibold mb-4">
              Innovate. Build. Learn.
            </h3>
            <p
              className={`text-sm mb-6 ${
                theme === "dark" ? "text-gray-400" : "text-blue-200"
              }`}
            >
              QUORTEK is a tech company dedicated to building cutting-edge
              solutions and empowering the next generation through our
              Practically Tech Coaching program.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaFacebook />,
                  url: "https://facebook.com/king.stan.01",
                },
                { icon: <FaTwitter />, url: "https://x.com/_king_Damian?s=09" },
                {
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/in/damian-theking/",
                },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/quortek?igsh=YWN3aDdwOGwxYjJ1",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-blue-200"
                  }`}
                  whileHover="hover"
                  variants={iconVariants}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <ul
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-blue-200"
              }`}
            >
              <li className="mb-3">
                <strong>Location:</strong> 28 Choba Road, Port Harcourt, Rivers
                State, Nigeria
              </li>
              <li className="mb-3">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@quortek.com" className="hover:text-white">
                  info@quortek.com
                </a>
              </li>
              <li className="mb-3">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:damianstanley76@gmail.com"
                  className="hover:text-white"
                >
                  Damian Stanley
                </a>
              </li>
              <li className="mb-3">
                <strong>Phone:</strong>{" "}
                <a href="tel:+2349159822561" className="hover:text-white">
                  +234 915 982 2561
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-blue-200"
              }`}
            >
              <li className="mb-3">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/about/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/services/general-services"
                  className="hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className={`border-t pt-8 mt-12 text-center text-sm ${
            theme === "dark"
              ? "border-gray-800 text-gray-400"
              : "border-blue-800 text-blue-200"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© 2025 QUORTEK. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
