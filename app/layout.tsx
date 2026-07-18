import type { Metadata } from "next";
import { Barlow_Condensed, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fontDisplay = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Mudanças e Fretes CID | Mudanças Residenciais, Comerciais e Fretes com Caminhão Próprio",
    template: "%s | Mudanças e Fretes CID",
  },
  description: "Mudanças e Fretes CID - Transportamos sua mudança ou carga com caminhão próprio, atendimento direto do motorista, seguro incluso e rastreamento. Solicite orçamento grátis via WhatsApp (67) 9913-0112.",
  keywords: [
    "mudanças residenciais",
    "mudanças comerciais",
    "fretes",
    "transportes",
    "caminhão próprio",
    "mudança Campo Grande",
    "frete MS",
    "mudanças e fretes CID",
    "orçamento mudança",
    "frete caminhão próprio",
  ],
  authors: [{ name: "Mudanças e Fretes CID" }],
  creator: "Mudanças e Fretes CID",
  publisher: "Mudanças e Fretes CID",
  formatDetection: {
    telephone: true,
    address: true,
  },
  metadataBase: new URL("https://mudancasefretescid.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mudancasefretescid.com.br",
    siteName: "Mudanças e Fretes CID",
    title: "Mudanças e Fretes CID | Mudanças e Fretes com Caminhão Próprio",
    description: "Mudanças residenciais, comerciais e fretes com caminhão próprio. Atendimento direto, seguro incluso, rastreamento e orçamento via WhatsApp. (67) 9913-0112",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanças e Fretes CID | Mudanças e Fretes com Caminhão Próprio",
    description: "Mudanças residenciais, comerciais e fretes com caminhão próprio. Atendimento direto, seguro incluso, orçamento via WhatsApp.",
    creator: "@mudancasefretescid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mudancasefretescid.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}