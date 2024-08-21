import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'
import {CoinContextProvider} from './context/CoinContext.tsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home'
import {Game2} from './pages/Game/Game'




const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path:"/game",
    element: <Game2/>
  }
]);




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoinContextProvider>
      <RouterProvider router={router} />
    </CoinContextProvider>
  </StrictMode>,
)