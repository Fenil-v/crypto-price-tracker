import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices, Crypto as ApiCrypto } from "../utils/api";
import CryptoList from "../components/CryptoList";
import RefreshButton from "../components/RefreshButton";
import { ClipLoader } from "react-spinners";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, error, refetch, isLoading } = useQuery<ApiCrypto[]>({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    staleTime: 60000,
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center">🚀 Crypto Price Tracker</h1>
      <RefreshButton onRefresh={refetch} />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a cryptocurrency..."
        className="form-control my-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Show Loading Spinner */}
      {isLoading && (
        <div className="d-flex justify-content-center my-4">
          <ClipLoader size={50} color="#007bff" />
        </div>
      )}

      {error && (
        <p className="text-danger text-center">⚠️ Error fetching data.</p>
      )}

      {data && <CryptoList ApiCrypto={data} searchTerm={searchTerm} />}
    </div>
  );
};

export default Home;
