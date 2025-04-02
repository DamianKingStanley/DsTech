import { FaWhatsapp } from "react-icons/fa";

const FloatingPhoneButton = () => {
  return (
    <a
      href="https://wa.me/+2349159822561"
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center">
        <FaWhatsapp className="text-2xl" />
      </div>
    </a>
  );
};

export default FloatingPhoneButton;
