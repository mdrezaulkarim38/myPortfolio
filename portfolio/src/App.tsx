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
import { SiDocker, SiDotnet, SiGit, SiReact, SiRedis } from "react-icons/si";
import FormalPhoto from "./assets/rezaul-formal.png";
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
    detail: "Strong business logic, modular code, and maintainable backend workflows.",
    icon: <FaCodeBranch />,
  },
  {
    name: ".NET Core",
    detail: "REST APIs, ERP modules, reporting systems, and production-grade services.",
    icon: <SiDotnet />,
  },
  {
    name: "React",
    detail: "Clean user interfaces for dashboards, admin tools, and business workflows.",
    icon: <SiReact />,
  },
  {
    name: "Redis",
    detail: "Useful for caching, faster data access, and improving performance in scalable systems.",
    icon: <SiRedis />,
  },
  {
    name: "SQL Server",
    detail: "Structured data design, reporting, and reliable business operations.",
    icon: <FaRegCircleCheck />,
  },
  {
    name: "Docker",
    detail: "Consistent development environments and smoother deployment pipelines.",
    icon: <SiDocker />,
  },
  {
    name: "Hangfire",
    detail: "Background jobs, automation tasks, and dependable scheduled processing.",
    icon: <FaBrain />,
  },
  {
    name: "Git",
    detail: "Version control, team collaboration, and clean delivery workflows.",
    icon: <SiGit />,
  },
  {
    name: "REST API",
    detail: "Designing predictable, maintainable APIs for frontend, integration, and business services.",
    icon: <FaServer />,
  },
];

const experiences: Experience[] = [
  {
    company: "iTech Velocity",
    role: "Software Developer",
    period: "October 2025 - Present",
    summary:
      "Working on real estate ERP systems with ASP.NET Core, scalable APIs, frontend modules, and performance-focused improvements across full-stack business features.",
  },
  {
    company: "Synergy Interface Ltd",
    role: "Software Developer",
    period: "April 2023 - September 2025",
    summary:
      "Built and maintained CRM, insurance, accounting, and inventory systems using ASP.NET Core, React, and SQL Server with strong emphasis on business workflows and reporting.",
  },
];

const projects: Project[] = [
  {
    title: "AI Email Assistant API",
    type: "AI Lab",
    detail:
      "An ASP.NET Core + Ollama project for generating email drafts, tone rewrites, and reply suggestions with structured logging.",
    link: "https://github.com/mdrezaulkarim38/AiEmailAssistant",
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
            <p className="eyebrow">Full-Stack Software Engineer</p>
            <h1>MD Rezaul Karim builds reliable business software with .NET, React, and practical AI exploration.</h1>
            <p className="hero__lead">
              I’m MD Rezaul Karim, a full-stack developer with 3+ years of experience building ERP, CRM, accounting, and insurance systems using .NET Core, React, and SQL Server while exploring AI and LLM integrations in practical product workflows.
            </p>

            <div className="hero__headlineCard">
              <p>Full-Stack Developer | .NET Core & React | Exploring AI/LLM</p>
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
            <p className="eyebrow">Beta Projects</p>
            <h2>AI experiments and product-minded engineering.</h2>
          </div>

          <div className="project-layout">
            <div className="project-list">
              {projects.map((project) => (
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
                <p>Rampura, Dhaka-1219, Bangladesh</p>
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
