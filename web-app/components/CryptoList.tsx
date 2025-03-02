import React, { useState } from "react";
import { Crypto as ApiCrypto } from "../utils/api";

interface CryptoListProps {
  ApiCrypto: ApiCrypto[];
  searchTerm: string;
}

const CryptoList: React.FC<CryptoListProps> = ({ ApiCrypto, searchTerm }) => {
  const [sortKey, setSortKey] = useState<"name" | "current_price">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Sorting Function
  const sortData = (key: "name" | "current_price") => {
    const newOrder = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortOrder(newOrder);
  };

  // Filter and Sort Data before Rendering
  const filteredPrices = ApiCrypto.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredPrices].sort((a, b) => {
    const factor = sortOrder === "asc" ? 1 : -1;
    if (typeof a[sortKey] === "string") {
      return (
        (a[sortKey] as string).localeCompare(b[sortKey] as string) * factor
      );
    }
    return ((a[sortKey] as number) - (b[sortKey] as number)) * factor;
  });

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th onClick={() => sortData("name")} style={{ cursor: "pointer" }}>
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
  );
};

export default CryptoList;