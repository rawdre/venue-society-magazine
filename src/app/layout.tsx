import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Jost } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Concierge } from "@/components/concierge/Concierge";
import "./globals.css";

// Bodoni Moda: a Didone with real optical sizes — hairline serifs at cover
// sizes, sturdier strokes small. The face behind fashion mastheads.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

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
  metadataBase: new URL("https://venue-society-magazine.vercel.app"),
  title: "Venue Society — The Magazine for New England's Finest Venues",
  description:
    "An annual print magazine placed in the hands of real buyers. One celebrated venue every month, their story, and the vendors who bring events to life.",
  openGraph: {
    title: "Venue Society Magazine",
    description:
      "One celebrated venue every month — placed in the hands of real buyers.",
    type: "website",
    siteName: "Venue Society",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${cormorant.variable} ${jost.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <Concierge />
        </LanguageProvider>
      </body>
    </html>
  );
}
