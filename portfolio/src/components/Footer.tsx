import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Rezaul Karim
          </span>
          <p className="text-sm text-slate-400 mt-1">
            Building digital experiences that matter.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/mdrezaulkarim38"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/supermanshuvo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/supermanshuvo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Rezaul Karim. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

