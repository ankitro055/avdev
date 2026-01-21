import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";

// Optimized Google Font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "Arial"],
  preload: true,
});

// Comprehensive SEO Metadata
export const metadata = {
  title: {
    default: "AV Development | Best Web Development Company in Delhi NCR",
    template: "%s | AV Development"
  },
  description: "Professional web design, e-commerce solutions & MERN stack development in Delhi NCR. Affordable custom websites, mobile apps & digital solutions. Get free consultation!",
  keywords: "web development company Delhi, e-commerce development, MERN stack developers, web design services, mobile app development, SEO services Delhi, digital marketing",
  
  metadataBase: new URL("https://www.avdevelopment.in"),
  alternates: {
    canonical: "/",
  },
  
  // Open Graph for Social Media
  openGraph: {
    title: "AV Development | Best Web Development Company in Delhi NCR",
    description: "Professional web design, e-commerce solutions & MERN stack development. Transform your digital presence with our expert team.",
    url: "https://www.avdevelopment.in",
    siteName: "AV Development",
    images: [
      {
        url: "/myLogo.png",
        width: 1200,
        height: 630,
        alt: "AV Development - Web Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["avdevelopment.contact@gmail.com"],
    phoneNumbers: ["+919718659236"],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "AV Development | Web Development Company Delhi NCR",
    description: "Professional web development, e-commerce & mobile app solutions. Serving Delhi NCR with cutting-edge digital solutions.",
    images: ["/myLogo.png"],
    creator: "@avdevelopment",
    site: "@avdevelopment",
  },
  
  // Robots & Crawling
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (Add your actual codes)
  verification: {
    // google: "your-google-search-console-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  
  // Additional Meta
  category: "technology",
  classification: "Web Development Services",
  author: "AV Development",
  publisher: "AV Development",
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
  },
};

// Performance preload links
const preloadLinks = [
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
  { rel: "preconnect", href: "https://res.cloudinary.com", crossOrigin: "" },
  { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
  { rel: "dns-prefetch", href: "https://res.cloudinary.com" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} itemScope itemType="https://schema.org/Organization">
      <head>
        {/* Character Set */}
        <meta charSet="utf-8" />
        
        {/* Performance & Resource Hints */}
        {preloadLinks.map((link, index) => (
          <link
            key={index}
            rel={link.rel}
            href={link.href}
            crossOrigin={link.crossOrigin}
          />
        ))}
        
        {/* Icons & Favicon */}
        <link rel="icon" href="/myLogo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/myLogo.png" />
        <link rel="shortcut icon" href="/myLogo.png" type="image/png" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/myLogo.png" as="image" type="image/png" />
        
        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes"
        />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#361259" />
        <meta name="msapplication-TileColor" content="#361259" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Mobile App Meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AV Development" />
        
        {/* Additional SEO Meta */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="language" content="en" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        
        {/* Business Info */}
        <meta name="business:contact_data:locality" content="Delhi" />
        <meta name="business:contact_data:region" content="Delhi NCR" />
        <meta name="business:contact_data:postal_code" content="110042" />
        <meta name="business:contact_data:country_name" content="India" />
      </head>

      <body className="antialiased" itemScope itemType="https://schema.org/WebPage">
        <LayoutClientWrapper>{children}</LayoutClientWrapper>

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.avdevelopment.in#organization",
                name: "AV Development",
                url: "https://www.avdevelopment.in",
                logo: "https://www.avdevelopment.in/myLogo.png",
                description: "Professional web development company offering custom websites, e-commerce solutions, and mobile app development services in Delhi NCR.",
                email: "avdevelopment.contact@gmail.com",
                telephone: "+919718659236",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Burari",
                  addressLocality: "Delhi",
                  addressRegion: "Delhi NCR",
                  postalCode: "110042",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 28.7410,
                  longitude: 77.1813,
                },
                areaServed: "Delhi NCR",
                sameAs: [
                  "https://www.linkedin.com/company/av-development",
                  "https://github.com/avdevelopment",
                  "https://www.instagram.com/avdevelopment",
                ],
                foundingDate: "2023",
                employees: "1-10",
                knowsAbout: [
                  "Web Development",
                  "E-commerce Solutions",
                  "MERN Stack",
                  "Mobile App Development",
                  "SEO Optimization",
                  "Digital Marketing",
                ],
                serviceArea: {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 28.7410,
                    longitude: 77.1813,
                  },
                  geoRadius: "50000",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.avdevelopment.in#localbusiness",
                name: "AV Development",
                image: "https://www.avdevelopment.in/myLogo.png",
                url: "https://www.avdevelopment.in",
                telephone: "+919718659236",
                email: "avdevelopment.contact@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Burari",
                  addressLocality: "Delhi",
                  addressRegion: "Delhi NCR",
                  postalCode: "110042",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 28.7410,
                  longitude: 77.1813,
                },
                openingHours: "Mo-Fr 09:00-18:00",
                priceRange: "$$",
                serviceArea: {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 28.7410,
                    longitude: 77.1813,
                  },
                  geoRadius: "50000",
                },
                knowssAbout: [
                  "Web Development",
                  "E-commerce Development",
                  "MERN Stack",
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Mobile App Development",
                  "SEO Services",
                ],
                makesOffer: [
                  {
                    "@type": "Offer",
                    name: "Website Development",
                    description: "Custom website development services",
                  },
                  {
                    "@type": "Offer",
                    name: "E-commerce Solutions",
                    description: "Online store development and optimization",
                  },
                  {
                    "@type": "Offer",
                    name: "Mobile App Development",
                    description: "Cross-platform mobile application development",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.avdevelopment.in#website",
                url: "https://www.avdevelopment.in",
                name: "AV Development",
                description: "Professional web development company in Delhi NCR",
                publisher: {
                  "@id": "https://www.avdevelopment.in#organization",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://www.avdevelopment.in/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
                inLanguage: "en-US",
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.avdevelopment.in",
                  },
                ],
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}

git 
 