# API Integration  

Our project integrates with cryptocurrency APIs to fetch real-time market data.  

## How We Fetch Data  
We use **Axios** for API calls, and **React Query** for caching and background updates.  

### Example: Fetching Crypto Prices  
```ts
import axios from 'axios';

const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching prices:', error);
    throw error;
  }
};
