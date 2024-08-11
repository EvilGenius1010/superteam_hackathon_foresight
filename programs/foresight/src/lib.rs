use anchor_lang::prelude::*;

declare_id!("Ftms6NbwCZFWQTFmfybMW4GEDbR64CWayzuv5CPVAHja");

#[program]
pub mod foresight {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
