import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="top-bar">
        <hr
          role="separator"
          aria-orientation="horizontal"
          // class="v-divider theme--dark"
        />
        <Link href="/">Uncloak Blog</Link>
        <a href="https://uncloak.org">Back to Wiki</a>
        {/* todo search bar */}
        {/* todo tags button */}
      </nav>
    </>
  );
}
