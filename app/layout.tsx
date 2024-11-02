import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./ThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Xounity",
  description: "Diverse Minds, One Vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"max-w-screen h-screen flex flex-col " + `${geistSans.variable} ${geistMono.variable} antialiased`} >
          <ThemeProvider>
        <Header />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
