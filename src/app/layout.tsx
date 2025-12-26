import "./globals.css";
import TopBanner from "../components/layout/TopBanner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

