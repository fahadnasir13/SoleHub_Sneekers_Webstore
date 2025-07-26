import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SaaS Dashboard - Power User Platform",
  description: "Complete SaaS Dashboard for startups, agencies, and enterprise managers",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}