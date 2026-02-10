import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/contexts/LenisContext";
import Cursor from "@/components/Cursor";
import Noise from '../components/Noise'

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Zakaria — Graphic Designer",
  description: "Visual & graphic design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <LenisProvider>
          <Noise
            patternSize={250}
            patternScaleX={2}
            patternScaleY={2}
            patternRefreshInterval={2}
            patternAlpha={15}
          />
          <Cursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
