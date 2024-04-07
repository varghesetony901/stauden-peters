import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale, i18n } from "@/i18n.config";

import TopSection from "@/components/TopSection";
import GoTop from "@/components/GoTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stauden Peters",
  description:
    "Your perennial and grass producer from the Lower Rhine.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang={params.lang}>
        <body className={inter.className}>
          <Toaster />
          <TopSection />
          <Navbar locale={params.lang} />
          {children}
          <GoTop/>
          <Footer locale={params.lang} />
        </body>
      </html>
    </SessionProvider>
  );
}
