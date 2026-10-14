import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <>
    <title>Steven's Website</title>
    <nav className="navbar">
      <h1 className="logo"><a href="index.html">Steven's Website</a></h1>
      <ul className="nav-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <main>
      <h1 className="page-title">About Me</h1>
      <div className="about">
        <img src="images\IMG_20260510_121454_660.webp" alt="me" className="about-image"/>
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
      © 2026 Steven's Website | All Rights Reserved
    </footer>
  </>
  )}