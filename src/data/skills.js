import { Braces, PanelsTopLeft, Server, Database, Cpu, Wrench, Sparkles } from 'lucide-react'

// No ratings or percentages on purpose. Add a skill by appending to `items`.
export const skillGroups = [
  { title: 'Programming Languages', icon: Braces, items: ['Java', 'C++', 'Python', 'C'] },
  { title: 'Frontend Development', icon: PanelsTopLeft, items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
  { title: 'Backend Development', icon: Server, items: ['FastAPI', 'REST APIs'] },
  { title: 'Databases', icon: Database, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'] },
  {
    title: 'Core Computer Science',
    icon: Cpu,
    items: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  { title: 'Tools and Technologies', icon: Wrench, items: ['Git', 'GitHub', 'SQLAlchemy', 'Postman'] },
  {
    title: 'Areas of Interest',
    icon: Sparkles,
    items: ['Full-Stack Development', 'Artificial Intelligence', 'Machine Learning', 'Blockchain Technology', 'Problem-Solving'],
  },
]
