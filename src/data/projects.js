import ngoShot from '../assets/projects/ngo-assistance-platform.jpg'
import medchainShot from '../assets/projects/medchain-landing.jpg'

// Each project:
//   image   - { src, alt, caption } for a real screenshot, or null to show
//             the `visual` fallback (a diagram or a labelled placeholder).
//   demo    - live URL, or null to show "Demo coming soon".
//   stack   - technologies confirmed from the repository.
export const projects = [
  {
    id: 'ngo',
    featured: true,
    title: 'NGO Assistance & Support Platform',
    description:
      'An assistance platform designed to connect people in need with NGOs. It supports assistance requests, location-based information, NGO verification, employee management, and request acceptance or rejection, helping make assistance coordination more organized and accessible.',
    stack: ['React.js', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Supabase'],
    github: 'https://github.com/meghanadc20/ngo-assistance-platform',
    demo: 'https://ngo-assistance-platform.netlify.app/',
    image: {
      src: ngoShot,
      alt: 'NGO Assistance Platform sign-in screen with options to continue as a user or as an NGO',
      caption: 'Sign-in screen',
    },
  },
  {
    id: 'medchain',
    title: 'Blockchain-Based Medical Record Management System',
    description:
      'A healthcare-focused application exploring blockchain technology for secure and transparent medical record management. The project focuses on improving data integrity and making medical information management more reliable.',
    // From the repository README and package.json.
    stack: ['Solidity', 'Ethers.js', 'Node.js', 'Express.js', 'MongoDB', 'Supabase Storage', 'JavaScript', 'HTML & CSS'],
    github: 'https://github.com/meghanadc20/blockchain-secure-medical-records',
    demo: null,
    image: {
      src: medchainShot,
      alt: 'MedChain landing page: "Your medical records, shared only with the doctors you choose", with patient and doctor registration buttons',
      caption: 'Landing page',
    },
  },
  {
    id: 'nova',
    title: 'Amazon Nova — Smart Knowledge Assistant',
    description:
      'Explored the development of an AI-powered application using Amazon Nova and AWS services as part of a hackathon, focusing on applying generative AI to a practical problem.',
    // From the repository README and app.py.
    stack: ['Amazon Nova 2 Lite', 'Amazon Bedrock', 'Python', 'Flask', 'boto3', 'JavaScript'],
    github: 'https://github.com/meghanadc20/nova-smart-knowledge-assistant',
    demo: null,
    image: null,
    // Request flow described in the repository README.
    visual: {
      type: 'flow',
      label: 'How it works',
      steps: ['Web interface', 'Flask backend', 'Amazon Bedrock', 'Nova 2 Lite'],
    },
  },
]
