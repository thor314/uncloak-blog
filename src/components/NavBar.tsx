import React from "react";
import Link from "next/link";
import Image from 'next/image';
import SearchBar from './SearchBar';
import styles from '@/styles/NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.NavBar}>
      <nav className={styles.navLinks}>
        <Link href="/" className={styles.brand}>
          <Image src='https://wiki.uncloak.org/uncloak-head.jpg' width={34} height={34} alt='Uncloak Logo'/>
          Uncloak Blog
        </Link>
        <a href="https://uncloak.org">Back to Wiki</a>
      </nav>
      <SearchBar/>
    </header>
  );
}
