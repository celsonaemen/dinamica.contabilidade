import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site-content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dinâmica Contabilidade | Contabilidade moderna para empresas",
  description: siteConfig.description,
  applicationName: siteConfig.companyName,
  keywords: [
    "contabilidade",
    "contabilidade empresarial",
    "escritório contábil",
    "departamento pessoal",
    "escrita fiscal",
    "planejamento tributário",
    "abertura de empresa",
  ],
  authors: [{ name: siteConfig.companyName }],
  openGraph: {
    title: "Dinâmica Contabilidade | Contabilidade moderna para empresas",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.companyName,
    images: [
      {
        url: "/logo-dinamica-redonda.png",
        width: 500,
        height: 499,
        alt: "Logo Dinâmica Contabilidade",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo-dinamica-redonda.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071a38",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
