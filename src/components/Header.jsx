"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "@/app/ContextWindow";
import "../styles/globals.css";
import headerLogo from "../assets/logos/zelda-botw-logo.png";

export default function Header() {
  const { setCategory, setEntryId } = useContext(Context);
  const router = useRouter();
  const categories = [
    "Creatures",
    "Equipment",
    "Materials",
    "Monsters",
    "Treasure",
  ];

  return (
    <div className="bg-[url(../assets/fanart/1133044.jpg)]">
      <section>
        <img
          src={headerLogo.src}
          alt="zelda botw logo"
          className="w-[200px]"
          onClick={() => {
            router.push("/");
          }}
        />
      </section>
      <section className="bg-green-900 border-double border-t-4 border-b-4 border-emerald-600">
        {categories.map((name, id) => (
          <button
            key={id}
            onClick={() => {
              setCategory("category");
              setEntryId(name.toLowerCase());
              router.push("/compendium");
            }}
            className="w-[100px] h-[30px] bg-green-900 hover:bg-green-700"
          >
            {name}
          </button>
        ))}
      </section>
    </div>
  );
}
