import React, { createContext, useReducer, useState } from "react";
import { minesInitialState, minesReducer } from "./minesReducer";

export const minesContext = createContext(null);

const MinesProvider = ({ children }) => {
  const [minesState, minesDispatch] = useReducer(
    minesReducer,
    minesInitialState
  );

  return (
    <minesContext.Provider value={{ minesState, minesDispatch }}>
      {children}
    </minesContext.Provider>
  );
};

export default MinesProvider;
