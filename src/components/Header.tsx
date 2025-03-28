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
        <img src={headerLogo} alt="header logo" />
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
