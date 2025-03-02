# Challenges & Solutions 🚀  

During the development of the Crypto Price Tracker, we encountered several challenges. Below are the top four challenges we faced and how we resolved them.  

---

## 🚧 Challenges
**Problem:**  
1) The API had strict rate limits, causing failures when too many requests were made in a short time.  

**Solution:**  
✔ Implemented **React Query’s caching** to reduce unnecessary API calls.  
✔ Used **exponential backoff** to retry failed requests.  

### ✅ Example: API Retry Mechanism  
```ts
const useCryptoPrices = () => {
  return useQuery('cryptoPrices', fetchCryptoPrices, {
    retry: 3, 
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), 
  });
};

2) Managing Global State Efficiently
Problem:
Using React’s built-in state (useState, useContext) led to performance issues due to frequent re-renders.

Solution:
✔ Switched to Zustand for lightweight state management.
✔ Used React Query for background data fetching and caching.

✅ Example: Zustand for Global State
ts
Copy
Edit
import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

3) Handling API Errors Gracefully
Problem:
Unexpected API failures led to blank screens or broken UI.

Solution:
✔ Implemented proper error handling with fallback UI.
✔ Displayed meaningful error messages to users.

✅ Example: Handling API Errors
ts
Copy
Edit
const { data, isLoading, error } = useCryptoPrices();

if (isLoading) return <p>Loading prices...</p>;
if (error) return <p>Failed to load data. Please try again later.</p>;