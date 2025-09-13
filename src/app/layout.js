import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AV Development | Top Web Development Company in Delhi | Very Affordable Websites",
  description: "Delhi's leading web development company offering professional website design, e-commerce solutions & MERN stack development. 24/7 support with free domain + hosting from ₹5,999.",
  keywords: "web design company Delhi, website developers Delhi, affordable web development, e-commerce website Delhi, MERN stack developers",
  authors: [{ name: "AV Development" }],
  robots: "index, follow",
  verification: {
    google: "ZE33IAsG5H7ouzUXdWnwUVBvYwbYmMplNoCivfuz5CQ"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "AV Development: Delhi's Top Software & Development Company",
    description: "Professional website services in Delhi NCR. Custom designs, e-commerce solutions & 24/7 support since 2022.",
    url: "https://www.avdevelopment.in",
    siteName: "AV Development",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Development | Best Software  Company in Delhi",
    description: "Delhi's trusted website and Android App development team offering affordable web solutions with free domain+hosting.",
    images: ["/logo.png"],
    site: "@avdevelopment",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AV Development',
    url: 'https://www.avdevelopment.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.avdevelopment.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const jsonLdBusiness = {
    '@context': 'https://schema.org',
    '@type': 'WebDesignCompany',
    name: 'AV Development',
    url: 'https://www.avdevelopment.in',
    logo: 'https://www.avdevelopment.in/logo.png',
    description: 'Professional web design and development company based in Delhi, India',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Delhi - 110042 Delhi',
      addressLocality: 'Delhi',
      addressRegion: 'DL',
      postalCode: '110042',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6139',
      longitude: '77.2090'
    },
    telephone: '+918750443995',
    openingHours: 'Mo-Sa 10:00-19:00',
    priceRange: '₹2999-₹50000',
    sameAs: [
      'https://facebook.com/avdevelopment.in',
      'https://instagram.com/avdevelopment.in'
    ]
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <NavbarDemo/>
        <main>
          {children}
        </main> 
        <ContactSection/>
        <Footer/>
      </body>
    </html>
  );
}