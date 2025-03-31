"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const [test, setTest] = useState(["not working"]);
  return (
    <Context.Provider value={{ test, setTest }}>{children}</Context.Provider>
  );
};
