import type { Metadata } from "next";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { DevSwitcher } from "@/components/dev/dev-switcher";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elysian Leaders | High-Ticket Distribution Systems",
  description: "Architecting financial sovereignty through scalable distribution frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <DevSwitcher />
      </body>
    </html>
  );
}
