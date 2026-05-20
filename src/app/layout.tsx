import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { seo, siteUrl } from "@/lib/seo";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | Amirreza Bagherzadeh`,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: "Amirreza Bagherzadeh Portfolio",
  authors: [{ name: "Amirreza Bagherzadeh", url: siteUrl }],
  creator: "Amirreza Bagherzadeh",
  publisher: "Amirreza Bagherzadeh",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: siteUrl,
    siteName: "Amirreza Bagherzadeh Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: seo.image,
        width: 1536,
        height: 1024,
        alt: "Premium AI automation portfolio visual for Amirreza Bagherzadeh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${bodoniModa.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
