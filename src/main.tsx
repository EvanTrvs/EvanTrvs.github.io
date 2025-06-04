import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style.css'
import MouseTracker from './components/MouseTracker.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MouseTracker />
  </StrictMode>,
)
