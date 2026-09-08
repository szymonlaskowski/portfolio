import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://szymonlaskowski.pl"),
  title: {
    default: "Szymon Laskowski",
    template: "%s · szymonlaskowski.pl",
  },
  description:
    "Studio Szymona Laskowskiego. Strony i aplikacje webowe z redakcyjnym charakterem i dbałością o szczegół.",
  openGraph: {
    title: "Szymon Laskowski · szymonlaskowski.pl",
    description:
      "Studio Szymona Laskowskiego. Strony i aplikacje webowe z redakcyjnym charakterem i dbałością o szczegół.",
    url: "https://szymonlaskowski.pl",
    siteName: "szymonlaskowski.pl",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szymon Laskowski · szymonlaskowski.pl",
    description:
      "Strony i aplikacje webowe z redakcyjnym charakterem. Studio jednej osoby, prowadzone przez Szymona Laskowskiego.",
  },
  keywords: [
    "Szymon Laskowski",
    "Simon Laskowski",
    "szymonlaskowski.pl",
    "front-end developer",
    "programista front-end",
    "projektowanie stron internetowych",
    "aplikacje webowe",
    "Next.js",
    "React",
    "Katowice",
  ],
  authors: [{ name: "Szymon Laskowski" }],
  creator: "Szymon Laskowski",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          defer
          src="https://umami.szymonlaskowski.pl/script.js"
          data-website-id="07b51f4e-e8b4-44ba-b74d-462e0c8b1f72"
          data-domains="www.szymonlaskowski.pl"
        />
      </body>
    </html>
  );
}
