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
        <img
          src="../assets/logos/zelda-botw-logo.jpg"
          alt="zelda-botw-logo"
          class="w-8 h-16"
        />
      </section>
      <section>
        {categories.map((name, id) => (
          <button key={id}>{name} </button>
        ))}
      </section>
    </>
  );
}
