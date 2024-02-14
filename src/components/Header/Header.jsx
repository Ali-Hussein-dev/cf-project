"use client";
import Link from "next/link";
import css from "./Header.module.scss";
import { useState } from "react";
const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Services",
    url: "/",
  },
  {
    label: "Blogs",
    url: "/",
  },
  {
    label: "Contact",
    url: "/",
  },
];
//======================================
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={css.header}>
      <nav className={`${css.navbar} ${css.container}`}>
        <Link href="/" className={css.brand}>
          CF
        </Link>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${css.burger} ${menuOpen ? css["is-active"] : ""}`}
        
        >
          <span className={css["burger-line"]}></span>
          <span className={css["burger-line"]}></span>
          <span className={css["burger-line"]}></span>
        </div>
        <div
          className={`${css.menu} ${menuOpen ? css["is-active"] : ""}`}
          id="menu"
        >
          <ul className={css["menu-inner"]}>
            {links.map((link, index) => (
              <li key={index} className={css["menu-item"]} onClick={()=> setMenuOpen(false)}>
                <Link href={link.url} className={css["menu-link"]}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className={`${css["menu-block"]} ${css["primary-btn"]}`}>
          Discover
        </button>
      </nav>
    </header>
  );
};
