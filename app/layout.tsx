import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Providers from "@/components/providers";

const montserrat = localFont({
  src: '../public/Montserrat.ttf',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "EduFlow",
  description: "Образование в движении",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </Providers>
      </body>
    </html>
  );
}
