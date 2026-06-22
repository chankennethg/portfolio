import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenneth Chan — Senior Backend Engineer & Technical Lead",
  description:
    "10+ years building scalable backend systems with PHP, Laravel, and AWS. Open to remote Senior/Lead Backend roles.",
  openGraph: {
    title: "Kenneth Chan — Senior Backend Engineer & Technical Lead",
    description:
      "10+ years building scalable backend systems with PHP, Laravel, and AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
