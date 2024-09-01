import { Chivo } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const chivo = Chivo({ subsets: ["latin"], weight: ["400", "900"] });

export const metadata = {
  title: "E-Commerce",
  description: "By Joan Diaz Estigarribia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
