import { createContext, useState, useContext } from 'react';

// 1. Create Context
export const CaptainDataContext = createContext();

// 2. Create Custom Hook

// 3. Create Provider Component
const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to update captain data
  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  // Value to pass to context
  const value = {
    captain,
    isLoading,
    error,
    updateCaptain,
    setIsLoading,
    setError
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
