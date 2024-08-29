use anchor_lang::solana_program::lamports;
// use crate::state::initialize;



pub fn calculateodds(moneyincbet:lamports,moneydecbet:lamports){



    // let mut betonpriceincreasing:u8=moneyincbet; //bet money that price will increase.
    //     let mut betonpricedecreasing:u8=moneydecbet; //bet money that price will decrease.
        let mut bettingpool = moneyincbet+moneydecbet;
        let mut ratio:f32 = moneydecbet/moneyincbet; 
        let moneylineodds:f32;
    
        if ratio>1.0{
            moneylineodds = ratio*100;
            moneylineodds;
        }
        else if ratio<1.0{
            moneylineodds = -(100/ratio);
            moneylineodds;
        }else{
            //check later.
        }
        
    }
    pub fn calculatedividends(){
    
    }
    
    pub fn givepayouts(from_acc:&AccountInfo,to_acc:&AccountInfo,lamport_amt:u64)->ProgramResult{
    
        //does account have enough lamports
        if **from_acc.try_borrow_lamports()? < lamport_amt{
            return Err(CustomError::InsufficientFundsForTransaction.into());
        }
    
         // Debit from_account and credit to_account
         **from_acc.try_borrow_mut_lamports()? -= lamport_amt;
         **to_acc.try_borrow_mut_lamports()? += lamport_amt;
         Ok(())
    }
    
      // //for defining odds and dividend calculation.
    
    // use std::borrow::Borrow;
    
    // use anchor_lang::{account, prelude::AccountInfo, solana_program::entrypoint::ProgramResult};
    
    
    
    pub fn create_bet_id() -> String {
        const INITIALBETID: &str = "ajzocps18dk30dj3";
        let counter: u32 = 1;
        INITIALBETID.to_string() + &counter.to_string()
    }