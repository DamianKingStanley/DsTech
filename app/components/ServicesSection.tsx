"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaChartLine,
  FaPaintBrush,
  FaCogs,
  FaRobot,
  FaGamepad,
  FaDatabase,
  FaUserTie,
  FaHeadset,
  FaShoppingCart,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
const heroImage = "/images/heroImage.png";

const services = [
  {
    name: "Android & iOS Apps",
    icon: <FaMobileAlt />,
    desc: "We develop user-friendly mobile apps for iOS and Android.",
  },
  {
    name: "Website Development",
    icon: <FaLaptopCode />,
    desc: "Custom websites designed for speed, SEO, and user experience.",
  },
  {
    name: "Software Development",
    icon: <FaCogs />,
    desc: "Custom software solutions for businesses and enterprises.",
  },
  {
    name: "SEO & Digital Marketing",
    icon: <FaChartLine />,
    desc: "Boost your online presence with expert marketing strategies.",
  },
  {
    name: "Graphics & Branding",
    icon: <FaPaintBrush />,
    desc: "Eye-catching branding and graphics tailored to your brand.",
  },
  {
    name: "Decentralized Apps",
    icon: <FaDatabase />,
    desc: "Secure and scalable blockchain-based decentralized applications.",
  },
  {
    name: "AI & Machine Learning",
    icon: <FaRobot />,
    desc: "AI-powered solutions to automate and enhance your business.",
  },
  {
    name: "Simulation & Gaming",
    icon: <FaGamepad />,
    desc: "High-quality simulations and gaming solutions for all platforms.",
  },
  {
    name: "Blockchain Projects",
    icon: <FaProjectDiagram />,
    desc: "Developing smart contracts, DeFi, and blockchain solutions.",
  },
  {
    name: "Consulting & Training",
    icon: <FaUserTie />,
    desc: "Expert advice and training for digital transformation.",
  },
  {
    name: "Support & Maintenance",
    icon: <FaHeadset />,
    desc: "24/7 support and maintenance for your digital projects.",
  },
  {
    name: "Custom Solutions",
    icon: <FaServer />,
    desc: "Tailor-made software solutions to fit your unique needs.",
  },
  {
    name: "E-commerce Solutions",
    icon: <FaShoppingCart />,
    desc: "Building powerful online stores with seamless user experience.",
  },
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(services.length / 3); // Show 3 at a time for desktop

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16  text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Services We Provide
      </h2>
      <div className="relative overflow-hidden max-w-5xl mx-auto py-8">
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-1/3 min-w-full md:min-w-[33.33%] p-6 "
            >
              <div className="bg-white p-6 rounded-lg shadow-lg mx-2 h-56">
                <div className="flex justify-center mb-4  text-2xl font-bold text-blue-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-700">
                  {service.name}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="container mx-auto px-6 lg:px-20 relative flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <Image
            src={heroImage}
            alt="Hero Image"
            width={450}
            height={450}
            className="rounded-lg shadow-lg mb-3"
          />
        </div>
        <div className="lg:w-1/2 text-left">
          <h1 className="text-2xl font-bold mb-4">DS TECH</h1>
          <p className="text-sm mb-3 text-gray-700 text-justify">
            Where technology meets innovation! We are thrilled to have you join
            our community of forward-thinking individuals who are driving the
            future of technology. Our mission is to provide cutting-edge
            solutions that enhance productivity, creativity, and efficiency.
          </p>
          <p className="text-sm mb-3 text-gray-700 text-justify">
            At Starnet Innovations Limited, we are committed to delivering
            products that meet the ever-evolving demands of the modern world.
            Our team of experts is dedicated to ensuring that our customers
            receive the highest quality products and services.
          </p>
          <p className="text-sm mb-3 text-gray-700 text-justify">
            We believe that technology should simplify life, not complicate it.
            That’s why we strive to make our products user-friendly and
            intuitive. Whether you are looking to upgrade your work processes or
            revolutionize the way you play, Starnet Innovations Limited has you
            covered.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Call Us
          </button>
        </div>

        {/* Right Side - Image */}
      </div>
    </section>
  );
}
