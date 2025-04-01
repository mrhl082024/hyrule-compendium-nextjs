"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { Context } from "../../ContextWindow";

export default function Details() {
  const { cache, entryId, details } = useContext(Context);
  console.log(details);

  return (
    <>
      <Header />
      <div className="bg-[url(../assets/fanart/1133045.jpg)] h-[100svh] bg-fixed w-[100%]">
        <section className="w-[300px] rounded-[8px] p-[10px] border-emerald-700 bg-amber-900/80 border-[2px] flex flex-col">
          <img
            className="w-[280px] h-[280px] border-[2px] border-emerald-800"
            src={details.image}
            alt=""
          />
          <h1>{details.name} </h1>
          <p>{details.id} </p>
        </section>
        <section>
          <p>{details.description} </p>
          {details.common_locations && (
            <ul>
              Common Locations:
              {details.common_locations.map((location, i) => (
                <li key={i}>{location}</li>
              ))}
            </ul>
          )}
        </section>
        <section>
          {details.drops && details.drops[0] && (
            <ul>
              Drops:
              {details.drops.map((drop, i) => (
                <li key={i}>{drop}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
