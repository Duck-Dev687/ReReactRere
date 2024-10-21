import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Challenge2/App.jsx'
import './Challenge2/style.css'

// import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
