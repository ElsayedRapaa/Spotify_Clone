import React, { createContext, useContext, useReducer } from "react";

export const DataContext = createContext();

export default function SpotifyData({ initialState, reducer, children }) {
  const value = useReducer(reducer, initialState);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export const useDataValue = () => useContext(DataContext);
