import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
  <div className="min-h-screen">
    <title>Steven&apos;s Website</title>
    <main>
      {Navbar()}
      <h1 className="flex font-bold justify-center m-5">About Me</h1>
      <div className="about">
        <Image
        width={200}
        height={200}
        src="/IMG_20260510_121454_660.webp"
        alt="me" 
        className="about-image" />
        <div className="about-text">
          <p>
            Hello all, my name is Steven Mossman, I am a first year Computer Science student at Cal Poly.
            I enjoy mountain biking and light novels! Currently learning to build full-stack web applications
            with React, Node.js, and MongoDB through Hack4Impact.
          </p>
        </div>
      </div>
    </main>
    <footer className="footer">
      © 2026 Steven&apos;s Website | All Rights Reserved
    </footer>
  </div>
  )}