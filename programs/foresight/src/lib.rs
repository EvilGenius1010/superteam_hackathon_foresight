pub mod constants; //unnecessary
pub mod error; //unnecessary
pub mod state; //unnecessary
pub mod instructions; //unnecessary
use anchor_lang::prelude::*; //contains necessary imports of anchorlang


pub use constants::*; 
pub use state::*;


declare_id!("C9rAVfZXPdRDgB5PrpGdqFPpgT7vFTVNBxJzSfve6P9b"); //program identifier

#[program]
pub mod foresight {
    use std::thread::sleep;
    use std::time::Duration;

    use initialize::InitializeAcc;
    use instructions::odds::{calculatedividends, calculateodds, create_bet_id};
    use instructions::initialize::{init_pda,transfer_from_pda};

    use super::*;
    const calculated_pda:Pubkey;

    pub fn initialise(ctx: Context<InitializeAcc>)-> Result<Pubkey> {
        calculated_pda = init_pda(ctx); //

        Ok(calculated_pda)
    }

    pub fn init_pda_period(ctx:String)->Result<()>{
        const bet_duration:u8 = 180;
        let betid = create_bet_id();
        
        Ok(())
    }
    

    
    // loop {

        
    //     while Duration::from_secs(bet_duration) {
    //         calculateodds(moneyincbet, moneydecbet);
    //         sleep(Duration::from_secs(1));
    //     }
    //     calculatedividends();
           
    // }
}


//initialise a PDA->Send its address to frontend along with betid-> Allow ppl to send 
//bets to it ->Check if wanna store it onchain/offchain -> Every sec/2 secs calculate 
// EOB, odds and send to frontend->At end, calculate bets and disperse to winners.