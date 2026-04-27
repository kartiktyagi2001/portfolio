import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartik Tyagi",
  description: "Full-stack developer specializing in backend-heavy web applications. Open to freelance and full-time opportunities.",
  openGraph: {
    title: "Kartik Tyagi",
    description: "Full-stack developer specializing in backend-heavy web applications.",
    url: "https://kartiktyagi.site",
    siteName: "Kartik Tyagi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kartik Tyagi",
    description: "Full-stack developer specializing in backend-heavy web applications.",
    creator: "@arcbitbit",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="py-6 px-[clamp(1rem,4vw,4rem)] max-w-4xl mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
