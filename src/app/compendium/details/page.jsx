"use client";
import { useContext } from "react";
import { Context } from "../../ContextWindow";

export default function Details() {
  const { data, entryId, details } = useContext(Context);
  console.log(details);

  return (
    <>
      <div className="bg-[url(../assets/fanart/1133045.jpg)] h-[100svh] bg-fixed w-[100%] flex flex-col gap-[1rem] items-center">
        <section className="w-[300px] rounded-[8px] p-[10px] border-emerald-700 bg-amber-900/80 border-[2px] flex flex-col mt-[1rem]">
          <img
            className="w-[280px] h-[280px] border-[2px] border-emerald-800"
            src={details.image}
            alt="picture of title"
          />
          <h1>{details.name} </h1>
          <p>{details.id} </p>
        </section>
        <section className="w-[300px] bg-amber-900/80 border-[2px] border-emerald-700 rounded-[8px] p-[20px]">
          <p>{details.description} </p>
        </section>
        {details.common_locations && details.common_locations[0] && (
          <section className="w-[300px] bg-amber-900/80 border-[2px] border-emerald-700 rounded-[8px] p-[20px]">
            <ul>
              Common Locations:
              {details.common_locations.map((location, i) => (
                <li key={i}>{location}</li>
              ))}
            </ul>
          </section>
        )}
        {details.drops && details.drops[0] && (
          <section className="bg-amber-900/80 border-[2px] border-emerald-700 rounded-[8px] p-[20px] w-[300px]">
            <ul>
              Drops:
              {details.drops.map((drop, i) => (
                <li key={i}>{drop}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
