"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const [test, setTest] = useState("not working");
  const [buttonCategory, setButtonCategory] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/${buttonCategory}/`
      )
        .then((res) => res.json)
        .then((res) => {
          console.log(res);
          setData(res);
        });
    } catch (error) {
      throw new Error(error);
    } finally {
      //soon tm
    }
  }, []);

  return (
    <Context.Provider value={{ test, setTest }}>{children}</Context.Provider>
  );
};
