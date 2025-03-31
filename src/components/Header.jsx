import headerLogo from "../assets/logos/zelda-botw-logo.jpg";

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
          <button key={id}>{name} </button>
        ))}
      </section>
    </>
  );
}
