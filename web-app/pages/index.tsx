import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices, CryptoPrices } from "../utils/api";
import CryptoList from "../components/CryptoList";
import SearchBar from "../components/SearchBar";
import RefreshButton from "../components/RefreshButton";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, error, refetch, isLoading } = useQuery<CryptoPrices>({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    staleTime: 120000, // 2 minutes cache
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center">Crypto Price Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RefreshButton onRefresh={refetch} />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-danger">Error fetching data.</p>}
      {data && <CryptoList prices={data} searchTerm={searchTerm} />}
    </div>
  );
};

export default Home;
