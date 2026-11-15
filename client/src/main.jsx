import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <div>Menu</div>
      <div className="main-section">
        <h1>Hello</h1>
      </div>
    </div>
  </StrictMode>,
)
