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
        <div className="static bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <Header />
         {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}