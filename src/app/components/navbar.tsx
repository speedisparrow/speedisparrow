import Link from "next/link";

const directory: object[] = [
  {
    name: "Home",
    link: "/",
  },
];

export default function Navbar() {
  const listDirectory = directory.map((navItem) => (
    <li key={directory.indexOf(navItem)}> <Link href={navItem.link}>
      {navItem.name}</Link>
    </li>
  ));
  return (
    <nav className="flex bg-black text-white w-screen justify-between">
      <h1 className="flex box-border justify-start">
        <Link href="/">Steven's Website</Link>
      </h1>
      <ul className="flex px-">{listDirectory}</ul>
    </nav>
  );
}
