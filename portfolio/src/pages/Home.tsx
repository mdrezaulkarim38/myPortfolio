import type { ReactNode } from "react";
import {
  FaArrowRight,
  FaBrain,
  FaCodeBranch,
  FaEnvelope,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
  FaServer,
} from "react-icons/fa";
import { SiLeetcode, SiPostgresql, SiReact, SiSharp } from "react-icons/si";
import FormalPhoto from "../assets/rezaul-formal.png";
import CasualPhoto from "../assets/rezaul-casual.jpg";
import AmarPolicyImage from "../assets/AmarPolicy.png";
import SmartLifeImage from "../assets/smart-life-insurance.png";

const metrics = [
  { value: "3+", label: "Years of professional development" },
  { value: "4", label: "Enterprise domains shipped in production" },
  { value: "10+", label: "Core backend and frontend tools used" },
];

const expertise = [
  {
    title: "Backend Engineering",
    icon: <FaServer />,
    items: ["ASP.NET Core", "C#", "REST API design", "Entity Framework Core", "Dapper"],
  },
  {
    title: "Frontend Delivery",
    icon: <SiReact />,
    items: ["React", "JavaScript", "HTML5", "CSS", "Bootstrap"],
  },
  {
    title: "Data & Infrastructure",
    icon: <SiPostgresql />,
    items: ["SQL Server", "PostgreSQL", "Oracle", "MongoDB", "Docker"],
  },
  {
    title: "AI Exploration",
    icon: <FaBrain />,
    items: ["Ollama", "AI email drafting", "Tone rewriting", "LLM request logging"],
  },
];

const experience = [
  {
    company: "iTech Velocity",
    role: "Software Developer",
    period: "October 2025 - Present",
    focus: "Real estate ERP",
    summary:
      "Developing and maintaining enterprise ERP modules with ASP.NET Core, scalable backend APIs, frontend components, and performance-focused improvements.",
  },
  {
    company: "Synergy Interface Ltd.",
    role: "Software Developer",
    period: "April 2023 - September 2025",
    focus: "CRM, insurance, accounting, inventory",
    summary:
      "Built role-based business software across CRM, Smart Life Insurance, accounting, and AccuStock with reporting, workflows, and business automation.",
  },
];

const projects = [
  {
    title: "Synergy CRM",
    description:
      "A role-based CRM built with ASP.NET Core 8, SQL Server, and React.js for tasks, candidate workflows, meetings, and team collaboration.",
    tags: ["ASP.NET Core 8", "SQL Server", "React.js"],
    accent: "from-sky-400/30 to-cyan-400/10",
  },
  {
    title: "Smart Life Insurance",
    description:
      "Maintained FA, UM, BM, and customer policy modules, premium calculation logic, and dynamic reporting for a production insurance platform.",
    tags: ["Insurance Domain", "Reporting", "Business Logic"],
    image: SmartLifeImage,
  },
  {
    title: "AI Email Assistant API",
    description:
      "Built an AI-powered email generation API using ASP.NET Core and Ollama with draft generation, tone rewriting, reply suggestions, and file-based logging.",
    tags: ["ASP.NET Core", "Ollama", "AI Integration"],
    link: "https://github.com/mdrezaulkarim38/AiEmailAssistant",
    accent: "from-amber-400/30 to-orange-400/10",
  },
  {
    title: "ERP for SME",
    description:
      "A full-feature ERP system with inventory, reporting, authentication, role-based access, and business workflows for small and medium enterprises.",
    tags: ["ERP", "Inventory", "Reporting"],
    link: "https://shohug-enterprise.web.app/",
    accent: "from-emerald-400/30 to-teal-400/10",
  },
  {
    title: "Bill Tracker",
    description:
      "A clean, role-based billing system focused on payment tracking and usability for real business processes.",
    tags: ["Billing", "Role-Based Access", "UI"],
    link: "https://github.com/mdrezaulkarim38/BillTracker",
    accent: "from-fuchsia-400/25 to-pink-400/10",
  },
  {
    title: "Amar Policy",
    description:
      "An AI-powered insurance policy management system for administrators and end users with modern operational workflows.",
    tags: ["AI", "Insurance", "Web API"],
    image: AmarPolicyImage,
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "mdrezaulkarim31295@gmail.com",
    href: "mailto:mdrezaulkarim31295@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "+8801303316865",
    href: "tel:+8801303316865",
    icon: <FaPhoneAlt />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mdrezaulkarim38",
    href: "https://linkedin.com/in/mdrezaulkarim38",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    value: "github.com/mdrezaulkarim38",
    href: "https://github.com/mdrezaulkarim38",
    icon: <FaGithub />,
  },
];

function Home() {
  return (
    <main id="top" className="relative overflow-hidden bg-[#050b15] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-[#0ea5e9]/18 blur-3xl" />
        <div className="absolute right-[-10%] top-24 h-[28rem] w-[28rem] rounded-full bg-[#f59e0b]/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#22c55e]/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#9fdcff]">
              Full-Stack Software Engineer
            </span>
            <h1 className="mt-6 max-w-4xl font-['Space_Grotesk'] text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Building enterprise software with clean architecture, sharp UI, and practical AI integration.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b4c3d3] sm:text-xl">
              I’m MD Rezaul Karim, a Dhaka-based engineer with 3+ years of experience shipping ERP, CRM, accounting, and insurance systems using ASP.NET Core, React, SQL Server, and modern backend practices.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f59e0b] px-7 py-4 text-base font-semibold text-[#111827] transition hover:translate-y-[-2px] hover:bg-[#fbbf24]"
              >
                Explore Projects
                <FaArrowRight />
              </a>
              <a
                href="/MDRezaulKarim-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[28px] border border-white/10 bg-white/6 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur"
                >
                  <p className="font-['Space_Grotesk'] text-3xl font-bold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#9fb3c8]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full border border-[#7dd3fc]/30 bg-[#0ea5e9]/16 blur-xl" />
            <div className="hero-panel relative overflow-hidden rounded-[36px] border border-white/10 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-x-5 top-5 flex justify-between text-[11px] uppercase tracking-[0.3em] text-[#9fb3c8]">
                <span>Available For Impactful Teams</span>
                <span>Dhaka</span>
              </div>
              <img
                src={FormalPhoto}
                alt="MD Rezaul Karim portrait"
                className="h-[32rem] w-full rounded-[28px] object-cover object-top"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-[28px] border border-white/12 bg-[#07101d]/78 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-['Space_Grotesk'] text-2xl font-bold text-white">MD Rezaul Karim</p>
                    <p className="mt-1 text-sm text-[#adc0d2]">
                      ERP, CRM, accounting systems, and backend-first product engineering
                    </p>
                  </div>
                  <div className="hidden rounded-2xl border border-[#7dd3fc]/25 bg-[#0ea5e9]/10 px-4 py-3 text-right md:block">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#89d7ff]">Primary Stack</p>
                    <p className="mt-1 text-sm font-semibold text-white">ASP.NET Core + React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card overflow-hidden p-5">
            <img
              src={CasualPhoto}
              alt="MD Rezaul Karim"
              className="h-full min-h-[22rem] w-full rounded-[28px] object-cover"
            />
          </div>
          <div className="section-card p-8 sm:p-10">
            <span className="section-kicker">About Me</span>
            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold text-white sm:text-4xl">
              Backend-focused, product-aware, and comfortable across the full stack.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#b5c3d1]">
              I build business software that solves real operational problems. My work covers architecture, APIs, data modeling, role-based workflows, reporting, and frontend delivery. I care about maintainable code, reliable systems, and shipping features that actually help teams work faster.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#b5c3d1]">
              Recently, I’ve also been exploring AI and LLM integration in backend systems, especially where automation can improve communication, content generation, and internal productivity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoPill icon={<SiSharp />} label="Core Backend" value="C#, ASP.NET Core, REST API" />
              <InfoPill icon={<SiReact />} label="Frontend" value="React.js, JavaScript, CSS" />
              <InfoPill icon={<FaCodeBranch />} label="Workflow" value="Agile, GitHub Actions, Jenkins" />
              <InfoPill icon={<FaLaptopCode />} label="Mindset" value="Clean code, business logic, performance" />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker">Experience</span>
            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold text-white sm:text-4xl">
              Shipping enterprise systems for finance, operations, and real estate.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#9fb3c8]">
            My recent work has focused on scalable business applications where data accuracy, workflow clarity, and reporting quality really matter.
          </p>
        </div>

        <div className="grid gap-6">
          {experience.map((item) => (
            <article key={item.company} className="section-card p-7 sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[#7dd3fc]">{item.focus}</p>
                  <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-bold text-white">{item.company}</h3>
                  <p className="mt-2 text-lg font-semibold text-[#f8fafc]">{item.role}</p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-[#d3deea]">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 max-w-4xl text-base leading-8 text-[#afc1d2]">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="section-kicker">Skills</span>
          <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold text-white sm:text-4xl">
            The stack I use to build dependable software.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((group) => (
            <article key={group.title} className="section-card p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-xl text-[#7dd3fc]">
                  {group.icon}
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-[#d5e1ec]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker">Selected Work</span>
            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold text-white sm:text-4xl">
              Projects that blend business logic, user workflows, and engineering depth.
            </h2>
          </div>
          <a
            href="https://github.com/mdrezaulkarim38"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7dd3fc] transition hover:text-white"
          >
            View more on GitHub
            <FaArrowRight />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#09111d]/92 shadow-[0_24px_90px_rgba(0,0,0,0.22)]"
            >
              {project.image ? (
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06101b] via-[#06101b]/30 to-transparent" />
                </div>
              ) : (
                <div className={`h-52 bg-gradient-to-br ${project.accent} p-6`}>
                  <div className="flex h-full items-end">
                    <p className="max-w-[16rem] font-['Space_Grotesk'] text-3xl font-bold text-white">
                      {project.title}
                    </p>
                  </div>
                </div>
              )}

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">{project.title}</h3>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#7dd3fc] transition hover:bg-white/10 hover:text-white"
                      aria-label={`Open ${project.title}`}
                    >
                      <FaArrowRight />
                    </a>
                  ) : null}
                </div>
                <p className="mt-4 text-base leading-7 text-[#afc1d2]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9e7f2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="section-card p-8 sm:p-10">
            <span className="section-kicker">Education</span>
            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold text-white">
              Strong academic foundation with continuous self-learning.
            </h2>
            <div className="mt-8 space-y-6">
              <EducationItem
                degree="Bachelor of Science in Computer Science and Engineering"
                school="Southeast University, Dhaka"
                period="January 2022 - June 2026"
              />
              <EducationItem
                degree="Diploma in Computer Science and Engineering"
                school="Mir Samsul Islam Polytechnic Institute, Chuadanga"
                period="June 2016 - May 2021"
              />
            </div>
          </article>

          <article className="section-card p-8 sm:p-10">
            <span className="section-kicker">Problem Solving</span>
            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold text-white">
              Practicing algorithmic thinking beyond day-to-day product work.
            </h2>
            <div className="mt-8 space-y-4">
              <ExternalCard
                icon={<SiLeetcode />}
                title="LeetCode"
                href="https://leetcode.com/supermanshuvo/"
                value="leetcode.com/supermanshuvo"
              />
              <ExternalCard
                icon={<FaLocationArrow />}
                title="StopStalk"
                href="https://www.stopstalk.com/user/profile/supermanshuvo"
                value="stopstalk.com/user/profile/supermanshuvo"
              />
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-12 pb-24 sm:px-6 lg:px-8">
        <div className="section-card p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <span className="section-kicker">Contact</span>
              <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold text-white sm:text-4xl">
                Let’s build useful software that solves meaningful business problems.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b4c3d3]">
                I’m open to software engineering opportunities, backend-heavy product work, and teams building reliable enterprise systems with modern web technologies.
              </p>
            </div>

            <div className="grid gap-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 transition hover:border-white/20 hover:bg-white/8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#7dd3fc]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[#8ea6bc]">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoPill({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3 text-[#7dd3fc]">
        {icon}
        <span className="text-sm uppercase tracking-[0.18em] text-[#8ea7bd]">{label}</span>
      </div>
      <p className="mt-3 text-base font-semibold text-white">{value}</p>
    </div>
  );
}

function EducationItem({
  degree,
  school,
  period,
}: {
  degree: string;
  school: string;
  period: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
      <p className="text-sm uppercase tracking-[0.22em] text-[#8ea6bc]">{period}</p>
      <h3 className="mt-3 font-['Space_Grotesk'] text-xl font-bold text-white">{degree}</h3>
      <p className="mt-2 text-base text-[#b2c2d0]">{school}</p>
    </div>
  );
}

function ExternalCard({
  icon,
  title,
  href,
  value,
}: {
  icon: ReactNode;
  title: string;
  href: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-lg text-[#7dd3fc]">
        {icon}
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-[#8ea6bc]">{title}</p>
        <p className="mt-1 text-base font-semibold text-white">{value}</p>
      </div>
    </a>
  );
}

export default Home;
