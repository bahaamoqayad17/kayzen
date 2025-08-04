import type { Metadata } from "next";
import "./globals.css";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const myFont = localFont({
  src: "../../public/fonts/AvenirArabic-Light.otf",
});

export const metadata: Metadata = {
  title: "شركة كايزن",
  description: "شركة كايزن",
  keywords: "شركة كايزن",
  authors: [{ name: "شركة كايزن", url: "https://kaizen.com" }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/aboutus-logo.png",
    shortcut: "/aboutus-logo.png",
    apple: "/aboutus-logo.png",
  },
  manifest: "/aboutus-logo.png",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <title>شركة كايزن</title>
      <meta name="description" content="شركة كايزن" />
      <meta name="keywords" content="شركة كايزن" />
      <meta name="author" content="شركة كايزن" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/aboutus-logo.png" />
      <body className={`${myFont.className} antialiased`}>
        <NextIntlClientProvider>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
