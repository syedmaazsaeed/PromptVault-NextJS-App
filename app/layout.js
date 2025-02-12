import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <pre>Software Engineer</pre>
    </html>
  );
}


//  Layout.js is the main entry point of the next js app.
//  It is the first file that is loaded when the app is started.
//  It is used to define the layout of the app.
// All of the components that are used in the app are imported here.
// all of the component are wrapped in the RootLayout component.