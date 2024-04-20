import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import MainContextWrapper from "./Components/ContextApi/MainContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContextWrapper>
          <Navbar />
          {children}
        </MainContextWrapper>
      </body>
    </html>
  );
}