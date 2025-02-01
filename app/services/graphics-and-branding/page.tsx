"use client";

import {
  FaPalette,
  FaPaintBrush,
  FaRocket,
  FaVectorSquare,
} from "react-icons/fa";

export default function GraphicsAndBranding() {
  return (
    <div>
      <section className="relative w-full h-[400px] bg-[url('/images/branding.avif')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-6 py-12 sm:px-10 md:px-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Brand with Powerful Graphics
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
              Let us help you shape your brand identity with custom graphics,
              unique designs, and creative branding solutions that stand out in
              today’s competitive market.
            </p>
          </div>
        </div>
      </section>

      <div className=" p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left px-4 sm:px-6 md:px-12">
        {/* Branding Strategy */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-xl">
            <FaRocket className="text-indigo-600 text-4xl" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Branding Strategy
          </h3>
          <p className="text-base sm:text-lg font-light text-white">
            Develop a unique brand voice and visual style that resonates with
            your audience. From logo creation to full brand guidelines, we
            ensure your business stands out.
          </p>
        </div>

        {/* Logo Design */}
        <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-xl">
            <FaPalette className="text-orange-600 text-4xl" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Logo Design
          </h3>
          <p className="text-base sm:text-lg font-light text-white">
            Create impactful logos that visually communicate your brand&apos;s
            essence. We offer innovative designs that make a lasting impression.
          </p>
        </div>

        {/* Custom Graphics */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-500 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-xl">
            <FaPaintBrush className="text-teal-600 text-4xl" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Custom Graphics
          </h3>
          <p className="text-base sm:text-lg font-light text-white">
            We craft custom graphics that elevate your brand’s identity. From
            banners to digital art, our designs are tailored to engage and
            inspire your audience.
          </p>
        </div>

        {/* Web and App Design */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-xl">
            <FaVectorSquare className="text-purple-600 text-4xl" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Web & App Design
          </h3>
          <p className="text-base sm:text-lg font-light text-white">
            Create user-centric designs for websites and mobile applications
            with a focus on aesthetics, usability, and functionality. We help
            bring your digital presence to life.
          </p>
        </div>

        {/* Marketing Materials */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-xl">
            <FaPalette className="text-blue-600 text-4xl" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Marketing Materials
          </h3>
          <p className="text-base sm:text-lg font-light text-white">
            From brochures to social media graphics, we provide marketing
            materials that effectively communicate your message and boost brand
            visibility.
          </p>
        </div>
      </div>
    </div>
  );
}
