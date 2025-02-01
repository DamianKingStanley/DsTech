import Image from "next/image";
import React from "react";

const JobProfile: React.FC = () => {
  const profiles = [
    {
      title: "AfroTale Writing Platform",
      description:
        "Afrotale is a platform that allows writers to publish their stories and readers to discover new content. It’s built to be user-friendly, engaging, and easy to navigate, with features like categories, search, and social sharing.",
      image: "/images/afrotales.png",
      url: "https://www.afrotale.netlify.app",
    },
    {
      title: "Mental Health ChatBot",
      description:
        "This chatbot is designed to provide mental health support and resources to students. It uses AI to understand and respond to user messages, offering advice, information, and guidance on mental health topics.",
      image: "/images/studentmentalhealth.png",
      url: "https://studentmentalhealth.netlify.app",
    },
    {
      title: "Bookshop",
      description:
        "This e-commerce website allows users to browse, search, and purchase books online. It features a user-friendly interface, secure payment options, and a wide selection of books in various genres.",
      image: "/images/ebookshop.png",
      url: "https://mouau-ebookshop.netlify.app",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        OUR JOB PROFILE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 shadow-md hover:shadow-xl rounded-lg transition duration-300 flex flex-col items-center text-center bg-white"
          >
            <div className="w-full">
              <Image
                src={profile.image}
                alt={profile.title}
                width={300}
                height={200}
                className="w-full h-40 md:h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{profile.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {profile.description}
              </p>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline text-sm"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobProfile;
