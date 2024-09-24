import React, { createContext, useReducer } from "react";
import { reducer,initialState  } from "@/Reducer/reducer";

export const UpdateStorageContext = createContext();

export const UpdateStorageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UpdateStorageContext.Provider value={{ state, dispatch }}>
      {children}
    </UpdateStorageContext.Provider>
  );
};