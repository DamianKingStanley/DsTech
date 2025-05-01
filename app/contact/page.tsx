"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

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
  hidden: { y: 20, opacity: 0 },
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

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("message"); // "message" or "faq"

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  console.log(status);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Removed the empty SubmitEvent interface as it is equivalent to React.FormEvent<HTMLFormElement>

  interface ApiResponse {
    success: boolean;
    message: string;
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setSending(true);
    setStatus("Sending...");

    // Simulate API call
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setSuccess(false);
        setStatus("");
      }, 5000);
    }, 2000);

    // Actual API call would be:
    const res = await fetch("/apis/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result: ApiResponse = await res.json();
    if (result.success) {
      setSuccess(true);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
    setSending(false);
  };

  // FAQ items
  const faqItems = [
    {
      question: "What services does QUORTEK offer?",
      answer:
        "QUORTEK offers a range of tech services including web development, software development, UI/UX design, branding, and tech coaching.",
    },
    {
      question: "How quickly can you respond to inquiries?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Yes, we provide ongoing support and maintenance packages to ensure your digital solutions continue to perform optimally.",
    },
    {
      question: "Where is QUORTEK located?",
      answer:
        "Our headquarters is in Tech City, with remote team members across multiple locations.",
    },
  ];

  return (
    <div className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white  text-gray-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 Q50,50 100,0 V100 H0 Z"
            fill="none"
            stroke="rgba(200,200,200,0.1)"
            strokeWidth="0.5"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M0,100 Q50,50 100,100 V0 H0 Z"
            fill="none"
            stroke="rgba(200,200,200,0.1)"
            strokeWidth="0.5"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>

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
            Let&apos;s Connect
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contact QUORTEK
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Have a question or want to work with us? Reach out, and we&apos;ll
            get back to you soon.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex justify-center">
            <div className="inline-flex border border-gray-200 rounded-full p-1">
              <button
                onClick={() => setActiveTab("message")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "message"
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "faq"
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "message" ? (
            <div className="relative">
              {/* Thread-like connection */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Contact Information */}
                <motion.div
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  variants={container}
                  viewport={{ once: true }}
                >
                  {/* Horizontal connector to central thread */}
                  <div className="absolute top-16 right-0 w-8 h-px border-t border-dashed border-gray-300 z-0 hidden md:block"></div>

                  <div className="relative z-10 bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                    <motion.h2
                      variants={item}
                      className="text-2xl md:text-3xl font-bold mb-8"
                    >
                      Get in Touch
                    </motion.h2>

                    <div className="space-y-8">
                      <motion.div
                        variants={item}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FaEnvelope className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1">Email Us</h3>
                          <p className="text-gray-600">contact@quortek.com</p>
                          <p className="text-gray-600">support@quortek.com</p>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={item}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FaPhone className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1">Call Us</h3>
                          <p className="text-gray-600">+234 915 982 2561</p>
                          <p className="text-gray-600">Mon-Fri, 9am-5pm WAT</p>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={item}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FaMapMarkerAlt className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                          <p className="text-gray-600">
                            Tech Hub, Innovation Street
                          </p>
                          <p className="text-gray-600">Lagos, Nigeria</p>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div variants={item} className="mt-10">
                      <h3 className="font-medium text-lg mb-4">
                        Connect With Us
                      </h3>
                      <div className="flex space-x-4">
                        <a
                          href="https://facebook.com/king.stan.01"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="https://x.com/_king_Damian?s=09"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/damian-theking/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href="https://www.instagram.com/quortek?igsh=YWN3aDdwOGwxYjJ1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-all"
                        >
                          <FaInstagram />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  ref={formRef}
                  className="relative"
                  initial="hidden"
                  animate={controls}
                  variants={container}
                >
                  {/* Horizontal connector to central thread */}
                  <div className="absolute top-16 left-0 w-8 h-px border-t border-dashed border-gray-300 z-0 hidden md:block"></div>

                  <div className="relative z-10 bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                    <motion.h2
                      variants={item}
                      className="text-2xl md:text-3xl font-bold mb-8"
                    >
                      Send Us a Message
                    </motion.h2>

                    {success ? (
                      <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                          <FaCheck className="text-green-600 text-3xl" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for reaching out. We&apos;ll get back to you
                          as soon as possible.
                        </p>
                        <button
                          onClick={() => setSuccess(false)}
                          className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-all"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div variants={item}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition-all"
                              placeholder="Your name"
                            />
                          </motion.div>
                          <motion.div variants={item}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition-all"
                              placeholder="Your email"
                            />
                          </motion.div>
                        </div>
                        <motion.div variants={item}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition-all"
                            placeholder="Message subject"
                          />
                        </motion.div>
                        <motion.div variants={item}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition-all resize-none"
                            placeholder="Write your message"
                          ></textarea>
                        </motion.div>
                        <motion.button
                          type="submit"
                          className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={sending}
                        >
                          {sending ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <FaPaperPlane className="ml-2" />
                            </>
                          )}
                        </motion.button>
                      </form>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={container}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Thread-like connection */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-300 -translate-x-1/2 z-0"></div>

                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative mb-8 last:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Horizontal connector */}
                    <div className="absolute top-8 left-1/2 w-8 h-px border-t border-dashed border-gray-300 z-0"></div>

                    <div
                      className={`relative z-10 bg-white border border-gray-200 rounded-lg p-6 shadow-sm ml-auto ${
                        index % 2 === 0
                          ? "md:ml-auto md:mr-0 md:w-1/2"
                          : "md:mr-auto md:ml-0 md:w-1/2"
                      }`}
                    >
                      <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Contact Options */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Quick Contact Options
            </h2>
            <p className="text-gray-600">
              Choose the most convenient way to reach us
            </p>
          </div>

          <div className="relative">
            {/* Horizontal thread line */}
            <div className="absolute top-16 left-0 right-0 h-px border-t border-dashed border-gray-300 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Schedule a Call",
                  description: "Book a 30-minute consultation with our team",
                  icon: <FaPhone />,
                  action: "Schedule Now",
                },
                {
                  title: "Live Chat",
                  description: "Chat with our support team in real-time",
                  icon: <FaEnvelope />,
                  action: "Start Chat",
                },
                {
                  title: "Request Quote",
                  description: "Get a detailed quote for your project",
                  icon: <FaPaperPlane />,
                  action: "Request Quote",
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Vertical connector */}
                  <div className="absolute top-0 left-1/2 h-16 w-px border-l border-dashed border-gray-300 -translate-x-1/2 -translate-y-full z-0"></div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-all">
                    {option.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
