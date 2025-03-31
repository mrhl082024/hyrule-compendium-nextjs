import headerLogo from "../assets/logos/zelda-botw-logo.webp";

import "../styles/globals.css";

export default function Header() {
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
        <img src={headerLogo} alt="zelda-botw-logo" className="w-20 h-20" />
      </section>
      <section>
        {categories.map((name, id) => (
          <button key={id} className="bg-[rgb(40,40,40)] rounded mx-1">
            {name}{" "}
          </button>
        ))}
      </section>
    </>
  );
}
