"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "@/app/ContextWindow";
import "../styles/globals.css";
import headerLogo from "../assets/logos/zelda-botw-logo.png";

export default function Header() {
  const { test, setTest } = useContext(Context);
  const router = useRouter();
  const categories = [
    "Creatures",
    "Equipment",
    "Materials",
    "Monsters",
    "Treasure",
  ];
  console.log(test);

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
              router.push("/compendium");
            }}
          >
            {name}
          </button>
        ))}
      </section>
    </>
  );
}
