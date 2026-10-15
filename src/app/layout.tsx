import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venue Society — The Magazine for New England's Finest Venues",
  description:
    "An annual print magazine placed in the hands of real buyers. One celebrated venue every month, their story, and the vendors who bring events to life.",
  openGraph: {
    title: "Venue Society Magazine",
    description:
      "One celebrated venue every month — placed in the hands of real buyers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
