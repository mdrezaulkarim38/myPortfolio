import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08111f]/78 backdrop-blur-xl shadow-[0_16px_50px_rgba(3,8,20,0.45)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={handleLinkClick}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            MRK
          </div>
          <div>
            <p className="font-['Space_Grotesk'] text-lg font-bold text-white">
              MD Rezaul Karim
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-[#9fb3c8]">
              Full-Stack Software Engineer
            </p>
          </div>
        </a>

        <div className="hidden md:block">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#c8d5e3] transition hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/MDRezaulKarim-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#f59e0b] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#fbbf24]"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:text-white"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute left-0 top-[72px] w-full border-b border-white/10 bg-[#08111f]/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="space-y-2 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={handleLinkClick}
              className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/MDRezaulKarim-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-[#f59e0b] px-4 py-3 text-base font-semibold text-[#111827]"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

