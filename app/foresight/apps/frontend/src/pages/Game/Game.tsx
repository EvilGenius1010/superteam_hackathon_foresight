import React, { useState, ChangeEvent, useEffect } from 'react';
import { useCoinContext } from '../../context/CoinContext';
import './Game.css';

const Game: React.FC = () => {
  const { solPrice, fetchCall, setFetchCall} = useCoinContext();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | ''>('');
  const [prediction, setPrediction] = useState<boolean | null>(null);

  const connectWallet = () => {
    setWalletAddress('FakeWalletAddress123');
  };

  const handleBetAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.valueAsNumber || '');
  };

  const handlePredictionChange = (value: boolean) => {
    setPrediction(value);
  };

  const placeBet = () => {
    if (walletAddress && amount && prediction !== null) {
      // Simulate placing a bet
      console.log(`Placing bet of ${amount} SOL on ${prediction ? 'Up' : 'Down'}`);
    } else {
      console.error('Please fill all fields and connect your wallet.');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFetchCall(prev => (prev !== null ? prev + 1 : 1)); // Increment fetchCall every 5 seconds
    }, 15000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [setFetchCall]);

  console.log(solPrice)
  return (
    <div className="App">
      <header className="App-header">
        {!walletAddress ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <>
            <p>Wallet Address: {walletAddress}</p>
            <div>
              <label htmlFor="amount">Bet Amount (SOL): </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={handleBetAmountChange}
                min="0.1"
                step="0.1"
              />
            </div>
            <div>
                <h1>Solana Price: {solPrice !== null ? `${solPrice} USD` : "Loading..."}</h1>
                <p>Fetch Call Count: {fetchCall}</p>
              <button onClick={() => handlePredictionChange(true)}>Bet Up</button>
              <button onClick={() => handlePredictionChange(false)}>Bet Down</button>
            </div>
            <button onClick={placeBet} disabled={prediction === null}>Place Bet</button>
          </>
        )}
      </header>
    </div>
  );
};

export default Game;

