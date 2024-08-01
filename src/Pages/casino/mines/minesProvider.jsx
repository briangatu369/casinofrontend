import React, { createContext, useState } from "react";

export const minesContext = createContext(null);

const MinesProvider = ({ children }) => {
  const [isBusted, setIsBusted] = useState(false);
  const [isHasCashedOut, setHasCashedOut] = useState(false);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);

  return (
    <minesContext.Provider
      value={{ isBusted, setIsBusted, hasGameStarted, setHasGameStarted }}
    >
      {children}
    </minesContext.Provider>
  );
};

export default MinesProvider;
