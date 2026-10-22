import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { profile } from '../data/profile.js'
import styles from './Projects.module.css'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            id="projects-title"
            label="Projects"
            title="Things I've Built"
            subtitle="A selection of projects where I've explored ideas, learned new technologies, and developed practical solutions."
          />
          <a className={styles.all} href={profile.github} target="_blank" rel="noopener noreferrer">
            View All Projects <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.list}>
          {featured.map((p) => <ProjectCard key={p.id} project={p} featured />)}
          <div className={styles.grid}>
            {others.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 80} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
