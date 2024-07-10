import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./MTailwind";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          {props.children}
        </body>
      </ThemeProvider>
    </html>
  );
}
