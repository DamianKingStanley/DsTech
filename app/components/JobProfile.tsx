import Image from "next/image";
import React from "react";

const JobProfile: React.FC = () => {
  const profiles = [
    {
      title: "AfroTale Writing Platform",
      description:
        " Afrotale is a platform that allows writers to publish their stories and readers to discover new content. It’s built to be user-friendly, engaging, and easy to navigate, with features like categories, search, and social sharing.",
      image: "/images/afrotales.png",
      url: "https://www.afrotale.netlify.app",
    },
    {
      title: "Mental Health ChatBot",
      description:
        "This chatbot is designed to provide mental health support and resources to students. It uses AI to understand and respond to user messages, offering advice, information, and guidance on mental health topics.",
      image: "/images/studentmental.png",
      url: "https://studentmentalhealth.netlify.app",
    },
    {
      title: "Bookshop",
      description:
        "This e-commerce website allows users to browse, search, and purchase books online. It features a user-friendly interface, secure payment options, and a wide selection of books in various genres.",
      image: "/images/bookshop.png",
      url: "https://mouau-ebookshop.netlify.app",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        OUR JOB PROFILE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="p-2 border-2 shadow-lg hover:border-blue-400 box-border flex flex-col items-center text-center transition-transform transform hover:shadow-2xl rounded-lg"
          >
            <Image
              src={profile.image}
              alt={profile.title}
              width={300}
              height={300}
              className=" h-48 object-cover mb-4"
            />
            <h3 className="text-1xl font-semibold">{profile.title}</h3>
            <p className="mt-4 text-sm text-gray-600">{profile.description}</p>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-600 hover:underline text-sm"
            >
              {profile.url}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobProfile;
