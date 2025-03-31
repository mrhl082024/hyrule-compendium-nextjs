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
    <>
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
      <section>
        {categories.map((name, id) => (
          <button
            key={id}
            onClick={() => {
              setCategory("category");
              setEntryId(name.toLowerCase());
              router.push("/compendium");
            }}
            className="w-[100px] h-[30px] bg-green-900 "
          >
            {name}
          </button>
        ))}
      </section>
    </>
  );
}
