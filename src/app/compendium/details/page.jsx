"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { Context } from "../../ContextWindow";

export default function Details() {
  const { cache, entryId } = useContext(Context);
  return (
    <>
      <Header />
      <section>
        {cache[entryId].map((data, id) => (
          <div className="bg-amber-900/80 w-[100%]">
            <section>
              <img src="" alt="" />
              <p>name</p>
              <p>id</p>
            </section>
            <section>
              <p>{data.description} </p>
              {data.common_locations && (
                <ul>
                  Common Locations:
                  {data.common_locations.map((location, i) => (
                    <li key={i}>{location}</li>
                  ))}
                </ul>
              )}
            </section>
            <section>
              {data.drops && data.drops[0] && (
                <ul>
                  Drops:
                  {data.drops.map((drop, i) => (
                    <li key={i}>{drop}</li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
