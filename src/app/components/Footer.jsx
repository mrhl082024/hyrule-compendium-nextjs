import githubLogo from "../../assets/logos/github-mark-white.png";
export default function Footer() {
  return (
    <footer className="relative w-[100%] bg-green-950 border-t-4 border-emerald-700 border-double flex items-center flex-col p-[20px]">
      <p>This was made using Next.js and Tailwindcss.</p>
      <a href="https://github.com/mrhl082024" target="_blank">
        <img
          src={githubLogo.src}
          alt="github logo"
          className="w-[30px] h-[30px]"
        />
      </a>
    </footer>
  );
}
