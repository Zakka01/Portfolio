import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/contexts/LenisContext";
import Cursor from "@/components/Cursor";
import Noise from '../components/Noise'
import {
  poly_bulky,
  poly_bulky_mono,
  poly_bulky_wide,
  poly_median_mono,
  poly_median_wide,
  poly_neutral,
  poly_neutral_mono,
  poly_neutral_wide,
  poly_slim,
  poly_slim_mono,
  poly_slim_wide,
  poly_bulky_italic,
  poly_bulky_mono_italic,
  poly_bulky_wide_italic,
  poly_median_mono_italic,
  poly_median_wide_italic,
  poly_neutral_mono_italic,
  poly_neutral_wide_italic,
  poly_slim_italic,
  poly_slim_mono_italic,
  poly_slim_wide_italic,
} from "./fonts";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Zakaria — Graphic Designer",
  description: "Visual & graphic design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`
       ${geistSans.variable}
        ${geistMono.variable}
        ${poly_bulky.variable}
        ${poly_bulky_mono.variable}
        ${poly_bulky_wide.variable}
        ${poly_median_mono.variable}
        ${poly_median_wide.variable}
        ${poly_neutral.variable}
        ${poly_neutral_mono.variable}
        ${poly_neutral_wide.variable}
        ${poly_slim.variable}
        ${poly_slim_mono.variable}
        ${poly_slim_wide.variable}
        ${poly_bulky_italic.variable}
        ${poly_bulky_mono_italic.variable}
        ${poly_bulky_wide_italic.variable}
        ${poly_median_mono_italic.variable}
        ${poly_median_wide_italic.variable}
        ${poly_neutral_mono_italic.variable}
        ${poly_neutral_wide_italic.variable}
        ${poly_slim_italic.variable}
        ${poly_slim_mono_italic.variable}
        ${poly_slim_wide_italic.variable}
      bg-black
      `}>
      <body className="antialiased">
        <LenisProvider>
          <Cursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
