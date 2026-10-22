import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/dm-serif-display/400.css'
import '@fontsource/dm-serif-display/400-italic.css'
import '@fontsource-variable/inter'
import '@fontsource/jetbrains-mono/400.css'
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
