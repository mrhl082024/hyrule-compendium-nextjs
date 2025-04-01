"use client";
import { useContext, useState } from "react";
import { Context } from "../ContextWindow.jsx";
import { useRouter } from "next/navigation";

export default function EntryIdCards() {
  const router = useRouter();
  const { cache, entryId, setDetails } = useContext(Context);

  return (
    <>
      {cache[entryId] && (
        <section className="grid grid-cols-[repeat(5,250px)] justify-center bg-[url(../assets/fanart/1133045.jpg)] bg-fixed gap-[4px]">
          {cache[entryId].map((data, id) => (
            <div key={id}>
              <div className="bg-amber-900/80 w-[200px] h-[200px] flex flex-col pt-[25px] px-[25px] border-solid border-[2px] rounded-t-[8px] border-emerald-700 mt-[1rem]">
                <img
                  src={data.image}
                  alt=""
                  className="w-[150px] h-[150px] rounded-[1rem] border-solid border-[1px] border-green-900"
                />
                <p className="leading-[30px] self-center">{data.id} </p>
              </div>
              <button
                onClick={() => {
                  setDetails(data);
                  router.push("/compendium/details");
                }}
                className="transition ease-in-out bg-amber-900/80 border-b-2 bg-gradient-to-r border-x-2 border-emerald-700   duration-[0.15s] rounded-b-[8px] w-[200px] hover:from-green-900 hover:to-emerald-700 cursor-pointer"
              >
                {data.name}
              </button>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
