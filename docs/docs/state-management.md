# State Management ⚡  

Managing state efficiently is crucial for performance and scalability. In this project, we explored different state management options and chose **Zustand** alongside **React Query** for optimal performance.  

---

## 🔹 Why Not `useState` or `useContext`?  
Using React’s built-in state management (`useState`, `useContext`) led to **performance issues** due to excessive re-renders, especially when dealing with frequently updated data like cryptocurrency prices.  

---

## 🏆 Why We Chose Zustand?  
Zustand is a lightweight and scalable state management library. Here’s why we used it:  
✔ **Minimal boilerplate** – Simple to set up and use.  
✔ **Global state management** – Easy access to shared state across components.  
✔ **Improved performance** – Avoids unnecessary re-renders.  

### ✅ Example: Zustand for User State  
```ts
import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
