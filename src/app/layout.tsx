import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Shareen Artistry | Professional Makeup Artist",
  description:
    "Professional makeup artistry for weddings, editorial, special events, and more. Book your session with Shareen today.",
  openGraph: {
    title: "Shareen Artistry",
    description: "Professional makeup artistry for every occasion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="min-h-screen bg-[#fdf8f5] text-[#2c1810] font-[family-name:var(--font-lato)]">
        {children}
      </body>
    </html>
  );
}
