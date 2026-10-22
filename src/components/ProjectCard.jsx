import { ArrowUpRight, Clock } from 'lucide-react'
import { GithubIcon } from './BrandIcons.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import Reveal from './Reveal.jsx'
import styles from './Projects.module.css'

export default function ProjectCard({ project, featured = false, delay = 0 }) {
  const { title, description, stack, github, demo } = project
  const headingId = `project-${project.id}`

  return (
    <Reveal as="article" className={`${styles.card} ${featured ? styles.featured : ''}`} delay={delay} aria-labelledby={headingId}>
      <div className={styles.media}>
        <ProjectVisual project={project} />
      </div>
      <div className={styles.body}>
        {featured && <p className={styles.badge}>Featured project</p>}
        <h3 id={headingId} className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <ul className="tags" aria-label="Technologies used">
          {stack.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
        <div className={styles.actions}>
          <a className={styles.action} href={github} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={16} /> Source code<span className="sr-only"> for {title} (opens in a new tab)</span>
          </a>
          {demo ? (
            <a className={`${styles.action} ${styles.primary}`} href={demo} target="_blank" rel="noopener noreferrer">
              Live demo <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> of {title} (opens in a new tab)</span>
            </a>
          ) : (
            <span className={styles.soon}>
              <Clock size={15} aria-hidden="true" /> Demo coming soon
            </span>
          )}
        </div>
      </div>
    </Reveal>
  )
}
