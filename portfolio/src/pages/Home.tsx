import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDotnet, SiBlazor } from "react-icons/si";
import ProfolioImage from "./../assets/MyImage.jpeg";

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-slate-400 text-lg md:text-xl font-medium mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Rezaul Karim
            </span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-8 h-20">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Full Stack Developer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build exceptional digital experiences. Currently focused on creating accessible, human-centered products using modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/project"
              className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 transform hover:-translate-y-1"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 text-lg font-medium text-blue-400 border-2 border-blue-400 rounded-full hover:bg-blue-400/10 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={ProfolioImage}
              alt="Rezaul Karim"
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center">
            <TechItem icon={<SiDotnet />} name=".NET Core" color="text-purple-400" />
            <TechItem icon={<SiBlazor />} name="Blazor" color="text-blue-400" />
            <TechItem icon={<FaReact />} name="React" color="text-cyan-400" />
            <TechItem icon={<SiTypescript />} name="TypeScript" color="text-blue-500" />
            <TechItem icon={<SiTailwindcss />} name="Tailwind" color="text-cyan-300" />
            <TechItem icon={<FaNodeJs />} name="Node.js" color="text-green-500" />
            <TechItem icon={<FaDatabase />} name="SQL" color="text-slate-300" />
            <TechItem icon={<FaCode />} name="Git" color="text-orange-500" />
          </div>
        </div>
      </section>
    </div>
  );
}

const TechItem = ({ icon, name, color }: { icon: React.ReactNode; name: string; color: string }) => (
  <div className="flex flex-col items-center group transition-transform hover:-translate-y-2 duration-300">
    <div className={`text-4xl mb-3 ${color} transition-all duration-300 group-hover:scale-110`}>
      {icon}
    </div>
    <span className="text-slate-400 font-medium">{name}</span>
  </div>
);

export default Home;

