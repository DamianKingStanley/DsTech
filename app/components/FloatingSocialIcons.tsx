import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const FloatingSocialIcons = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-black p-3 rounded-full shadow-lg flex space-x-4">
      <a
        href="https://facebook.com/king.stan.01"
        target="_blank"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <FaFacebook />
      </a>
      <a
        href="https://x.com/_king_Damian?s=09"
        target="_blank"
        className="text-blue-400 hover:text-blue-600 text-2xl"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/damian-stanley-ba6aa422a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        className="text-blue-700 hover:text-blue-900 text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/quortek?igsh=YWN3aDdwOGwxYjJ1"
        target="_blank"
        className="text-pink-600 hover:text-pink-800 text-2xl"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
