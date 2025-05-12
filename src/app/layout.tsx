import type { Metadata } from "next";
import { Source_Code_Pro, Urbanist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import WagmiConfig from "./WagmiConfig";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Tools",
  description: "Dev Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} ${sourceCodePro.variable}`}>
        <WagmiConfig>
          <ThemeProvider attribute="class">
            <Toaster
              position="top-right"
              // reverseOrder={false}
              // containerClassName="mt-16 flex ml-[30px]"
              // containerStyle={{}}
              // toastOptions={{
              //   className: "",
              //   duration: 5000,
              //   style: {
              //     background: "#363636",
              //     color: "#fff",
              //   },
              //   success: {
              //     duration: 3000,
              //   },
              //   loading: {
              //     duration: 300000,
              //   },
              // }}
            />

            <Header />
            <div>{children}</div>
            <Footer />
          </ThemeProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
