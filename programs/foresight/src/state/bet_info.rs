use anchor_lang::*;

//EOB means end of bet.

//rebase bearorbull to this enum
// #[derive(AnchorSerialize, AnchorDeserialize, Clone, Default)]
// enum BetState{
//     Increase,
//     Decrease
// }

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Default)]
pub struct BetInfo{
    pub sender:Pubkey,
    pub receiver:Pubkey,
    pub amount:lamports,
    pub betid: u16, //give proper type annotations.
    pub bearorbull: bool, //maybe change to a bool as trait implementation is a bitch.
    pub dividenddispersed: bool, //whether the state of users bet has been decided according to final price
    pub betresultdetails:DividendDistributionDetails  //dont want this to be declared right away.
    //implement default value above as false
}

//keep a log of all transactions, whether by ppl or PDA.

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Default)]
pub struct DividendDistributionDetails{
    pub winningamt:lamports,
    pub dispersaltime:String,
    pub oddsateob:String, //type annotations for this as its a/b
    
}

