import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import {SpeedInsights} from "@vercel/speed-insights/next";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nyantaro Cloud",
  description: "The Nyantaro Cloud portal site providing technical information and blog articles. Stay updated with the latest web development trends and useful resources.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${newsreader.variable} ${workSans.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
