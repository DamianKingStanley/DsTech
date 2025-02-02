import React from "react";
import {
  FaLightbulb,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

const CoreValues: React.FC = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "We value creativity, originality, and forward-thinking. We encourage our team to be bold in their ideas, take risks, and strive for excellence in all aspects of our work.",
      icon: (
        <FaLightbulb className="w-12 h-12 text-blue-400 mb-4 transition-transform transform hover:rotate-12 hover:scale-110" />
      ),
    },
    {
      title: "Integrity",
      description:
        "We believe in honesty, transparency, and ethical behavior in all of our dealings. We hold ourselves to the highest standards of professionalism and work to earn the trust of our clients and partners.",
      icon: (
        <FaShieldAlt className="w-12 h-12 text-blue-400 mb-4 transition-transform transform hover:rotate-12 hover:scale-110" />
      ),
    },
    {
      title: "Excellence",
      description:
        "We are committed to understanding and meeting the needs of our customers. We listen to their feedback, anticipate their requirements, and strive to exceed their expectations.",
      icon: (
        <FaStar className="w-12 h-12 text-blue-400 mb-4 transition-transform transform hover:rotate-12 hover:scale-110" />
      ),
    },
    {
      title: "Collaboration",
      description:
        "We believe in a safe workspace encompassing teamwork, respect and communication.",
      icon: (
        <FaUsers className="w-12 h-12 text-blue-400 mb-4 transition-transform transform hover:rotate-12 hover:scale-110" />
      ),
    },
    {
      title: "Empathy",
      description:
        "We are committed to understanding and meeting the needs of our customers. We listen to their feedback, anticipate their requirements, and strive to exceed their expectations.",
      icon: (
        <FaHandsHelping className="w-12 h-12 text-blue-400 mb-4 transition-transform transform hover:rotate-12 hover:scale-110" />
      ),
    },
    {
      title: "Global Impact",
      description:
        "We are committed to continuous learning and growth. We seek out opportunities to develop our skills, knowledge, and expertise, and we strive to improve our processes and performance over time.",
      icon: (
        <FaGlobe className="w-12 h-12 text-blue-400 mb-4 transition-transform transform hover:rotate-12 hover:scale-110" />
      ),
    },
  ];

  return (
    <section className="py-16 bg-white text-black">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        OUR VALUES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 px-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-6 hover:border-2  hover:border-blue-400 box-border flex flex-col items-center text-center transition-transform transform  hover:shadow-1xl"
          >
            {value.icon}
            <h3 className="text-2xl  ">{value.title}</h3>
            <p className="mt-4 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
