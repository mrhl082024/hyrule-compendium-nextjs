"use client";
import { useContext } from "react";
import { Context } from "../ContextWindow.jsx";

export default function EntryIdCards() {
  const { cache, entryId } = useContext(Context);
  return (
    <>
      {cache[entryId] && (
        <section className="grid grid-cols-5">
          {cache[entryId].map((data, id) => (
            <div key={id}>
              <img src={data.image} alt="" />
              <p>{data.id} </p>
              <details>
                <summary>{data.name} </summary>
                <p>{data.description} </p>
                {data.common_locations && (
                  <ul>
                    Common Locations:
                    {data.common_locations.map((location, i) => (
                      <li key={i}>{location}</li>
                    ))}
                  </ul>
                )}
                {data.drops && data.drops[0] && (
                  <ul>
                    Drops:
                    {data.drops.map((drop, i) => (
                      <li key={i}>{drop}</li>
                    ))}
                  </ul>
                )}
              </details>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
