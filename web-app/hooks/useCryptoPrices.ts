import { useQuery } from '@tanstack/react-query';

const fetchCryptoPrices = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_CRYPTO_API_URL;
  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_CRYPTO_API_URL is not defined');
  }
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch crypto prices');
  }
  return response.json();
};

// Custom hook to fetch cryptocurrency prices
export const useCryptoPrices = () => {
  return useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    staleTime: 60000, // Cache data for 1 minute
    retry: 2, // Retry twice on failure
  });
};