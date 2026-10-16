import Link from "next/link";
import Image from "next/image";

const directory = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Resume",
    link: "/resume",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const listDirectory = directory.map((navItem) => (
    <li
      key={navItem.link}
      className="flex content-center"
    >
      <Link href={navItem.link} className="p-1 flex items-center transition hover:shadow-lg shadow-white hover:scale-110 hover:text-black hover:bg-white">{navItem.name}</Link>
    </li>
  ));
  return (
    <nav className="flex flex-column bg-black text-white w-screen justify-between h-20">
      <h1 className="self-center justify-start px-5">
        <Link href="/">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/6017/6017412.png"
            width={20}
            height={20}
            alt="place-holder logo"
            className="bg-white rounded-lg"
          />
        </Link>
      </h1>
      <ul className="flex m-2">{listDirectory}</ul>
    </nav>
  );
}
