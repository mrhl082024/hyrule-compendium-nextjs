"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "@/app/ContextWindow";
import "../styles/globals.css";
import headerLogo from "../assets/logos/zelda-botw-logo.webp";

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
          src={headerLogo}
          alt="zelda-botw-logo"
          onClick={() => {
            router.push("/");
          }}
          className="w-20 h-20"
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
