// import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import axios from "axios";

// interface Currency {
//   name: string;
//   symbol: string;
// }

// interface CoinContextType {
//     solPrice: number | null;
//     setSolPrice: React.Dispatch<React.SetStateAction<number | null>>;
//     fetchCall: number | null;
//     setFetchCall: React.Dispatch<React.SetStateAction<number>>;
//   currency: Currency;
// }

// const CoinContext = createContext<CoinContextType | undefined>(undefined);

// export const CoinContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [solPrice, setSolPrice] = useState<number | null>(null);
//     const [fetchCall, setFetchCall] = useState<number>(1);
//   const [currency] = useState<Currency>({
//     name: "usd",
//     symbol: "$",
//   });

//   const fetchSol = async () => {
//     try {
//       const response = await axios.get(
//         'https://api.coingecko.com/api/v3/coins/markets', 
//         { params: { vs_currency: currency.name, ids: 'solana' } }
//       );
//       setSolPrice(response.data[0].current_price);
//     } catch (error) {
//       console.error("Error fetching Solana price:", error);
//     }
//   };

//   useEffect(() => {
//     fetchSol(); // Initial fetch
//   }, [fetchCall]);

//   return (
//     <CoinContext.Provider value={{ solPrice, currency , fetchCall , setFetchCall, setSolPrice}}>
//       {children}
//     </CoinContext.Provider>
//   );
// };

// export const useCoinContext = (): CoinContextType => {
//   const context = useContext(CoinContext);
//   if (!context) {
//     throw new Error("useCoinContext must be used within a CoinContextProvider");
//   }
//   return context;
// };
