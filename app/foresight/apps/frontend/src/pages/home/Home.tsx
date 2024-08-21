import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-fuchsia-600'>
    <div className='home-cont'>
      <div className="home">
        <div className="home-content">
          <h1>FORESIGHT</h1>
          <p>Predict Solana Graph</p>
          <button onClick={() => navigate("/game")} className='common-btn'>Place your bets</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
