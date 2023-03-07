import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Uncloak Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to the Uncloak blog! We aim to regularly post interactive
            cryptography explainers and demonstrations, particularly in
            zero-knowledge cryptography. Our wiki software does not currently
            support the interactive <a href="https://mdxjs.com/">(React MDX)</a>{" "}
            components we use in our blog, so we use separate sites for each. If
            you&apos;re looking for the wiki, click the back button at the top
            of the page.
            {/* todo: how to follow the blog? */}
          </p>
        </div>
      </main>
    </>
  );
}
