import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="top-bar">
        {/* <hr
          role="separator"
          aria-orientation="horizontal"
          // class="v-divider theme--dark"
        /> */}
        <Link href="/" className="nav-uncloak-link">Uncloak Blog</Link>
        <a href="https://uncloak.org" className="nav-back-button">Back to Wiki</a>
        <div className="nav-search-bar-container">
          <input type="text" className="nav-search-bar-input" placeholder="Search" />
        </div>
        {/* todo tags button */}
      </nav>
    </>
  );
}
