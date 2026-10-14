import Link from "next/link";

export default function Navbar() {
  return (
    <html>
      <nav className="navbar">
        <h1 className="logo">
          <Link href="/">Steven's Website</Link>
        </h1>
        <ul className="nav-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
           
          </li>
          <li>
            
          </li>
          <li>
           
          </li>
          <li>
            
          </li>
        </ul>
      </nav>
    </html>
  );
}
