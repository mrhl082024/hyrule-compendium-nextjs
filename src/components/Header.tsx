import headerLogo from "../assets/logos/zelda-botw-logo.webp";
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
        <img src="../assets/logos/zelda-botw-logo.webp" alt="header logo" />
      </section>
      <section>
        {categories.map((name) => (
          <>
            <button>{name} </button>
          </>
        ))}
      </section>
    </>
  );
}
