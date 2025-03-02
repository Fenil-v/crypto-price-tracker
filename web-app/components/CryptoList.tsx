import React from 'react';
import { CryptoPrices } from '../utils/api';

interface CryptoListProps {
  prices: CryptoPrices;
  searchTerm: string;
}

const CryptoList: React.FC<CryptoListProps> = ({ prices, searchTerm }) => {
  const filteredPrices = Object.entries(prices).filter(([key]) =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Cryptocurrency</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {filteredPrices.map(([name, data]) => (
            <tr key={name}>
              <td>{name.toUpperCase()}</td>
              <td>${data.usd.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;