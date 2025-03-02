import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_CRYPTO_API_URL || '';
if (!API_URL) {
  throw new Error('NEXT_PUBLIC_CRYPTO_API_URL is not defined');
}

export interface CryptoPrices {
  [key: string]: {
    usd: number;
  };
}

export const fetchCryptoPrices = async (): Promise<CryptoPrices> => {
  try {
    const response = await axios.get<CryptoPrices>(API_URL, {
      params: {
        ids: 'bitcoin,ethereum,ripple,cardano,solana',
        vs_currencies: 'usd',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};
