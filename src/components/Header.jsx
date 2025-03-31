"use client";
import Link from "next/link";
import headerLogo from "../assets/logos/zelda-botw-logo.webp";
import { useRouter } from "next/navigation";
import "../styles/globals.css";

export default function Header() {
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
