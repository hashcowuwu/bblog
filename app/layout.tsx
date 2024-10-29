import "./globals.css";
import Footer from "./components/Footer";
import KindTitle from "./components/KindTitle";
import Header from "./components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative h-full">
        <Header />
         {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}