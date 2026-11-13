import Link from "next/link";
import type { CSSProperties } from "react";
import { jobs } from "@/content/experience";
import { projects } from "@/content/projects/cards";
import { resumes } from "@/content/resumes";
import { skills } from "@/content/skills";
import styles from "./EditorialHome.module.css";

const timelineColors = ["var(--rust)", "var(--amber)", "var(--forest)", "var(--slate)"];
const nav = ["work", "experience", "skills", "resume"];

export default function EditorialHome() {
  return <main id="top" className={styles.page}>
    <div className={styles.shell}>
      <div className={styles.composition}>
        <section className={styles.heroSection} aria-labelledby="hero-title">
          <div className={`${styles.panel} ${styles.hero}`}>
            <header className={styles.heroHeader}>
              <a href="#top" className={styles.name}>benjamin p.</a>
              <nav aria-label="Main navigation">
                {nav.map(label => <a key={label} href={`#${label}`}>{label}</a>)}
              </nav>
            </header>
            <div className={styles.heroContent}>
              <div className={styles.heroCopy}>
                <h1 id="hero-title">hi.</h1>
                <p className={styles.heroIntro}>i&apos;m benjamin ⊹﹒</p>
                <p>i&apos;m a backend software engineer in minneapolis. i build services, write the tests that break them, and evaluate ai-generated code for correctness and efficiency</p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#work">View my work <span aria-hidden="true">→</span></a>
                  <a className={styles.button} href={resumes[0].pdf} target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
              </div>
              <div className={styles.terminal}>
                <div className={styles.terminalBar} aria-hidden="true"><i /><i /><i /></div>
                <dl>
                  <dt>whoami</dt><dd>backend software engineer, target</dd>
                  <dt>cat stack.txt</dt><dd>python · typescript · go · sql</dd>
                  <dt>cat focus.txt</dt><dd>automated testing, ai code evaluation</dd>
                  <dt>uptime</dt><dd>4 years in production backends</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className={styles.workSection} aria-labelledby="work-title">
          <h2 id="work-title" className={styles.srOnly}>Selected work</h2>
          <div className={`${styles.panel} ${styles.projectGrid}`}>
            {projects.map(project => {
              const style = { "--card-backdrop": `var(--${project.tone})`, "--card-fill": `var(--${project.tone}-tint)`, "--label-hover": `var(--${project.tone}-tint)` } as CSSProperties;
              const href = project.caseStudyUrl ?? project.repoUrl;
              const card = <>
                <span className={styles.cardBackdrop} aria-hidden="true" />
                <article className={styles.cardFront}>
                  <div className={styles.cardTitleRow}>
                    <h3>{project.title}</h3>
                    {href && <span className={styles.caseStudyLabel}>{project.caseStudyUrl ? "CASE STUDY" : "SOURCE ↗"}</span>}
                  </div>
                  <p>{project.category}</p>
                  <div className={styles.cardColor}>
                    <p>{project.description}</p>
                    <p>{project.stack.join(" • ")}</p>
                  </div>
                </article>
              </>;
              if (project.caseStudyUrl) return <Link key={project.id} href={project.caseStudyUrl} className={styles.projectCard} style={style}>{card}</Link>;
              return href
                ? <a key={project.id} href={href} target="_blank" rel="noopener noreferrer" className={styles.projectCard} style={style}>{card}</a>
                : <div key={project.id} className={styles.projectCard} style={style}>{card}</div>;
            })}
          </div>
        </section>

        <div className={styles.professionalGrid}>
          <section id="experience" className={styles.experienceSection} aria-labelledby="experience-title">
            <div className={`${styles.panel} ${styles.experience}`}>
              <h2 id="experience-title">experience</h2>
              <ol className={styles.timeline}>
                {jobs.map((job, index) => <li key={job.company} tabIndex={0} style={{ "--row-color": timelineColors[index] } as CSSProperties}>
                  <span className={styles.timelineDot} aria-hidden="true" />
                  <div className={styles.jobIdentity}><h3>{job.company}</h3><p>{job.role}</p></div>
                  <p className={styles.jobDate}>{job.year}</p>
                  <p className={styles.jobDescription}>{job.description}</p>
                </li>)}
              </ol>
              <p className={styles.education}>B.S. Computer Science, University of Minnesota, Twin Cities, 2018–2022</p>
            </div>
          </section>

          <section id="skills" className={`${styles.panel} ${styles.skills}`} aria-labelledby="skills-title">
            <h2 id="skills-title">skills</h2>
            <ol className={`${styles.timeline} ${styles.skillTimeline}`}>
              {skills.map((group, index) => <li key={group.title} tabIndex={0} style={{ "--row-color": timelineColors[timelineColors.length - 1 - index] } as CSSProperties}>
                <h3 className={styles.skillIdentity}>{group.title}</h3>
                <ul className={styles.skillItems} aria-label={`${group.title} skills`}>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
                <span className={styles.timelineDot} aria-hidden="true" />
              </li>)}
            </ol>
          </section>
        </div>
      </div>

      <div className={styles.secondary}>
        <section id="resume" className={`${styles.panel} ${styles.resumes}`} aria-labelledby="resume-title">
          <h2 id="resume-title">Resume</h2>
          <div className={styles.resumeGrid}>{resumes.map(resume => <a key={resume.pdf} href={resume.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Open ${resume.title} resume PDF`}>
            <span className={styles.resumeNumber}>{resume.index}</span><h3>{resume.title}</h3><p>{resume.description}</p><span className={styles.resumeAction}>Resume</span>
          </a>)}</div>
        </section>
      </div>

      <footer id="contact" aria-label="Contact">
        <div className={`${styles.panel} ${styles.footer}`}>
          <p>© 2026 benjamin p.<br />Minneapolis, Minnesota</p>
          {/* ponytail: no email or profile links in the resume; add them here when available */}
          <div className={styles.contact}><p>References available upon request</p></div>
          <p className={styles.signature}>design by <a href="https://juliana-portfolio-two.vercel.app" target="_blank" rel="noopener noreferrer">juliana o.</a></p>
        </div>
      </footer>
    </div>
  </main>;
}
