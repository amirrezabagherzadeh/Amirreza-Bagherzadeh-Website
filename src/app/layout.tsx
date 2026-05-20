import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
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
  title: "Amirreza Bagherzadeh | Voice AI Automation Specialist",
  description:
    "Premium personal portfolio for Amirreza Bagherzadeh, Head of Technology Department at Dubai Elite Investments By Al Maktoum and Voice AI Automation Specialist in Dubai.",
  keywords: [
    "Amirreza Bagherzadeh",
    "Voice AI Automation",
    "AI Automation Engineer",
    "Dubai Elite Investments By Al Maktoum",
    "Digital Marketing",
    "Web Design",
  ],
  openGraph: {
    title: "Amirreza Bagherzadeh | Voice AI Automation Specialist",
    description:
      "Practical AI automation, Voice AI receptionist systems, digital strategy, and web experiences for businesses.",
    type: "website",
    locale: "en_US",
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
