import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* tailwind: */}
      {/* <body className="bg-white dark:bg-black text-gray-900 dark:text-white"> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
