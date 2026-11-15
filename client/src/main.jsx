import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MenuHidden from './components/Menu/Hidden/MenuHidden.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <MenuHidden />
      <div className="main-section">
        <h1>Hello</h1>
      </div>
    </div>
  </StrictMode>,
)
