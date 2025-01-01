import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body>{children}</body>
    </html>
  );
}
