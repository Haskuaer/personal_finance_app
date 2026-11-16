import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MenuHidden from './components/Menu/Hidden/MenuHidden.jsx';
import MenuOpen from '@components/Menu/Open/MenuOpen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <MenuHidden />
      {/* <MenuOpen /> */}
      <div className="main-section">
        <h1>Hello</h1>
      </div>
    </div>
  </StrictMode>,
)
