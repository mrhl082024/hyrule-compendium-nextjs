"use client";
import { useContext } from "react";
import { Context } from "../ContextWindow.jsx";

export default function EntryIdCards() {
  const { cache, entryId } = useContext(Context);
  return (
    <>
      {cache[entryId] && (
        <section className="grid grid-cols-5 justify-items-center bg-[url(../assets/fanart/1133045.jpg)] bg-fixed">
          {cache[entryId].map((data, id) => (
            <div key={id}>
              <div className="bg-amber-900/80 w-[170px] h-[190px] flex flex-col pt-[10px] px-[10px] border-solid border-[2px] rounded-[8px] border-emerald-700">
                <img src={data.image} alt="" className="w-[150px] h-[150px]" />
                <p className="leading-[30px] self-center">{data.id} </p>
              </div>
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
