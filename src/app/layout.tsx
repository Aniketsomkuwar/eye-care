import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jyoti Eye Care | Dr. Ruchita Sontakke | Cataract & Oculoplasty Surgeon Nagpur",
  description:
    "Accessible, ethical, and comprehensive ophthalmic care in Gopal Nagar, Nagpur. Expert micro-incision cataract surgery and oculoplasty led by Dr. Ruchita Sontakke (Ex-SR MAMC New Delhi). Evening OPD 6:30 PM - 9:30 PM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#EEF2F6] text-slate-900 font-sans selection:bg-[#1E5BF9] selection:text-white">
        {children}
      </body>
    </html>
  );
}
