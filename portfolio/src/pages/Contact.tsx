import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import BackgroundImage from "./../assets/backgroundImage.jpg";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-20 pb-10 px-4"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`bg-white shadow-lg rounded-lg p-8 max-w-lg w-full transform transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Love to hear from you! Feel free to reach out.
        </p>

        <div className="flex flex-col space-y-4">
          {/* Email */}
          <div className="flex items-center justify-center space-x-3 md:space-x-4 flex-wrap">
            <FaEnvelope className="text-red-600 text-2xl" />
            <a
              href="mailto:mdrezaulkarim31295@gmail.com"
              className="text-lg text-gray-800 font-semibold hover:text-blue-600 transition duration-300 break-all md:break-normal"
            >
              mdrezaulkarim31295@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center space-x-3 md:space-x-4 flex-wrap">
            <FaLinkedin className="text-blue-600 text-3xl" />
            <a
              href="https://www.linkedin.com/in/supermanshuvo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 font-semibold hover:text-blue-600 transition duration-300 break-all md:break-normal"
            >
              linkedin.com/in/supermanshuvo
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-center space-x-3 md:space-x-4 flex-wrap">
            <FaGithub className="text-gray-800 text-3xl" />
            <a
              href="https://github.com/mdrezaulkarim38"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 font-semibold hover:text-blue-600 transition duration-300 break-all md:break-normal"
            >
              github.com/mdrezaulkarim38
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
