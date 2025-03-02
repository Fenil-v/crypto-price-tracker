```markdown
# 🚀 Crypto Price Tracker

A **Next.js & TypeScript** application that fetches live cryptocurrency prices using **React Query** and provides features like **search, sorting, and auto-refresh**.  

![Crypto Price Tracker](https://imgur.com/Wi2uBZG.png) 

---

## 🌟 Features

✅ **Live Crypto Prices** - Fetches real-time data from an API  
✅ **Search Functionality** - Easily filter cryptocurrencies by name  
✅ **Sorting** - Sort coins by **name** or **price (ascending/descending)**  
✅ **Auto-Refresh** - Refresh data at the click of a button  
✅ **Responsive UI** - Optimized for both desktop and mobile  

---

## 📦 Tech Stack

- **Next.js** - React-based framework for SSR  
- **TypeScript** - Strongly typed JavaScript  
- **React Query** - Efficient data fetching & caching  
- **Bootstrap** - Responsive styling  
- **React Spinners** - Loading indicators  

---

## 🚀 Installation & Setup

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
```

2️⃣ **Install Dependencies**
```sh
npm install
# or
yarn install
```

3️⃣ **Start the Development Server**
```sh
npm run dev
# or
yarn dev
```

---

## 🔧 Project Structure

```
📂 crypto-price-tracker
├── 📁 components         # Reusable UI components
│   ├── CryptoList.tsx    # Displays crypto data in a table
│   ├── RefreshButton.tsx # Refresh button component
│
├── 📁 hooks
│   ├── useCryptoPrices.ts # Custom hook for fetching crypto data
│
├── 📁 pages
│   ├── index.tsx          # Main home page
│
├── 📁 utils
│   ├── api.ts             # API functions for fetching data
│
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

---

## 📡 API Integration

This project fetches cryptocurrency data from **CoinGecko API**.  
To modify API settings, check `utils/api.ts`.  

```ts
export const fetchCryptoPrices = async (): Promise<Crypto[]> => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  return response.json();
};
```

---

## 🛠️ Future Enhancements

🔹 Add **dark mode**  
🔹 Implement **historical price charts**  
🔹 Add **favorite coins tracking**  

---

## 💡 Contributing

Contributions are welcome! 🚀  
1. Fork the repository  
2. Create a new branch (`feature-xyz`)  
3. Commit your changes  
4. Open a **Pull Request**  

---

## 📝 License

📜 MIT License - Feel free to use and modify!  

---

### 💙 Made with ❤️ by [Fenil Vaghasiya](https://github.com/Fenil-v)
```

---

### 🔥 **Why is this `README.md` awesome?**
✅ **Clear Introduction** - What the project does  
✅ **Feature List** - What users get  
✅ **Setup Instructions** - Step-by-step guide  
✅ **Project Structure** - Easy navigation  
✅ **API Details** - Quick reference  
✅ **Future Features** - Roadmap  
