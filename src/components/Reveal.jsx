import { useReveal } from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, style, ...props }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...props}
    >
      {children}
    </Tag>
  )
}
