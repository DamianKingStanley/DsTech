"use client";
import Image from "next/image";

export default function AndroidAndIosDevelopment() {
  return (
    <div>
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/mobile-app-development.png"
          alt="App Development"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 bg-black bg-opacity-40 p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Android & iOS App Development
          </h1>
          <p className="text-lg">
            We craft seamless, high-quality apps that bring your ideas to life.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2x1 md:text-3x1 font-semibold mb-6">
            How We Develop Android & iOS Apps
          </h2>
          <p className="text-sm md:text-lg mb-12">
            At DS Tech, we specialize in developing intuitive and responsive
            Android and iOS applications that deliver exceptional user
            experiences. Whether you are looking to build a custom app for your
            business or streamline your existing solutions, our team is here to
            help you every step of the way.
          </p>

          {/* Development Process */}
          <h3 className="text-2x1 md:text-3x1 font-semibold mb-6">
            Our Development Process
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Step 1: Discovery */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">1. Discovery</h4>
              <p className="text-sm">
                We begin by thoroughly understanding your business goals, target
                audience, and the features you want to incorporate in your app.
                This is a collaborative phase where we define the scope,
                functionalities, and user experience.
              </p>
            </div>

            {/* Step 2: Design */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">2. Design</h4>
              <p className="text-sm">
                Our design team crafts a visually appealing, user-friendly UI/UX
                for your app. We focus on smooth navigation, intuitive controls,
                and an engaging user interface that aligns with your brand
                identity.
              </p>
            </div>

            {/* Step 3: Development */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">3. Development</h4>
              <p className="text-sm">
                We use the latest technologies and frameworks to build the app.
                For Android and for iOS, we work with React Native. Our team
                ensures that the code is clean, scalable, and optimized for high
                performance.
              </p>
            </div>

            {/* Step 4: Testing */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">4. Testing</h4>
              <p className="text-sm">
                We conduct rigorous testing to ensure that the app works
                seamlessly across various devices and screen sizes. Our QA team
                identifies and fixes any bugs, ensuring a flawless user
                experience.
              </p>
            </div>

            {/* Step 5: Deployment */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">5. Deployment</h4>
              <p className="text-sm">
                After testing, we launch the app on the Google Play Store and
                Apple App Store. Our team handles the submission process,
                ensuring all guidelines are met, and your app is successfully
                published for users to download.
              </p>
            </div>

            {/* Step 6: Post-Launch Support */}
            <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">
                6. Post-Launch Support
              </h4>
              <p className="text-sm">
                Our support doesn&apos;t end at launch. We offer post-launch
                services, including updates, bug fixes, and new feature
                additions, to keep your app running smoothly and up-to-date.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2x1 md:text-3x1 font-semibold mb-6">
              Why Choose DS Tech for App Development?
            </h2>
            <p className="text-sm mb-8">
              At DS Tech, we go beyond just building apps. We create experiences
              that leave a lasting impression on your users. Here&apos;s why you
              should choose us for your Android and iOS app development needs:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-cogs text-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Latest Technology</h3>
                  <p className="text-gray-600">
                    We use the latest frameworks and technologies to build
                    modern and scalable apps. You can count on us for top-notch
                    development practices.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-mobile-alt text-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Cross-Platform Solutions</h3>
                  <p className="text-gray-600">
                    We provide both Android and iOS development, ensuring your
                    app reaches the broadest audience across multiple devices.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-headset text-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Dedicated Support</h3>
                  <p className="text-gray-600">
                    Our team is always available to provide support and
                    assistance even after the app is launched, ensuring it
                    continues to perform well.
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
