import axios from 'axios';

export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
}

export const fetchCryptoPrices = async (): Promise<Crypto[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_CRYPTO_API_URL;
    console.log(apiUrl);
    if (!apiUrl) {
      throw new Error('NEXT_PUBLIC_API_URL is not defined');
    }
    const response = await axios.get(apiUrl);
    
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cryptocurrency prices with Axios');
  }
};