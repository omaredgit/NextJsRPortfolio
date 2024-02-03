import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarBackground from './components/main/StarBackground'
import NavBar from './components/main/NavBar'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarBackground />
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
