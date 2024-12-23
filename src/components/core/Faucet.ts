import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import { toast } from "sonner";
interface AirdropError extends Error {
    statusCode?: number;
  }
  
export const Faucet = async(address:string,amount:number)=>{
    
    try {

            const pubKey = new PublicKey(address);
            const connection = new Connection(clusterApiUrl("devnet"),"confirmed");
            const  lamports = amount*LAMPORTS_PER_SOL;
            toast.message(`Requesting ${amount} SOL`);
             const signature = await connection.requestAirdrop(pubKey,lamports);
             await connection.confirmTransaction(signature);
             toast.success(`${lamports} Air Dropped`);
        
    } catch (error:unknown) {
        if(error instanceof Error)
        {
            console.log(error);
            if((error as AirdropError).statusCode === 429){
                toast.warning("Limit reached try after some time");
            }
            toast.error("Error in Air Dropping");
            return;
        }
    }
}   