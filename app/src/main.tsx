import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.tsx'
import './index.css'
import {CoinContextProvider} from './context/CoinContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
  </StrictMode>,
)