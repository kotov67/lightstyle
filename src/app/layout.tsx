import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "../../site.config";
import "./globals.css";

const siteFont = localFont({
  src: [
    { path: "../fonts/GreenwayTeamSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GreenwayTeamSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/GreenwayTeamSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/GreenwayTeamSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.brand.seoTitle,
  description: siteConfig.brand.seoDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${siteFont.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
