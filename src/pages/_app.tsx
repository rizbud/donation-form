import "~/styles/globals.css";

import { Poppins } from "@next/font/google";

import type { AppProps } from "next/app";

const inter = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
