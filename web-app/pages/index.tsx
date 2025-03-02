import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices, Crypto } from '../utils/api';
import CryptoList from '../components/CryptoList';
import SearchBar from '../components/SearchBar';
import RefreshButton from '../components/RefreshButton';
import { ClipLoader } from 'react-spinners'; // Import spinner

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data, error, refetch, isLoading } = useQuery<Crypto[]>({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    staleTime: 60000, // cache for 1 minute
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center">🚀 Crypto Price Tracker</h1>
      <RefreshButton onRefresh={refetch} />

      {/* Show Loading Spinner */}
      {isLoading && (
        <div className="d-flex justify-content-center my-4">
          <ClipLoader size={50} color="#007bff" />
        </div>
      )}

      {/* Show Error Message if API Fails */}
      {error && <p className="text-danger text-center">⚠️ Error fetching data.</p>}

      {/* Show Data if Loaded */}
      {data && <CryptoList prices={data} searchTerm={searchTerm} />}
    </div>
  );
};

export default Home;