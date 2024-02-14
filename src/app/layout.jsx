// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import "./globals.css";


export const metadata = {
  title: "Content Fleet Project",
  description: "Code Challenge for Content Fleet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
