import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '@pages/Home.jsx';
import Transactions from '@pages/Transactions/Transactions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Transactions />
  </StrictMode>,
)
