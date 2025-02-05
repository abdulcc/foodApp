import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.png";

import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={Logo} alt="food in a plate" priority />
          NextLevel food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals"> Browse Meals </NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodies conmunity </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
