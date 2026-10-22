import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/profile.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import styles from './Navbar.module.css'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth > 900 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`} aria-label="Primary">
        <a href="#home" className={styles.logo} onClick={close}>
          Meghana<span>.</span>
        </a>

        <ul id="primary-menu" className={`${styles.links} ${open ? styles.open : ''}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.link} ${active === id ? styles.active : ''}`}
                aria-current={active === id ? 'true' : undefined}
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
          <li className={styles.mobileCta}>
            <a href="#contact" className="btn btn--primary" onClick={close}>Let&apos;s Connect</a>
          </li>
        </ul>

        <div className={styles.right}>
          <a href="#contact" className={`btn btn--ghost ${styles.cta}`}>Let&apos;s Connect</a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
