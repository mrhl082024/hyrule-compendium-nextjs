"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const DataProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [entryId, setEntryId] = useState("");
  const [data, setData] = useState();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (!category || !entryId) return;

    async function fetchData() {
      try {
        const result = await fetch(
          `https://botw-compendium.herokuapp.com/api/v3/compendium/${category}/${entryId}`
        );
        const formatted = await result.json();
        setData(formatted.data);
        console.log(formatted);
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchData();
  }, [category, entryId]);

  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        entryId,
        setEntryId,
        data,
        setData,
        details,
        setDetails,
      }}
    >
      {children}
    </Context.Provider>
  );
};
