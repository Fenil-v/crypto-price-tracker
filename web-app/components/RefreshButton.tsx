import React from 'react';

interface RefreshButtonProps {
  onRefresh: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh }) => {
  return (
    <button className="btn btn-primary my-3" onClick={onRefresh}>
      Refresh Prices
    </button>
  );
};

export default RefreshButton;
