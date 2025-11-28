import { FaDatabase, FaServer, FaTools, FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiDocker,
  SiPostman,
  SiGit,
  SiMysql,
  SiOracle,
} from "react-icons/si";

function About() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 text-left">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Hi, I'm <span className="text-blue-400 font-semibold">MD Rezaul Karim</span>.
              I'm a <span className="text-blue-400 font-semibold">Full Stack Developer</span> and <span className="text-blue-400 font-semibold">Competitive Programmer</span> with a passion for building efficient and scalable software solutions.
            </p>
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaBriefcase className="text-blue-400" /> Work Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>

            {/* Current Position */}
            <TimelineItem
              company="iTech Velocity"
              position="SOFTWARE DEVELOPER"
              location="Dhaka, Bangladesh"
              period="October 2025 - Present"
              description="Focusing on ERP Systems development and implementation."
              isActive={true}
            />

            {/* Previous Position */}
            <TimelineItem
              company="Synergy Interface Ltd."
              position="SOFTWARE DEVELOPER"
              location="Dhaka, Bangladesh"
              period="April 2023 - September 2025"
              description="Specialized in Accounting System and Inventory Management System development."
              isActive={false}
            />
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-blue-400" /> Education
          </h3>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-blue-400 text-xl flex-shrink-0">
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white mb-2">Southeast University</h4>
                <p className="text-slate-400 mb-2">Focusing on Data Structures and Competitive Programming</p>
                <p className="text-sm text-slate-500">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaTools className="text-blue-400" /> Technical Arsenal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              icon={<FaServer className="text-blue-400" />}
              title="Backend"
              skills="C#, .NET Framework, ASP.NET Core (MVC, API), Node.js, Express.js, LINQ"
            />
            <SkillCard
              icon={<SiReact className="text-cyan-400" />}
              title="Frontend"
              skills="JavaScript, TypeScript, React.js, Blazor, HTML5, CSS, Bootstrap, Tailwind CSS"
            />
            <SkillCard
              icon={<FaDatabase className="text-green-400" />}
              title="Database"
              skills="SQL Server, MongoDB, Oracle, SQLite"
            />
            <SkillCard
              icon={<FaCode className="text-purple-400" />}
              title="Tools & ORM"
              skills="Git, Docker, Postman, IIS Server, Entity Framework Core, Dapper"
            />
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaCode className="text-blue-400" /> Personal Projects
          </h3>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <ul className="space-y-4">
              <ProjectLink
                href="https://shohug-enterprise.web.app/"
                name="Shop ERP"
                desc="A comprehensive inventory management system."
              />
              <ProjectLink
                href="https://github.com/mdrezaulkarim38/Daily-Deep/"
                name="Daily Deep"
                desc="Accounting system for single users."
              />
              <ProjectLink
                href="https://github.com/mdrezaulkarim38/BillTracker"
                name="Bill Tracker"
                desc="A system for managing and tracking payments."
              />
              <ProjectLink
                href="https://github.com/mdrezaulkarim38/LibraryManagementSystem"
                name="Library Management System"
                desc="A complete book management system with user controls."
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const TimelineItem = ({
  company,
  position,
  location,
  period,
  description,
  isActive
}: {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  isActive: boolean;
}) => (
  <div className="relative pl-20 pb-12 last:pb-0">
    {/* Timeline Dot */}
    <div className={`absolute left-6 w-5 h-5 rounded-full border-4 ${isActive ? 'bg-blue-500 border-blue-400' : 'bg-slate-700 border-slate-600'
      }`}></div>

    {/* Content Card */}
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
      <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
        <h4 className="text-xl font-bold text-white">{company}</h4>
        {isActive && (
          <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
            Current
          </span>
        )}
      </div>
      <p className="text-blue-400 font-semibold mb-2">{position}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-400 mb-3">
        <span>{location}</span>
        <span className="hidden sm:inline">•</span>
        <span>{period}</span>
      </div>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string }) => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
    <div className="flex items-center gap-3 mb-3">
      <div className="text-2xl">{icon}</div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
    </div>
    <p className="text-slate-400 leading-relaxed">{skills}</p>
  </div>
);

const ProjectLink = ({ href, name, desc }: { href: string, name: string, desc: string }) => (
  <li className="flex items-start gap-3 group">
    <span className="text-green-400 mt-1">➜</span>
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors inline-flex items-center gap-2"
      >
        {name}
      </a>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </li>
);

export default About;
