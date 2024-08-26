import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home/Home';
import Game2 from './pages/Game/Game';
import {CoinContextProvider} from './context/CoinContext.tsx'

// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import * as web3 from "@solana/web3.js";

import '@solana/wallet-adapter-react-ui/styles.css';

// const network = WalletAdapterNetwork.Devnet;
const endpoint = web3.clusterApiUrl("devnet");;
const wallets = [new PhantomWalletAdapter()];

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path:"/game",
    element: <Game2/>
  },
  {
    path:"/wallet",
    element:<>Hello</>
  }
]);




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
        <CoinContextProvider>
          <RouterProvider router={router} />
          </CoinContextProvider>
          </WalletModalProvider>
      </WalletProvider>
      </ConnectionProvider>
  </StrictMode>,
)