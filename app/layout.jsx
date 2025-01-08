import "./globals.css";
import Navbar from "@/components/Navbar";

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
      </body>
    </html>
  );
}
