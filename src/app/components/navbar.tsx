import Link from "next/link";

const directory: object[] = [
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
      key={directory.indexOf(navItem)}
      className="p-1 transition hover:shadow-lg shadow-white hover:scale-110 hover:text-black hover:bg-white"
    >
      <Link href={navItem.link}>{navItem.name}</Link>
    </li>
  ));
  return (
    <nav className="flex bg-black text-white w-screen justify-between">
      <h1 className="flex self-center justify-start px-5">
        <Link href="/">Steven&apos;s Website</Link>
      </h1>
      <ul className="flex self-center px-2">{listDirectory}</ul>
    </nav>
  );
}
