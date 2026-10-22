import { ImageOff } from 'lucide-react'
import styles from './Projects.module.css'

// Shows a real screenshot when one is provided. Otherwise shows either a
// diagram built from the project's documentation or a clearly labelled
// placeholder, never a mock-up presented as a screenshot.
export default function ProjectVisual({ project }) {
  const { image, visual, title } = project

  if (image) {
    return (
      <figure className={styles.shot}>
        <div className={styles.browserBar} aria-hidden="true"><span /><span /><span /></div>
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" width="1440" height="900" />
        {image.caption && <figcaption className={styles.caption}>Screenshot · {image.caption}</figcaption>}
      </figure>
    )
  }

  if (visual?.type === 'flow') {
    return (
      <figure className={styles.flow}>
        <figcaption className={styles.flowLabel}>Diagram · {visual.label}</figcaption>
        <ol className={styles.flowSteps} aria-label={`${title} request flow`}>
          {visual.steps.map((step, i) => (
            <li key={step} className={styles.flowStep}>
              <span className={styles.flowNum}>{String(i + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className={styles.flowNote}>Request flow from the project README</p>
      </figure>
    )
  }

  return (
    <div className={styles.placeholder} role="img" aria-label={`Screenshot placeholder for ${title}`}>
      <ImageOff aria-hidden="true" />
      <span>Screenshot coming soon</span>
    </div>
  )
}
