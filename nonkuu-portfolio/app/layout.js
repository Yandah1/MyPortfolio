import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// components
import PageTransition from "./components/ui/PageTransition.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";

// Define the fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main>
          <PageTransition>
            {/* Framer Motion transition will wrap this */}
            {children}
          </PageTransition>
        </main>

        <Footer />  {/* Ensure the footer is added here */}
      </body>
    </html>
  );
}
