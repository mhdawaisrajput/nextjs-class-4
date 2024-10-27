import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children} <br /><br />


        {/* Step 01 >>> Link {Header()} w.r.t import Header from "./header"; */}

        {/* Difference between:
        
        Header() >>> Ye Html k syntyx ko execute krta hai like: Header().
        {Header()} >>> Ye jsx  me Header k andar k function ko return krta hai
        
        */}

        {/* Steo 02 >>> Link Header Like : <Header />, w.r.t import Header from "./header";*/}
        <Header />
        
          {/* Error >>> <header /> , bcz jsx it case sensitive */}

      </body>
    </html>
  );
}
