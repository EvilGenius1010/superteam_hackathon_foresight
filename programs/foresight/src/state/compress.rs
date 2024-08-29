use anchor_lang::prelude::*;

#[account]
pub struct CompressedBetInfo{
    pub merkle_tree:Pubkey,
    pub num_transactions:u64,
    pub authority:Pubkey
}

#[derive(Accounts)]
pub struct AddCompressedBet<'info>{
#[account(mut,has_one=authority,has_one=merkle_tree)]
pub compressed_bet_info: Account<'info, CompressedBetInfo>,
pub merkle_tree: AccountInfo<'info>,
pub authority: Signer<'info>,
pub compression_program: Program<'info, SplAccountCompression>,
/// CHECK: This is safe because it's only used as a signing account
pub noop: UncheckedAccount<'info>,
}

#[derive(Accounts)]
pub struct InitCompressedBet{
    pub compressed_bet_info:Account<'info,CompressedBetInfo>,
    #[account(mut)]
    pub merkle_tree:AccountInfo<'info>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}