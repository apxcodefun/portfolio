import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "My Site",
  description: "This Is My Personal Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
