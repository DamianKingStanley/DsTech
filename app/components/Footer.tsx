import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">DS TECH</h2>
            <h3 className="text-xl font-semibold mb-4">
              Software Development Company
            </h3>
            <p className="text-gray-400 mb-4">
              At DS Tech, we believe that our commitment to innovation,
              integrity, collaboration, customer focus, results-orientation, and
              continuous improvement sets us apart from the competition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <strong>Location:</strong> 28 Choba Road, Port Harcourt, Rivers
                State, Nigeria.
              </li>
              <li className="mb-2">
                <strong>Email:</strong> info@dstech.com
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +2349159822561
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <a href="/about/about-us" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services/general-services"
                  className="hover:text-white"
                >
                  Our Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Our Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe To Our Newsletter To Get Our Update News!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>
            &copy; 2019 - {new Date().getFullYear()} DS Tech Company. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
