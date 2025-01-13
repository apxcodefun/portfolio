import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "./loading"; // Import komponen loading

export const metadata = {
  title: "My Site",
  description: "This Is My Personal Site",
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true); // Tambahkan state loading

  useEffect(() => {
    // Simulasikan loading selama 3 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Bersihkan timer jika komponen unmount
  }, []);

  return (
    <html lang="en" data-theme="forest">
      <body>
        {loading ? ( // Jika loading, tampilkan komponen Loading
          <Loading />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
