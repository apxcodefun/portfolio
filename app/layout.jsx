import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ardiansyah Putra",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat px-6 md:px-24 lg:px-40"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed", // Agar background tetap pada posisi yang benar saat scroll
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
