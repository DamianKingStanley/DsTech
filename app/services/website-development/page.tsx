"use client";

import Image from "next/image";

export default function WebsiteDevelopment() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/website-development.png"
          alt="Website Development"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 bg-black bg-opacity-40 p-10">
          <h1 className="text-4xl font-bold mb-2">Website Development</h1>
          <p className="text-lg">
            We build user-friendly, responsive, and visually stunning websites.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2x1 md:text-3x1 font-semibold mb-6">
            How We Develop Websites
          </h2>
          <p className="text-sm md:text-lg mb-12">
            At DS Tech, we specialize in creating tailored websites that help
            your business thrive online. Our websites are not only visually
            appealing but also functional, fast, and optimized for SEO.
          </p>

          {/* Development Process */}
          <h3 className="text-2xl md:text-3x1 font-semibold mb-6">
            Our Development Process
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Step 1: Discovery */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">1. Discovery</h4>
              <p className="text-sm">
                We start by understanding your business goals and audience,
                gathering all necessary information to create a website that
                aligns with your vision and objectives. This stage helps us
                define the scope and functionalities of your website.
              </p>
            </div>

            {/* Step 2: Design */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">2. Design</h4>
              <p className="text-sm">
                Our design team brings your brand to life with a modern,
                responsive design. We focus on an intuitive user interface (UI)
                and user experience (UX), ensuring seamless navigation across
                devices.
              </p>
            </div>

            {/* Step 3: Development */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">3. Development</h4>
              <p className="text-sm">
                Using the latest technologies, we build your website using
                clean, optimized code. We use a mix of frontend (HTML5, CSS3,
                JavaScript) and backend (Node.js, PHP, etc.) technologies to
                ensure your site is fast, secure, and scalable.
              </p>
            </div>

            {/* Step 4: Testing */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">4. Testing</h4>
              <p className="text-sm">
                We rigorously test your website on multiple devices, screen
                sizes, and browsers to ensure it&apos;s fully responsive and
                bug-free. Our quality assurance (QA) team verifies performance,
                usability, and compatibility.
              </p>
            </div>

            {/* Step 5: Launch */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">5. Launch</h4>
              <p className="text-sm">
                Once everything is polished, we launch your website live. Our
                team handles the entire deployment process, ensuring your site
                is live, fast, and secure.
              </p>
            </div>

            {/* Step 6: Post-Launch Support */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">
                6. Post-Launch Support
              </h4>
              <p className="text-sm">
                Our commitment doesn’t end at launch. We offer ongoing support,
                making updates, improvements, and optimizations to keep your
                website running smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2x1 md:text-3x1 font-semibold mb-6">
              Why Choose DS Tech for Website Development?
            </h2>
            <p className="text-lg mb-8">
              We don&apos;t just build websites; we craft online experiences
              that help your business grow. Here&apos;s why DS Tech is the right
              choice for your next project:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-laptop-code text-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Custom Solutions</h3>
                  <p className="text-sm">
                    We create websites tailored to your specific needs, from
                    simple landing pages to complex web applications, ensuring
                    your business stands out.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-mobile-alt text-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Responsive Design</h3>
                  <p className="text-sm">
                    All our websites are designed to be fully responsive,
                    offering a seamless user experience across all devices, from
                    desktops to smartphones.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-search text-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">SEO Optimization</h3>
                  <p className="text-sm">
                    Our team ensures your website is optimized for search
                    engines, helping you increase visibility and attract more
                    traffic from Google and other search engines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
