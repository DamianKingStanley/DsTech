"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import Image from "next/legacy/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    { name: "Founder", href: "https://kingdamian.vercel.app/" },
    { name: "Contact", href: "/contact" },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

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

  if (!mounted) {
    return null;
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed w-full top-0 z-50 backdrop-blur-lg transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900/90" : "bg-white/90"
        } border-b ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        } shadow-md`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link href="/" className="text-1xl flex items-center font-bold">
                {theme === "dark" ? (
                  <Image
                    src="/images/logo/QuortekLogo.png" // Dark theme logo
                    alt="Quortek Logo"
                    width={120}
                    height={30}
                    className="h-10 w-auto"
                    priority
                  />
                ) : (
                  <Image
                    src="/images/logo/QuortekLogo2.png" // Light theme logo
                    alt="Quortek Logo"
                    width={120}
                    height={30}
                    className="h-10 w-auto"
                    priority
                  />
                )}
              </Link>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-6">
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
                          className={`flex items-center space-x-1 ${
                            theme === "dark"
                              ? "text-gray-300 hover:text-blue-400"
                              : "text-gray-700 hover:text-blue-600"
                          } transition-colors duration-200`}
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
                              className={`absolute left-0 mt-2 w-56 origin-top-right rounded-xl shadow-lg overflow-hidden ${
                                theme === "dark"
                                  ? "bg-gray-800 border-gray-700"
                                  : "bg-white border-gray-100"
                              } border`}
                            >
                              <div className="p-2 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem}
                                    href={`/${item.name.toLowerCase()}/${subItem
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                                      theme === "dark"
                                        ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700"
                                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                    }`}
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
                        className={`${
                          theme === "dark"
                            ? "text-gray-300 hover:text-blue-400"
                            : "text-gray-700 hover:text-blue-600"
                        } transition-colors duration-200`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center lg:hidden space-x-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg focus:outline-none ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
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
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`lg:hidden overflow-hidden transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="px-4 pb-6 pt-2 space-y-2">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className={`border-b ${
                      theme === "dark" ? "border-gray-700" : "border-gray-100"
                    } last:border-0`}
                  >
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`flex justify-between items-center w-full py-4 text-left transition-colors duration-200 ${
                            theme === "dark"
                              ? "text-gray-300 hover:text-blue-400"
                              : "text-gray-700 hover:text-blue-600"
                          }`}
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
                              className={`pl-4 space-y-2 rounded-lg mb-2 ${
                                theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                              }`}
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem}
                                  href={`/${item.name.toLowerCase()}/${subItem
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className={`block py-3 px-3 transition-colors duration-200 ${
                                    theme === "dark"
                                      ? "text-gray-300 hover:text-blue-400"
                                      : "text-gray-600 hover:text-blue-600"
                                  }`}
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
                        className={`block py-4 transition-colors duration-200 ${
                          theme === "dark"
                            ? "text-gray-300 hover:text-blue-400"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="flex justify-center space-x-4 pt-2">
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      theme === "dark"
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>

                <Link
                  href="/contact"
                  className="block w-full mt-4 px-4 py-3 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-blue-500/20 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Project
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
