import React from 'react';
import './Home.css';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';

const Home: React.FC = () => {


  return (
    <div style={{fontFamily:"landingpgFont"}}>
      <div className="home flex flex-col left-16 relative">
        <div className="text-6xl flex flex-col relative">
          <p className='py-3'>Use your intuition&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p className='py-3'>to predict the state</p>
          <p className='py-3'>of SOLANA and&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p className='pt-3'>win it big.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className=' relative top-10'>
          <Button>
          <Link to="/game" className='common-btn'>Place your bets</Link>
          </Button>
        </div>
      </div>
    </div>

  );
}

export default Home;
