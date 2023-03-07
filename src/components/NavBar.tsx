import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBar from './SearchBar';
import styles from '@/styles/NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.NavBar}>
      <nav className={styles.navLinks}>
        <Link href="/" className={styles.brand}>
          <Image src='https://wiki.uncloak.org/uncloak-head.jpg' width={34} height={34} alt='Uncloak Logo'/>
          <div>
            Uncloak <sub>Blog</sub>
          </div>
        </Link>
        <Button 
          variant='contained'
          startIcon={<ArrowBackIcon/>}
          color='secondary'
          href='https://uncloak.org'
        >Wiki
        </Button>
        {/* TODO: Button styling */}
      </nav>
      <SearchBar/>
    </header>
  );
}
