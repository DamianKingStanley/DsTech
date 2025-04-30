"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  // Navigation items with dropdowns
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      dropdown: [
        "General Services",
        "Android and IOS Apps",
        "Website Development",
        "Software Development",
        "Tech Coaching",
        "Graphics and Branding",
      ],
    },
    {
      name: "About",
      dropdown: ["About Us", "Our Team", "Values", "Privacy Policy"],
    },
    { name: "Founder", href: "https://kingdamian.netlify.app/" },
    { name: "Contact", href: "/contact" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
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

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed w-full top-0 z-50 backdrop-blur-lg ${
          scrolled ? "bg-white/90 shadow-md" : "bg-white"
        } border-b border-gray-200`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="text-1xl flex items-center font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
              >
                <Image
                  src="/images/qulogo.png"
                  alt="Logo"
                  width={60}
                  height={100}
                />
                Quortek Hub
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex space-x-6"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={itemVariants}
                    className="relative"
                  >
                    {item.dropdown ? (
                      <div
                        onMouseEnter={() => toggleDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="relative"
                      >
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          {activeDropdown === item.name ? (
                            <FiChevronUp className="h-4 w-4" />
                          ) : (
                            <FiChevronDown className="h-4 w-4" />
                          )}
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              className="absolute left-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden"
                            >
                              <div className="p-2 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem}
                                    href={`/${item.name.toLowerCase()}/${subItem
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-lg text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white"
            >
              <div className="px-4 pb-6 pt-2 space-y-2">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-gray-100 last:border-0"
                  >
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex justify-between items-center w-full py-4 text-left text-gray-700 hover:text-blue-600"
                        >
                          <span>{item.name}</span>
                          {activeDropdown === item.name ? (
                            <FiChevronUp className="h-5 w-5" />
                          ) : (
                            <FiChevronDown className="h-5 w-5" />
                          )}
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-2 bg-gray-50 rounded-lg mb-2"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem}
                                  href={`/${item.name.toLowerCase()}/${subItem
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="block py-3 px-3 text-gray-600 hover:text-blue-600"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="block py-4 text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <Link
                  href="/contact"
                  className="block w-full mt-4 px-4 py-3 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </LazyMotion>
  );
};

export default Navbar;
