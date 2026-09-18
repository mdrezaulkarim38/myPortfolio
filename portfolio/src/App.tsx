import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  FaArrowRight,
  FaBrain,
  FaCodeBranch,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaRegCircleCheck,
  FaServer,
} from "react-icons/fa6";
import { SiDocker, SiDotnet, SiGit, SiReact } from "react-icons/si";
import FormalPhoto from "./assets/rezaul-profile.jpg";
import "./Portfolio.css";

type Skill = {
  name: string;
  detail: string;
  icon: ReactNode;
};

type Project = {
  title: string;
  type: string;
  detail: string;
  link?: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

const skills: Skill[] = [
  {
    name: "C#",
    detail: "SOLID principles, clean architecture, repository pattern, and maintainable enterprise logic.",
    icon: <FaCodeBranch />,
  },
  {
    name: "ASP.NET Core",
    detail: "MVC, REST API, Web API, EF Core, Dapper — scalable ERP, CRM, and accounting systems.",
    icon: <SiDotnet />,
  },
  {
    name: "React",
    detail: "React.js, TypeScript, JavaScript, Bootstrap — dashboards, portals, and business workflows.",
    icon: <SiReact />,
  },
  {
    name: "Semantic Kernel",
    detail: "Local-LLM orchestration, ChatHistory memory, SSE streaming, and prompt engineering.",
    icon: <FaBrain />,
  },
  {
    name: "SQL Server",
    detail: "SQL Server, Oracle, SQLite, MongoDB — data modeling, reporting, reliable operations.",
    icon: <FaRegCircleCheck />,
  },
  {
    name: "Docker",
    detail: "Docker, GitHub Actions, Jenkins, IIS — consistent environments and delivery pipelines.",
    icon: <SiDocker />,
  },
  {
    name: "Resilience",
    detail: "Polly retry and circuit breaker, Serilog logging, and ASP.NET Core health checks.",
    icon: <FaBrain />,
  },
  {
    name: "Git",
    detail: "Version control, team collaboration, and clean delivery workflows.",
    icon: <SiGit />,
  },
  {
    name: "REST API",
    detail: "FluentValidation, output caching, rate limiting, and predictable API design.",
    icon: <FaServer />,
  },
];

const experiences: Experience[] = [
  {
    company: "iTech Velocity",
    role: "Software Developer",
    period: "October 2025 - Present",
    summary:
      "Developing enterprise Real Estate ERP with ASP.NET Core and SQL Server. Built scalable REST APIs, a customer feedback and self-service portal, full-stack modules end-to-end, plus query and API performance optimization with code reviews and structured testing.",
  },
  {
    company: "Synergy Interface Ltd",
    role: "Software Developer",
    period: "April 2023 - September 2025",
    summary:
      "Synergy CRM (ASP.NET Core 8 + React), Smart Life Insurance (FA/UM/BM, premium calculation, dynamic reporting), modular Accounting Software, and AccuStock inventory with double-entry accounting, chat, and email reporting.",
  },
];

const projects: Project[] = [
  {
    title: "Smart FAQ Chatbot",
    type: "AI Lab",
    detail:
      "Context-aware multi-turn FAQ chatbot — ASP.NET Core 10 Clean Architecture, Semantic Kernel, Ollama (qwen3:8b), React 19 + TS. SSE streaming, EF Core + SQLite sessions, Polly, rate limiting, Serilog.",
    link: "https://github.com/mdrezaulkarim38/smart-faq-chatbot",
  },
  {
    title: "AI Text Summarizer",
    type: "AI Lab",
    detail:
      "Full-stack summarization with sync + SSE streaming, Polly resilience, Serilog observability, FluentValidation, SHA-256 output caching, and fully local privacy-preserving architecture.",
    link: "https://github.com/mdrezaulkarim38/ai-text-summarizer",
  },
  {
    title: "AI Email Assistant API",
    type: "AI Lab",
    detail:
      "An ASP.NET Core + Ollama project for generating email drafts, tone rewrites, and reply suggestions with structured logging.",
    link: "https://github.com/mdrezaulkarim38/AiEmailAssistant",
  },
];

const businessProjects: Project[] = [
  {
    title: "Selieo — Real Estate ERP",
    type: "Business System",
    detail:
      "Complete real estate ERP — enterprise modules with scalable ASP.NET Core REST APIs, role-based workflows, reporting, and a customer feedback and self-service portal.",
    link: "https://selieo.com/",
  },
  {
    title: "ERP for SME",
    type: "Business System",
    detail:
      "A full-feature ERP with inventory, authentication, role-based access, and reporting tailored to operational workflows.",
    link: "https://shohug-enterprise.web.app/",
  },
  {
    title: "Bill Tracker",
    type: "Finance Tool",
    detail:
      "A role-based billing and payment tracking system with a clean interface and practical business usability.",
    link: "https://github.com/mdrezaulkarim38/BillTracker",
  },
];

const emailTemplates = [
  "Subject: {topic} follow-up\n\nHello,\n\nThank you for sharing the details regarding {topic}. I can help shape this into a practical solution with a clean backend structure, reliable data flow, and a frontend experience that stays easy to maintain as the product grows.\n\nBest regards,\nMD Rezaul Karim",
  "Subject: Proposal for {topic}\n\nHi,\n\nI reviewed the idea around {topic}. A strong first version would focus on a dependable API layer, clear user workflows, and scalable architecture so future features can be added without unnecessary complexity.\n\nRegards,\nMD Rezaul Karim",
];

const injectTopic = (template: string, topic: string) =>
  template.split("{topic}").join(topic);

function App() {
  const [activeSkill, setActiveSkill] = useState(skills[0].name);
  const [topic, setTopic] = useState("Client onboarding automation");
  const [consoleOutput, setConsoleOutput] = useState(
    injectTopic(emailTemplates[0], "Client onboarding automation"),
  );

  const selectedSkill = useMemo(
    () => skills.find((skill) => skill.name === activeSkill) ?? skills[0],
    [activeSkill],
  );

  const generateEmail = () => {
    const cleanTopic = topic.trim() || "your project";
    const template = emailTemplates[Math.floor(Math.random() * emailTemplates.length)];
    setConsoleOutput(injectTopic(template, cleanTopic));
  };

  return (
    <div className="page">
      <header className="site-header">
        <a href="#home" className="brand">
          <span className="brand__mark">MRK</span>
          <span className="brand__text">MD Rezaul Karim</span>
        </a>

        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#ai-work">AI Work</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-action"
          href="/MDRezaulKarim-Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero__content">
            <p className="eyebrow">Full-Stack Software Engineer — .NET · React · AI</p>
            <h1>MD Rezaul Karim builds reliable business software with .NET, React, and local-LLM AI.</h1>
            <p className="hero__lead">
              I’m MD Rezaul Karim, a full-stack developer with 3+ years of experience building ERP, CRM, accounting, and insurance systems using ASP.NET Core, C#, SQL Server, and React. I apply SOLID, Repository pattern, and clean architecture — recently extended into AI engineering with Semantic Kernel and Ollama.
            </p>

            <div className="hero__headlineCard">
              <p>Full-Stack Developer | .NET Core & React | Semantic Kernel + Ollama</p>
            </div>

            <div className="hero__actions">
              <a className="button button--dark" href="#projects">
                View Work
              </a>
              <a className="button button--light" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero__meta">
              <span><FaLocationDot /> Dhaka, Bangladesh</span>
              <span><FaEnvelope /> mdrezaulkarim31295@gmail.com</span>
              <span><FaPhone /> +8801303316865</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="portrait-card">
              <img src={FormalPhoto} alt="MD Rezaul Karim portrait" />
            </div>
            <div className="stat-card">
              <strong>3+ Years</strong>
              <span>Professional software development experience</span>
            </div>
          </div>
        </section>

        <section id="ai-work" className="section section--ai">
          <div className="section-heading">
            <p className="eyebrow">AI Work First</p>
            <h2>Local-LLM apps with production-grade .NET engineering.</h2>
          </div>

          <div className="ai-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="ai-card">
                <span className="ai-card__num">0{index + 1} — {project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View on GitHub <FaArrowRight />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Focused tools, applied in real business systems.</h2>
          </div>

          <div className="skills-layout">
            <div className="skills-grid">
              {skills.map((skill) => (
                <button
                  key={skill.name}
                  type="button"
                  className={`skill-tile ${activeSkill === skill.name ? "skill-tile--active" : ""}`}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onFocus={() => setActiveSkill(skill.name)}
                  onClick={() => setActiveSkill(skill.name)}
                >
                  <span className="skill-tile__icon">{skill.icon}</span>
                  <span className="skill-tile__name">{skill.name}</span>
                </button>
              ))}
            </div>

            <aside className="skill-panel">
              <p className="eyebrow eyebrow--small">Current Focus</p>
              <h3>{selectedSkill.name}</h3>
              <p>{selectedSkill.detail}</p>
            </aside>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">More Work</p>
            <h2>Business systems running in production.</h2>
          </div>

          <div className="project-layout">
            <div className="project-list">
              {businessProjects.map((project) => (
                <article key={project.title} className="project-card">
                  <span className="project-card__type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Explore Project <FaArrowRight />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="console-panel">
              <div className="console-panel__top">
                <p className="eyebrow eyebrow--small">AI Lab Demo</p>
                <h3>Mock API Console</h3>
              </div>

              <label className="field-label" htmlFor="topic">
                Enter a topic
              </label>
              <div className="console-panel__controls">
                <input
                  id="topic"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  placeholder="Topic for sample email generation"
                />
                <button type="button" className="button button--accent" onClick={generateEmail}>
                  Generate
                </button>
              </div>

              <pre className="console-output">{consoleOutput}</pre>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>A steady path through enterprise software delivery.</h2>
          </div>

          <div className="timeline">
            {experiences.map((item) => (
              <article key={item.company} className="timeline-card">
                <div className="timeline-card__dot" />
                <div className="timeline-card__content">
                  <p className="timeline-card__period">{item.period}</p>
                  <h3>{item.company}</h3>
                  <p className="timeline-card__role">{item.role}</p>
                  <p className="timeline-card__summary">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s talk about useful software and thoughtful systems.</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-card">
              <h3>Available for engineering roles and meaningful product work.</h3>
              <p>
                I’m especially interested in roles and projects where backend quality, scalable architecture, and practical user workflows matter.
              </p>

              <div className="contact-links">
                <a href="mailto:mdrezaulkarim31295@gmail.com"><FaEnvelope /> Email</a>
                <a href="https://github.com/mdrezaulkarim38" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                <a href="https://linkedin.com/in/mdrezaulkarim38" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
              </div>
            </div>
            <div className="contact-panel">
              <div className="contact-item">
                <span className="contact-item__label">Email</span>
                <a href="mailto:mdrezaulkarim31295@gmail.com">mdrezaulkarim31295@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-item__label">Phone</span>
                <a href="tel:+8801303316865">+8801303316865</a>
              </div>
              <div className="contact-item">
                <span className="contact-item__label">Location</span>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="contact-item">
                <span className="contact-item__label">LinkedIn</span>
                <a href="https://linkedin.com/in/mdrezaulkarim38" target="_blank" rel="noreferrer">
                  linkedin.com/in/mdrezaulkarim38
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
