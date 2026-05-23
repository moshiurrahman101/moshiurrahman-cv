import {
  ExternalLink,
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Languages,
  Sparkles,
} from "lucide-react";
import {
  aboutContent,
  awards,
  education,
  experience,
  languages,
  profile,
  projects,
  publications,
  skillGroups,
} from "@/lib/cv-data";

function SectionHeader({
  id,
  icon: Icon,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <header className="mb-6 flex items-center gap-3 scroll-mt-24" id={id}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-4 w-4" aria-hidden />
      </div>
      <h2 className="section-heading">{children}</h2>
    </header>
  );
}

export default function CvContent() {
  return (
    <div className="mx-auto max-w-3xl space-y-16 px-4 py-24 lg:px-8 lg:py-10">
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="animate-fade-in">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Open to MSc opportunities & research collaboration
        </p>
        <h2 id="hero-heading" className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.35rem]">
          <span className="gradient-text">{profile.shortName}</span>
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {profile.tagline}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
            >
              {role}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24">
        <SectionHeader id="about-heading" icon={Sparkles}>
          About Me
        </SectionHeader>
        <div className="space-y-4 text-[0.95rem] leading-[1.85] text-muted">
          <p>
            I am a Computer Science Engineer and IoT researcher, currently teaching as a
            Computer Science Instructor at{" "}
            <a
              href="https://niet.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              NIET
            </a>
            . I earned my B.Sc. in Computer Science &amp; Engineering from Dhaka
            International University and a Diploma in Engineering from{" "}
            <a
              href="https://niet.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              NIET
            </a>
            .
          </p>
          <p>{aboutContent.research}</p>
          <p>
            {aboutContent.development}{" "}
            <a
              href="https://www.creativecanvasit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              Creative Canvas IT
            </a>{" "}
            (EdTech) and{" "}
            <a
              href="https://www.trustonventure.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              Trust on Venture
            </a>{" "}
            (financial management).
          </p>
          <p>{aboutContent.goals}</p>
          <p>
            I am always open to{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              collaboration
            </a>{" "}
            on research, web development, or IoT systems.
          </p>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Personal details">
          <li className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
            Born: {profile.born}
          </li>
          <li className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
            Dhaka, Bangladesh
          </li>
          <li className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
            {profile.nationality}
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24">
        <SectionHeader id="experience-heading" icon={Briefcase}>
          Work Experience
        </SectionHeader>
        <div className="space-y-4">
          {experience.map((job) => (
            <article
              key={job.title}
              className="glass card-hover rounded-2xl p-5 md:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-text">{job.title}</h3>
                  <p className="mt-0.5">
                    <a
                      href={job.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      {job.organization}
                    </a>
                  </p>
                  <p className="text-xs text-muted">{job.department}</p>
                  <p className="text-xs text-muted">{job.location}</p>
                </div>
                <time className="shrink-0 rounded-lg border border-border bg-bg px-3 py-1.5 text-xs text-muted">
                  {job.period}
                </time>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.phases.map((phase) => (
                  <span
                    key={phase.label}
                    className={`rounded-md px-2 py-0.5 text-[0.7rem] font-medium ${
                      phase.variant === "part"
                        ? "border border-violet/30 bg-violet/10 text-violet"
                        : phase.variant === "full"
                          ? "border border-emerald/30 bg-emerald/10 text-emerald"
                          : "border border-amber/30 bg-amber/10 text-amber"
                    }`}
                  >
                    {phase.label}: {phase.period}
                  </span>
                ))}
              </div>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 border-l-2 border-accent/50 bg-accent/5 py-2 pl-3 text-xs italic text-muted">
                {job.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24">
        <SectionHeader id="education-heading" icon={GraduationCap}>
          Education
        </SectionHeader>
        <div className="space-y-4">
          {education.map((edu) => (
            <article
              key={edu.degree}
              className="glass card-hover rounded-2xl p-5 md:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold text-text">{edu.degree}</h3>
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    {edu.institution}
                  </a>
                </div>
                <time className="text-xs text-muted">{edu.period}</time>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-muted">
                  GPA: {edu.gpa}
                </span>
                <span className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-muted">
                  {edu.location}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="scroll-mt-24">
        <SectionHeader id="publications-heading" icon={BookOpen}>
          Publications
        </SectionHeader>
        {publications.map((pub) => (
          <article
            key={pub.doi}
            className="glass card-hover overflow-hidden rounded-2xl border-amber/20"
            itemScope
            itemType="https://schema.org/ScholarlyArticle"
          >
            <div className="border-b border-border-subtle bg-gradient-to-r from-amber/10 to-transparent px-5 py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber">
                Peer-reviewed · {pub.published}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <meta itemProp="datePublished" content="2026-04-01" />
              <h3 className="text-lg font-semibold leading-snug text-text" itemProp="headline">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                  itemProp="url"
                >
                  {pub.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-muted" itemProp="author">
                {pub.authors.join(" · ")}
              </p>
              <p className="mt-1 text-sm text-accent">{pub.venue}</p>
              <p className="mt-0.5 text-xs text-muted">{pub.publisher}</p>
              <p className="mt-2 font-mono text-xs text-muted">
                DOI:{" "}
                <a
                  href={`https://doi.org/${pub.doi}`}
                  className="text-accent hover:underline"
                  itemProp="sameAs"
                >
                  {pub.doi}
                </a>
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {pub.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-md border border-border bg-bg px-2 py-0.5 text-[0.65rem] text-muted"
                  >
                    {kw}
                  </span>
                ))}
              </div>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted">
                {pub.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Read on Springer Nature
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24">
        <SectionHeader id="projects-heading" icon={Sparkles}>
          Projects
        </SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`glass card-hover flex flex-col rounded-2xl p-5 ${
                project.featured ? "sm:col-span-2 border-accent/30 bg-accent/5" : ""
              } ${project.supervisor ? "border-l-2 border-l-violet" : ""}`}
            >
              <time className="text-[0.7rem] uppercase tracking-wide text-muted">
                {project.period}
              </time>
              {project.supervisor && (
                <span className="mt-1 w-fit rounded border border-violet/30 bg-violet/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-violet">
                  Project Supervisor
                </span>
              )}
              <h3 className="mt-2 font-semibold leading-snug text-text">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                >
                  Visit site
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-bg px-2 py-0.5 text-[0.68rem] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24">
        <SectionHeader id="skills-heading" icon={Sparkles}>
          Skills
        </SectionHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass rounded-xl p-4">
              <h3 className="mb-2.5 text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-bg px-2 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="scroll-mt-24">
        <SectionHeader id="awards-heading" icon={Award}>
          Honours &amp; Awards
        </SectionHeader>
        <div className="space-y-3">
          {awards.map((award) => (
            <article
              key={award.title}
              className="glass card-hover flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="text-2xl" aria-hidden>
                {award.icon}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-text">{award.title}</h3>
                <p className="mt-0.5 text-sm text-muted">{award.org}</p>
                {award.url && (
                  <a
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                  >
                    {award.urlLabel}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
              <span className="shrink-0 font-display text-sm font-bold text-amber">
                {award.year}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="scroll-mt-24 pb-8">
        <SectionHeader id="languages-heading" icon={Languages}>
          Languages
        </SectionHeader>
        <div className="space-y-2">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="glass flex items-center justify-between rounded-xl px-5 py-3.5"
            >
              <span className="font-medium">{lang.name}</span>
              <span
                className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${
                  lang.variant === "native"
                    ? "border border-emerald/30 bg-emerald/10 text-emerald"
                    : "border border-accent/30 bg-accent/10 text-accent"
                }`}
              >
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border-subtle pt-8 text-center text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <p className="mt-1">
          <a
            href={`mailto:${profile.email}`}
            className="text-accent hover:underline"
          >
            Get in touch
          </a>
        </p>
      </footer>
    </div>
  );
}
