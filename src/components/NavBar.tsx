import Link from "next/link";
import Image from 'next/image';
import React from "react";
import styles from '@/styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link href="/" className="nav-uncloak-link">
        <Image src='https://wiki.uncloak.org/uncloak-head.jpg' width={34} height={34} alt='Uncloak Logo'/>
        Uncloak Blog
      </Link>
      <a href="https://uncloak.org" className="nav-back-button">Back to Wiki</a>
      <input type="text" className="nav-search-bar-input" placeholder="Search" />
    </nav>
  );
}
