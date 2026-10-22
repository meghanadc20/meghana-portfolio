// Personal details used across the site. Edit here to update everywhere.
import myphoto from '../assets/projects/myphoto.jpg'
export const profile = {
  name: 'Meghana D C',
  title: 'Aspiring Software Developer | Full-Stack Development Enthusiast',
  email: 'meghanadc20@gmail.com',
  linkedin: 'https://www.linkedin.com/in/meghana-d-c-3442642a3',
  github: 'https://github.com/meghanadc20',

  // Optional portrait. Leave as null to hide it. To add one, put the file in
  // src/assets/ and import it here, e.g.:
  //   import portrait from '../assets/meghana.jpg'
  //   portrait: portrait,
  portrait: null,

  // Hero workspace photograph. Defaults to a free Unsplash photo
  // (laptop with a code editor on a desk, by Christopher Gower; Unsplash License).
  // To use your own, drop a file in src/assets/ and import it instead.
  // If the image cannot load, a labelled placeholder is shown.
  heroImage: { src: myphoto, alt: 'Describe the photo', credit: null },
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]
