import { motion } from "framer-motion";

const navigation = [
  { label: "Featured", href: "#featured" },
  { label: "Systems", href: "#systems" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const dashboardStatuses = [
  { label: "Kubernetes", value: "Active", tone: "status-active" },
  { label: "CI/CD", value: "Running", tone: "status-running" },
  { label: "Infrastructure", value: "Healthy", tone: "status-healthy" },
];

const pipelineFlow = [
  "Git push",
  "GitHub Actions",
  "Docker image",
  "Helm release",
  "ArgoCD sync",
  "k3s deployment",
];

const infrastructureModules = [
  "Terraform",
  "AWS EC2",
  "Networking",
  "Docker",
  "k3s",
  "Traefik",
];

const skillGroups = [
  {
    icon: "CL",
    title: "Cloud & Infrastructure",
    items: ["AWS", "Terraform", "Linux"],
  },
  {
    icon: "KO",
    title: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Helm", "Traefik"],
  },
  {
    icon: "CA",
    title: "CI/CD & Automation",
    items: ["GitHub Actions", "CI/CD", "GitOps", "ArgoCD"],
  },
  {
    icon: "DV",
    title: "Development",
    items: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "React Native",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    icon: "DT",
    title: "Databases & Tools",
    items: ["MongoDB", "MySQL", "Git", "Postman", "VS Code", "Figma"],
  },
];

const terminalLines = [
  { command: "sumeet@devops:~$ git push", output: "CI pipeline triggered" },
  { command: "sumeet@devops:~$ docker build", output: "image created" },
  { command: "sumeet@devops:~$ kubectl apply", output: "deployment updated" },
  { command: "sumeet@devops:~$ argocd sync", output: "application synced" },
];

const additionalProjects = [
  {
    title: "Linktree Clone",
    stack: ["Next.js", "Tailwind CSS"],
    summary:
      "Responsive profile link hub built with a clean interface and mobile-friendly layout.",
  },
  {
    title: "Task Manager Mobile App",
    stack: ["React Native"],
    summary:
      "Mobile task management app focused on a straightforward, app-first experience.",
  },
];

const experience = [
  {
    period: "Nov 2025 - Jan 2026",
    title: "Web Developer Intern",
    organization: "Unicap Corporate Services Pvt. Ltd.",
    location: "Navi Mumbai",
    details: [
      "Developed and maintained web applications with a focus on performance and usability.",
      "Diagnosed and resolved production-level issues, improving system stability.",
      "Assisted in deployment workflows and environment configuration.",
    ],
  },
  {
    period: "2022 - 2025",
    title: "Bachelor of Computer Application",
    organization: "Chhatrapati Shivaji Maharaj University",
    location: "",
    details: [],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-heading"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <div className="background-layer" aria-hidden="true">
        <div className="background-glow glow-left" />
        <div className="background-glow glow-right" />
        <div className="background-grid" />
      </div>

      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-dot" />
          <div>
            <p className="brand-name">Sumeet Chauhan</p>
            <p className="brand-role">Web Developer / DevOps Engineer</p>
          </div>
        </div>

        <nav className="topnav">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-content">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-panel panel"
        >
          <div className="hero-copy">
            <div className="hero-chip">
              <span className="hero-chip-dot" />
              Chembur, Mumbai
            </div>
            <h1>Sumeet Chauhan</h1>
            <p className="hero-role">
              DevOps Engineer | Cloud & Kubernetes Enthusiast
            </p>
            <p className="hero-summary">
              DevOps-focused engineer experienced in building end-to-end cloud
              deployment systems using Terraform, Docker, Kubernetes, and GitOps
              workflows. Designed and deployed a fully automated platform that
              takes applications from Git push to production using CI/CD
              pipelines, Helm, and ArgoCD. Strong focus on infrastructure
              automation, scalability, and real-world debugging in production
              environments.
            </p>
            <div className="hero-actions">
              <a
                href="https://github.com/Sumeet0P"
                target="_blank"
                rel="noopener noreferrer"
                className="action-button action-button-muted"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sumeetchauhan37"
                target="_blank"
                rel="noopener noreferrer"
                className="action-button action-button-muted"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                className="action-button action-button-primary"
              >
                Contact
              </a>
              <a
                href="./img/resume.pdf"
                download
                className="action-button action-button-primary"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-surface">
            <div className="surface-header">
              <p>Engineering System View</p>
              <span>Production-minded</span>
            </div>
            <div className="surface-grid">
              <div className="surface-card">
                <span>Infrastructure</span>
                <strong>Terraform + AWS EC2</strong>
              </div>
              <div className="surface-card">
                <span>Containers</span>
                <strong>Docker + Kubernetes</strong>
              </div>
              <div className="surface-card">
                <span>Delivery</span>
                <strong>GitHub Actions + ArgoCD</strong>
              </div>
              <div className="surface-card">
                <span>Ingress</span>
                <strong>Traefik + Helm</strong>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="bento-grid">
          <motion.article
            id="featured"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="panel featured-panel"
          >
            <SectionHeading
              eyebrow="Featured Project"
              title="Cloud-Native GitOps Deployment Platform"
              description="A case-study style build focused on making deployments repeatable, infrastructure automated, and application delivery easier to manage."
            />

            <div className="case-study-grid">
              <div className="case-block">
                <p className="case-label">Problem</p>
                <p>
                  Deployment work needed a more structured system across
                  infrastructure provisioning, application packaging, and
                  Kubernetes-based delivery.
                </p>
              </div>
              <div className="case-block">
                <p className="case-label">Solution</p>
                <p>
                  Designed a GitOps-based deployment system that combined
                  Terraform automation, Docker-based containerization,
                  Helm-managed releases, and ArgoCD syncing.
                </p>
              </div>
              <div className="case-block">
                <p className="case-label">Stack</p>
                <p>
                  Terraform, AWS EC2, Docker, Kubernetes (k3s), Helm, ArgoCD,
                  GitHub Actions, and Traefik.
                </p>
              </div>
              <div className="case-block">
                <p className="case-label">Impact</p>
                <p>
                  Reduced manual deployment effort by automating infrastructure
                  provisioning and application delivery. Enabled consistent and
                  repeatable deployments using GitOps principles, improving
                  reliability and reducing configuration errors.
                </p>
              </div>
            </div>

            <div className="architecture-panel">
              <div className="arch-node">Terraform</div>
              <div className="arch-connector" />
              <div className="arch-node">AWS EC2</div>
              <div className="arch-connector" />
              <div className="arch-node">Docker</div>
              <div className="arch-connector" />
              <div className="arch-node">k3s + Helm</div>
              <div className="arch-connector" />
              <div className="arch-node">ArgoCD + Traefik</div>
            </div>

            <div className="badge-row">
              {[
                "Terraform",
                "AWS EC2",
                "Docker",
                "Kubernetes",
                "k3s",
                "Helm",
                "ArgoCD",
                "GitHub Actions",
                "Traefik",
              ].map((item) => (
                <span key={item} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.article
            id="systems"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="panel dashboard-panel"
          >
            <SectionHeading
              eyebrow="DevOps Dashboard"
              title="System-style operational snapshot"
              description="A compact status view inspired by delivery tooling and platform monitoring."
            />

            <div className="status-list">
              {dashboardStatuses.map((status) => (
                <div key={status.label} className="status-item">
                  <div className={`status-dot ${status.tone}`} />
                  <span>{status.label}</span>
                  <strong>{status.value}</strong>
                </div>
              ))}
            </div>

            <div className="dashboard-block">
              <p className="dashboard-label">Deployment Pipeline</p>
              <div className="flow-line">
                {pipelineFlow.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>

            <div className="dashboard-block">
              <p className="dashboard-label">Infrastructure Modules</p>
              <div className="module-grid">
                {infrastructureModules.map((module) => (
                  <span key={module}>{module}</span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            id="skills"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="panel skills-panel"
          >
            <SectionHeading
              eyebrow="Skills Grid"
              title="Grouped like real delivery layers"
              description="Capabilities organized around infrastructure, automation, application delivery, and the tools used to support them."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-module">
                  <div className="skill-module-header">
                    <span className="skill-icon">{group.icon}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="badge-row">
                    {group.items.map((item) => (
                      <span key={item} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="panel terminal-panel"
          >
            <SectionHeading
              eyebrow="Terminal"
              title="Short workflow simulation"
              description="A clean command flow showing how code moves into a synced deployment routine."
            />

            <div className="terminal-window">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="terminal-body">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={line.command}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="terminal-line"
                  >
                    <p className="terminal-command">{line.command}</p>
                    <p className="terminal-output">
                      {"\u2192"} {line.output}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            id="experience"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="panel experience-panel"
          >
            <SectionHeading
              eyebrow="Experience"
              title="Practical work and formal foundation"
              description="Presented in a clean timeline so the page reads like a polished engineering profile instead of a plain resume."
            />

            <div className="timeline">
              {experience.map((item) => (
                <div
                  key={`${item.period}-${item.title}`}
                  className="timeline-item"
                >
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="timeline-meta">
                      {item.organization}
                      {item.location ? ` - ${item.location}` : ""}
                    </p>
                    {item.details.length > 0 ? (
                      <div className="timeline-details">
                        {item.details.map((detail) => (
                          <p key={detail}>{detail}</p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            id="projects"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="panel projects-panel"
          >
            <SectionHeading
              eyebrow="Projects"
              title="Additional builds"
              description="Smaller cards for focused application work outside the featured deployment platform."
            />

            <div className="project-cards">
              {additionalProjects.map((project) => (
                <article key={project.title} className="project-card">
                  <p className="project-title">{project.title}</p>
                  <p className="project-summary">{project.summary}</p>
                  <div className="badge-row">
                    {project.stack.map((item) => (
                      <span key={item} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.article>

          <motion.article
            id="contact"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="panel contact-panel"
          >
            <p className="eyebrow">Contact</p>
            <h2>Built to present like an engineering system.</h2>
            <p>
              DevOps Engineer based in Chembur, Mumbai, with hands-on experience
              across cloud infrastructure, Kubernetes deployments, CI/CD
              pipelines, and production debugging.
            </p>
            <div className="contact-actions">
              <a
                href="https://github.com/Sumeet0P"
                target="_blank"
                rel="noopener noreferrer"
                className="action-button action-button-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sumeetchauhan37"
                target="_blank"
                rel="noopener noreferrer"
                className="action-button action-button-muted"
              >
                LinkedIn
              </a>
            </div>
          </motion.article>
        </section>
      </main>
    </div>
  );
}

export default App;
