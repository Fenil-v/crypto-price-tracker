import React, { useState } from "react";
import { useCryptoPrices } from "../hooks/useCryptoPrices";

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
}

const CryptoList: React.FC = () => {
  const { data, isLoading, error } = useCryptoPrices();
  const [sortKey, setSortKey] = useState<"name" | "current_price">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <p>Loading prices...</p>;
  if (error) return <p>Failed to load data. Please try again later.</p>;

  // Sorting Function
  const sortData = (key: "name" | "current_price") => {
    const newOrder = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortOrder(newOrder);
  };

  // Filtered and Sorted Data
  const filteredPrices =
    data?.filter((crypto: Crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const sortedData = [...filteredPrices].sort((a: Crypto, b: Crypto) => {
    if (!sortKey) return 0;
    const factor = sortOrder === "asc" ? 1 : -1;
    if (typeof a[sortKey] === "string") {
      return (
        (a[sortKey] as string).localeCompare(b[sortKey] as string) * factor
      );
    }
    return ((a[sortKey] as number) - (b[sortKey] as number)) * factor;
  });

  return (
    <div className="container mt-4">
      <h2>Crypto Price Tracker</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search crypto..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th
                onClick={() => sortData("name")}
                style={{ cursor: "pointer" }}
              >
                Name{" "}
                {sortKey === "name" ? (sortOrder === "asc" ? "🔼" : "🔽") : ""}
              </th>
              <th>Symbol</th>
              <th
                onClick={() => sortData("current_price")}
                style={{ cursor: "pointer" }}
              >
                Price (USD){" "}
                {sortKey === "current_price"
                  ? sortOrder === "asc"
                    ? "🔼"
                    : "🔽"
                  : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((crypto) => (
              <tr key={crypto.id}>
                <td>
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    width={30}
                    height={30}
                  />{" "}
                  {crypto.name}
                </td>
                <td>{crypto.symbol.toUpperCase()}</td>
                <td>${crypto.current_price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;
