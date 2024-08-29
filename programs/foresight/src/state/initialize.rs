use anchor_lang::prelude::*;
// define the struct for initializing the Account and PDA.
#[derive(Accounts)]
pub struct InitializeAcc<'info> {

#[account(mut,seeds = [b"vault".as_ref()],bump)] //creating PDA

    pub pda:SystemAccount<'info> ,//whats this? is it the pda address
    #[account(mut)] //this is for updating
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

