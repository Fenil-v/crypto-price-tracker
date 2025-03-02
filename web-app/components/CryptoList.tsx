import React from 'react';
import { Crypto } from '../utils/api';

interface CryptoListProps {
  prices: Crypto[];
  searchTerm: string;
}

const CryptoList: React.FC<CryptoListProps> = ({ prices, searchTerm }) => {
  const filteredPrices = prices.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {filteredPrices.map((crypto) => (
            <tr key={crypto.id}>
              <td>
                <img src={crypto.image} alt={crypto.name} width={30} height={30} /> {crypto.name}
              </td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;