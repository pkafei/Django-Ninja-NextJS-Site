import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fridge Cleaners | Restaurant Cleaning Services",
  description: "Commercial restaurant cleaning services for cafes, restaurants, and more.",
  keywords: "restaurant cleaning services, restaurant cleaning services near me, kitchen deep cleaning services near me, health inspection checklist of restaurants",
  author: "Your Name",
  openGraph: {
    title: "Fridge Cleaners | Restaurant Cleaning Services",
    description: "Cleaning Services",
    url: "https://fridgecleaners.com",
    type: "website",
    images: [
      {
        url: "https://myawesomewebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview image for Fridge Cleaners",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}