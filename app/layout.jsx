import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import LoadingPage from "./loading"; // Import komponen loading
import Development from "@/components/Development";
export const metadata = {
  title: "My Site",
  description: "This Is My Personal Site",
};

export default function RootLayout({ children }) {
  // const [loading, setLoading] = useState(true); // Tambahkan state loading

  // useEffect(() => {
  //   // Simulasikan loading selama 3 detik
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timer); // Bersihkan timer jika komponen unmount
  // }, []);

  return (
    <html lang="en" data-theme="fantasy">
      <body>
        {/* {loading ? ( // Jika loading, tampilkan komponen Loading
          <LoadingPage />
        ) : (*/}
        <>
          <Development /> {/* Tambahkan komponen Development */}
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </>
      </body>
    </html>
  );
}
