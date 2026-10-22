import { useState } from 'react'
import { ArrowRight, ImageOff } from 'lucide-react'
import SocialLinks from './SocialLinks.jsx'
import { profile } from '../data/profile.js'
import styles from './Hero.module.css'

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false)
  const { heroImage, portrait } = profile

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Aspiring Software Developer</p>
          {/* <h1 id="hero-title" className={styles.title}>
            Building meaningful digital experiences <em>through code.</em>
          </h1> */}
          <p className={styles.name}>Hi, I&apos;m {profile.name}.</p>
          <p className={styles.lead}>
            I enjoy building practical web applications, exploring intelligent technologies, and solving real-world
            problems through thoughtful software development.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className="btn btn--primary">
              Explore My Projects <ArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--ghost">Get in Touch</a>
          </div>
          <div className={styles.meta}>
            <SocialLinks />
            <p className={styles.status}>
              <span className={styles.dot} aria-hidden="true" /> Currently learning, building, and growing
            </p>
          </div>
        </div>

        <figure className={styles.visual}>
          <div className={styles.frame}>
            {imgFailed ? (
              <div className={styles.placeholder} role="img" aria-label="Placeholder for a workspace photograph">
                <ImageOff aria-hidden="true" />
                <span>Workspace photo placeholder</span>
                <small>Set heroImage in src/data/profile.js</small>
              </div>
            ) : (
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                width="1400"
                height="933"
                fetchPriority="high"
                onError={() => setImgFailed(true)}
              />
            )}
          </div>
          {portrait && (
            <img className={styles.portrait} src={portrait} alt={`Portrait of ${profile.name}`} width="120" height="120" />
          )}
          {!imgFailed && heroImage.credit && (
            <figcaption className={styles.credit}>
              <a href={heroImage.credit.href} target="_blank" rel="noopener noreferrer">{heroImage.credit.label}</a>
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  )
}
