"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextWindow = ({ children }) => {
  const [category, setCategory] = useState("");
  const [entryId, setEntryId] = useState("");
  const [data, setData] = useState();
  const [cache, setCache] = useState({});

  useEffect(() => {
    if (!category || !entryId) return;
    if (cache[entryId]) return;

    try {
      fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/${category}/${entryId}`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res.data);
          setCache({
            ...cache,
            [`${entryId}`]: res.data.toSorted((a, b) => a.id - b.id),
          });
        });
    } catch (error) {
      throw new Error(error);
    } finally {
      //soon tm
    }
  }, [category, entryId]);

  console.log(cache);

  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        entryId,
        setEntryId,
        data,
        setData,
        cache,
        setCache,
      }}
    >
      {children}
    </Context.Provider>
  );
};
