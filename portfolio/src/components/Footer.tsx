import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050b15] py-8 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <span className="font-['Space_Grotesk'] text-lg font-bold text-white">
            MD Rezaul Karim
          </span>
          <p className="mt-1 max-w-xl text-sm text-[#8fa3b8]">
            Building scalable ERP, CRM, accounting, and AI-assisted products with clean architecture and practical business focus.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/mdrezaulkarim38"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/mdrezaulkarim38"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-[#7dd3fc]"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/supermanshuvo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-[#f59e0b]"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} MD Rezaul Karim. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

