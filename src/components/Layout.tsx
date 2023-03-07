import React from "react";
import NavBar from "./NavBar";
import { Roboto } from 'next/font/google';

export type LayoutProps = {
    children: React.ReactNode;
};

const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Layout(props: LayoutProps) {
  return (
    <div className={roboto.className}>
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
}
