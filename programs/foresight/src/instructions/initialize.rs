use anchor_lang::accounts::account;
use anchor_lang::prelude::*;
use anchor_lang::system_program::{transfer, Transfer};

use crate::state::initialize::InitializeAcc;

pub fn init_pda(ctx:Context<InitializeAcc>)->Result<Pubkey>{
    msg!("PDA creation initiated.");
    let pda = &mut ctx.accounts.pda;
    pda.key()? //return pubkey




}

pub fn transfer_from_pda(ctx: Context<InitializeAcc>,returnlamports:u64) -> Result<()> {
    
    let pda = &mut ctx.accounts.pda;
    let signer = &mut ctx.accounts.signer;
    let sys_prog = &ctx.accounts.system_program;

    let pre_trans_balance = pda.get_lamports();

    transfer( CpiContext::new(  //generic parameter for transfer inferred
        sys_prog.to_account_info(),
        Transfer {
            from: pda.to_account_info(),
            to: signer.to_account_info(),
        },
    ) ,returnlamports);

    let post_trans_balance = pda.get_lamports();
    require_eq!(pre_trans_balance+returnlamports,post_trans_balance);
    //instead of above check, check balance in receiver acc
    Ok(())
}

pub fn transfer_to_pda(ctx: Context<InitializeAcc>,fundlamports:u64) -> Result<()> {
    let pda = &mut ctx.accounts.pda; //the pda variable
    let signer = &mut ctx.accounts.signer; //how is this available at compile time?
    let sys_prog = &ctx.accounts.system_program;

    //balance before 
    let pre_pda_balance = pda.get_lamports();

    transfer( CpiContext::new(
                sys_prog.to_account_info(),
                Transfer {
                    from: signer.to_account_info(),
                    to: pda.to_account_info(),
                },
            ) ,fundlamports);
    let post_pda_balance = pda.get_lamports();

    require_eq!(pre_pda_balance+fundlamports,post_pda_balance);
    Ok(())
}
