import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      test
      <p>so this is next.js</p>
      <Link href={"/test"}>click me test!</Link>
    </div>
  );
}
