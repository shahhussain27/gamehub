import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/favicon.ico" sizes="any" />
     
      <title>GameHub - Store</title>
      <body className="dark:bg-gradient-to-r from-[#020D1A]  to-[#05162a] px-16 max-sm:px-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
