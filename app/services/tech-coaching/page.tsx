"use client";

import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaLock,
  FaGamepad,
  FaRobot,
  FaCloud,
  FaDev,
  FaParachuteBox,
} from "react-icons/fa";

export default function TechCoaching() {
  return (
    <div>
      <section className="relative w-full h-[400px] bg-[url('/images/teaching-web.jpeg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-6 py-12 sm:px-10 md:px-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Potential with Expert Tech Coaching
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
              Whether you&apos;re starting your journey or aiming to upgrade
              your skills, we provide hands-on coaching for a wide range of tech
              disciplines.
            </p>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left p-10 bg-white text-black">
        {/* Web Development */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaCode className="text-4xl text-blue-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Web Development
            </h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Learn front-end, back-end, and full-stack web development. Master
            HTML, CSS, JavaScript, React, Node.js, and more to build dynamic
            websites and applications.
          </p>
        </div>

        {/* App Development */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaMobileAlt className="text-4xl text-green-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              App Development
            </h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Dive into iOS and Android app development. Learn Swift, Kotlin, and
            cross-platform tools to bring your app ideas to life and reach
            global audiences.
          </p>
        </div>

        {/* Data Analysis */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaDatabase className="text-4xl text-orange-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">Data Analysis</h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Explore the world of data. Learn Python, SQL, machine learning, and
            data visualization techniques to turn raw data into actionable
            insights.
          </p>
        </div>

        {/* Cybersecurity */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaLock className="text-4xl text-red-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">Cybersecurity</h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Get hands-on training in securing systems, networks, and
            applications. Learn the latest security tools and techniques to
            protect digital assets.
          </p>
        </div>

        {/* Game Development */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaGamepad className="text-4xl text-purple-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Game Development
            </h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Master game design and development with Unity and Unreal Engine.
            Create interactive experiences with coding, animation, and game
            mechanics.
          </p>
        </div>

        {/* AI Development */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaRobot className="text-4xl text-teal-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              AI Development
            </h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Learn Artificial Intelligence concepts like machine learning, deep
            learning, and neural networks. Build smart systems that can learn
            and adapt to their environment.
          </p>
        </div>

        {/* Cloud Computing */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaCloud className="text-4xl text-indigo-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Cloud Computing
            </h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Master cloud technologies like AWS, Azure, and Google Cloud. Learn
            to design scalable, secure, and cost-effective cloud infrastructure.
          </p>
        </div>

        {/* DevOps */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaDev className="text-4xl text-yellow-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">DevOps</h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Gain expertise in DevOps practices. Learn continuous integration,
            continuous deployment, and automation techniques for faster,
            reliable software delivery.
          </p>
        </div>

        {/* Blockchain */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaParachuteBox className="text-4xl text-pink-500 mr-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">Blockchain</h3>
          </div>
          <p className="text-base sm:text-lg font-light">
            Understand blockchain fundamentals and how to develop decentralized
            applications (dApps). Explore cryptocurrencies, smart contracts, and
            distributed ledgers.
          </p>
        </div>
      </div>
    </div>
  );
}
