"use client";

import {
  FaLaptop,
  FaCloud,
  FaCode,
  FaPen,
  FaCamera,
  FaNetworkWired,
  FaChartBar,
  FaBullhorn,
  FaMobileAlt, // Icon for App Development
  FaUsersCog, // Icon for Coaching
  FaLightbulb, // Icon for Innovation or Idea
} from "react-icons/fa"; // Import relevant icons
import Image from "next/image";
import Link from "next/link";

export default function GeneralServices() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] ">
        <Image
          src="/images/general-service.png"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 bg-black bg-opacity-40 p-10">
          <h1 className="text-4xl font-bold mb-2">
            Welcome to DS Tech Company
          </h1>
          <p className="text-lg">We provide all tech and non tech solution</p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 text-center bg-white text-black">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <p className="text-lg mb-12">
          At DS Tech, we provide comprehensive tech services to meet your
          business needs. From web development to cloud solutions, we have you
          covered.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaLaptop size={50} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600 mb-4">
              We build custom websites tailored to your needs. Our team uses the
              latest technologies to deliver responsive and user-friendly
              websites.
            </p>
            <Link href="/services/website-development">
              <p className="text-green-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>
          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaUsersCog size={50} className="text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Developer Coaching</h3>
            <p className="text-gray-600 mb-4">
              We offer personalized coaching for developers to enhance their
              skills in coding, problem-solving, and software development
              practices.
            </p>
            <Link href="/developer-coaching">
              <p className="text-teal-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaCloud size={50} className="text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Secure, scalable, and reliable cloud services to help your
              business thrive. We provide cloud storage, hosting, and migration
              solutions.
            </p>
            <Link href="/cloud-solutions">
              <p className="text-cyan-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>
          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaMobileAlt size={50} className="text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">App Development</h3>
            <p className="text-gray-600 mb-4">
              We specialize in creating custom mobile applications for iOS and
              Android. Our apps are built to improve your business performance
              and user engagement.
            </p>
            <Link href="/services/android-and-ios-apps">
              <p className="text-pink-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaCode size={50} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Software Development</h3>
            <p className="text-gray-600 mb-4">
              Custom software development to enhance your business operations.
              Our developers create high-performance applications tailored to
              your needs.
            </p>
            <Link href="/software-development">
              <p className="text-orange-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaPen size={50} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Content Writing</h3>
            <p className="text-gray-600 mb-4">
              Our expert writers produce high-quality content that engages your
              audience and boosts your online presence. We cover blogs,
              articles, and more.
            </p>
            <Link href="/content-writing">
              <p className="text-yellow-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaBullhorn size={50} className="text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">
              Social Media Management
            </h3>
            <p className="text-gray-600 mb-4">
              We manage your social media platforms, creating engaging posts,
              handling your community, and growing your brand&apos;s presence
              online.
            </p>
            <Link href="/social-media-management">
              <p className="text-purple-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaCamera size={50} className="text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Photography</h3>
            <p className="text-gray-600 mb-4">
              Professional photography services for your business needs. From
              product shots to corporate events, we capture every moment.
            </p>
            <Link href="/photography">
              <p className="text-indigo-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaNetworkWired size={50} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Network Solutions</h3>
            <p className="text-gray-600 mb-4">
              We offer robust network solutions to ensure seamless connectivity
              and security for your business infrastructure.
            </p>
            <Link href="/network-solutions">
              <p className="text-blue-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaChartBar size={50} className="text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Business Analytics</h3>
            <p className="text-gray-600 mb-4">
              Unlock insights and drive business growth with our data analysis
              services. We help you make informed decisions using advanced
              analytics tools.
            </p>
            <Link href="/business-analytics">
              <p className="text-gray-500 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="w-80 p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <FaLightbulb size={50} className="text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">
              Innovation and Strategy
            </h3>
            <p className="text-gray-600 mb-4">
              Helping your business stay ahead with innovative strategies and
              solutions that drive growth and success in competitive markets.
            </p>
            <Link href="/innovation-strategy">
              <p className="text-yellow-600 font-semibold hover:underline">
                Read More
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
