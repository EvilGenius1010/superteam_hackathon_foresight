use anchor_lang::prelude::*;
use crate::bet_info::{self, BetInfo};
use spl_account_compression::{program::SplAccountCompression, Noop, wrap_application_data_v1};

use crate::state::compress::{InitCompressedBet,AddCompressedBet};




// pub fn compress_bet_info <'info>(ctx:Context<AddCompressedBet>,bet_info:BetInfo){
//     let trans_log = &mut ctx.accounts.

// }

//better errors
pub fn init_compression<'info>(ctx:Context<InitCompressedBet>)->Result<()>{
 let compressed_bet_info = &mut ctx.accounts.compressed_bet_info; //declared variables
 compressed_bet_info.authority = ctx.accounts.authority.key(); //
 compressed_bet_info.merkle_tree = ctx.accounts.merkle_tree.key();
 compressed_bet_info.num_transactions = 0;

 Ok(())
}

//better errors
pub fn addcompressedbet<'info>(ctx:Context<AddCompressedBet>,betinfo:BetInfo)->Result<()>{
    let compressed_bet_info = &mut ctx.accounts.compressed_bet_info;
    let merkle_tree = &ctx.accounts.merkle_tree; //merkle tree

    let mut bet_info_data = vec![]; //why?
    betinfo.serialize(&mut bet_info_data)?;

    //copmress the data
    let wrappeddata = wrap_application_data_v1(bet_info_data);

    //appending data to merkle tree
    let index = compressed_bet_info.num_transactions; //no of transactions done

    spl_account_compression::program::append(
        CpiContext::new_with_signer(
            ctx.accounts.compression_program.to_account_info(),
            spl_account_compression::cpi::accounts::Append {
                merkle_tree: merkle_tree.to_account_info(),
                authority: compressed_bet_info.to_account_info(),
                noop: ctx.accounts.noop.to_account_info(),
            },
            &[&[
                b"compressed-bet-info",
                ctx.accounts.authority.key().as_ref(),
                &[ctx.bumps.compressed_bet_info]
            ]]
        ),
        index,
        &wrapped_data,
    )?;

    compressed_bet_info.num_transactions+=1;
    Ok(())

}