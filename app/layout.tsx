import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header, Footer, FloatingButtons } from "@/components/layout";
import { JsonLd } from "@/components/seo";
import { siteConfig } from "@/data/site-config";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'agency ad accounts',
    'Facebook ads agency',
    'Google ads agency',
    'TikTok ads agency',
    'Bing ads agency',
    'digital marketing',
    'advertising agency',
    'Meta ads',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        <JsonLd type="Organization" />
        <JsonLd type="WebSite" />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
