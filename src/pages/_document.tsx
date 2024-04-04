import { Html, Head, Main, NextScript } from "next/document";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800', '900']});

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${poppins.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
