
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"
import './Game.css';
// import React, { useState, ChangeEvent, useEffect } from 'react';
// import { useCoinContext } from '../../context/CoinContext';

// const Game: React.FC = () => {
//   const { solPrice, fetchCall, setFetchCall} = useCoinContext();
//   const [walletAddress, setWalletAddress] = useState<string | null>(null);
//   const [amount, setAmount] = useState<number | ''>('');
//   const [prediction, setPrediction] = useState<boolean | null>(null);

//   const connectWallet = () => {
//     setWalletAddress('FakeWalletAddress123');
//   };

//   const handleBetAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setAmount(event.target.valueAsNumber || '');
//   };

//   const handlePredictionChange = (value: boolean) => {
//     setPrediction(value);
//   };

//   const placeBet = () => {
//     if (walletAddress && amount && prediction !== null) {
//       // Simulate placing a bet
//       console.log(`Placing bet of ${amount} SOL on ${prediction ? 'Up' : 'Down'}`);
//     } else {
//       console.error('Please fill all fields and connect your wallet.');
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFetchCall(prev => (prev !== null ? prev + 1 : 1)); // Increment fetchCall every 5 seconds
//     }, 15000);

//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, [setFetchCall]);

//   console.log(solPrice)
//   return (
//     <div className="App">
//       {/* <HoverCard>
//   <HoverCardTrigger asChild>
//     </HoverCardTrigger>
//   <HoverCardContent>
//     The React Framework – created and maintained by @vercel.
//   </HoverCardContent>
// </HoverCard> */}
//       <Game2/>
//       <header className="App-header">
//         {!walletAddress ? (
//           <button onClick={connectWallet}>Connect Wallet</button>
//         ) : (
//           <>
//             <p>Wallet Address: {walletAddress}</p>
//             <div>
//               <label htmlFor="amount">Bet Amount (SOL): </label>
//               <input
//                 type="number"
//                 id="amount"
//                 value={amount}
//                 onChange={handleBetAmountChange}
//                 min="0.1"
//                 step="0.1"
//               />
//             </div>
//             <div>
//                 <h1>Solana Price: {solPrice !== null ? `${solPrice} USD` : "Loading..."}</h1>
//                 <p>Fetch Call Count: {fetchCall}</p>
//               <button onClick={() => handlePredictionChange(true)}>Bet Up</button>
//               <button onClick={() => handlePredictionChange(false)}>Bet Down</button>
//             </div>
//             <button onClick={placeBet} disabled={prediction === null}>Place Bet</button>
//           </>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Game;

//create a hover card and put,say graphs in it.

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';



export function Game2(){
return (

    
  <Card style={{fontFamily:"landingpgFont"}}>
  <CardHeader>
    <CardTitle>Solana</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Odds :&nbsp;</p>
    <div className='flex flex-row space-x-6 py-5'>

  <button >
    <img src= "../../BetUp.png" height={"40px"} width={"40px"} />
    </button>
    <button>
  <img src= "../../BetDown.png" height={"40px"} width={"40px"} />
    </button>
    </div>
    <div className='flex flex-col'>
    <p>Enter bet amount in SOL below:</p>
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="number" placeholder="Enter Amount" min={0.000000001} />
      <Button type="submit">Place Bet</Button>
    </div>
    </div>
  </CardContent>
  
</Card>
      


)
}