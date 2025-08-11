import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

// Optimized font loading for consistent rendering across devices
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// 🔥 SEO HARDCORE METADATA
export const metadata: Metadata = {
  title: "Global Crédito Porto - Intermediário de Crédito Habitação | Melhores Taxas",
  description: "Global Crédito - Intermediário de crédito habitação no Porto. Pedro Duarte Baptista, autorização BP 0003923. Simulador gratuito, melhores taxas, aprovação 24h. Especialistas em crédito.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords: [
    "crédito habitação porto",
    "intermediário crédito porto", 
    "pedro duarte baptista",
    "global crédito",
    "simulador crédito habitação",
    "melhores taxas crédito",
    "crédito casa porto",
    "financiamento habitação",
    "banco portugal 0003923",
    "crédito jovem porto"
  ],
  authors: [{ name: "Pedro Duarte Baptista" }],
  creator: "Global Crédito",
  publisher: "Global Crédito",
  
  // 🌍 GEOGRAPHIC & LANGUAGE SEO
  alternates: {
    canonical: "https://globalcredito.pt",
    languages: {
      "pt-PT": "https://globalcredito.pt",
    },
  },
  
  // 📱 OPEN GRAPH (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://globalcredito.pt",
    siteName: "Global Crédito Porto",
    title: "Global Crédito Porto - Intermediário de Crédito Habitação",
    description: "Intermediário de crédito habitação no Porto. Autorização BP 0003923. Simulador gratuito, melhores taxas, aprovação em 24h.",
    images: [
      {
        url: "https://globalcredito.pt/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Crédito Porto - Intermediário de Crédito Habitação",
      },
    ],
  },
  
  // 🐦 TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Global Crédito Porto - Intermediário de Crédito Habitação",
    description: "Intermediário de crédito habitação no Porto. Autorização BP 0003923. Simulador gratuito, melhores taxas.",
    images: ["https://globalcredito.pt/og-image.jpg"],
  },
  
  // 🤖 ROBOTS & INDEXING
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
  
  // 📋 ADDITIONAL METADATA
  category: "Financial Services",
  classification: "Business",
  other: {
    "geo.region": "PT-11",
    "geo.placename": "Porto",
    "geo.position": "41.1579;-8.6291",
    "ICBM": "41.1579, -8.6291",
    "DC.title": "Global Crédito Porto - Intermediário de Crédito Habitação",
    "DC.creator": "Pedro Duarte Baptista",
    "DC.subject": "Crédito Habitação, Intermediação Financeira, Porto",
    "DC.language": "pt-PT",
  },
};

// 🏗️ STRUCTURED DATA (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://globalcredito.pt/#organization",
      "name": "Global Crédito",
      "alternateName": "DS Intermediários de Crédito",
      "legalName": "Pedro Duarte Baptista, Unipessoal Lda",
      "url": "https://globalcredito.pt",
      "logo": "https://globalcredito.pt/logo.png",
      "image": "https://globalcredito.pt/og-image.jpg",
      "description": "Intermediário de crédito habitação no Porto. Autorização Banco de Portugal 0003923.",
      "telephone": "+351220998039",
      "email": "pedrobaptista@dsicredito.pt",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Doutor Emílio Peres, 139",
        "addressLocality": "Porto",
        "postalCode": "4050-007",
        "addressCountry": "PT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.1579,
        "longitude": -8.6291
      },
      "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-13:00",
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": [
        {
          "@type": "City",
          "name": "Porto"
        },
        {
          "@type": "Country",
          "name": "Portugal"
        }
      ],
      "serviceType": "Financial Services",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Autorização do Banco de Portugal",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Banco de Portugal"
        },
        "identifier": "0003923"
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://globalcredito.pt/#service",
      "name": "Crédito Habitação",
      "provider": {
        "@id": "https://globalcredito.pt/#organization"
      },
      "serviceType": "Mortgage Brokerage",
      "areaServed": "Porto, Portugal",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Crédito",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Crédito Habitação",
              "description": "Financiamento para compra de casa"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Crédito Jovem",
              "description": "Crédito habitação para jovens até 35 anos"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://globalcredito.pt/#website",
      "url": "https://globalcredito.pt",
      "name": "Global Crédito Porto",
      "description": "Intermediário de crédito habitação no Porto",
      "publisher": {
        "@id": "https://globalcredito.pt/#organization"
      },
      "inLanguage": "pt-PT",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://globalcredito.pt/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <head>
                 {/* 🔥 STRUCTURED DATA */}
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(structuredData),
           }}
         />
         
         {/* 🎨 THEME & FAVICONS */}
         <link rel="icon" href="/favicon.ico" />
         <link rel="apple-touch-icon" href="/favicon.ico" />
         <meta name="theme-color" content="#003865" />
         <meta name="msapplication-TileColor" content="#003865" />
        
        {/* 📱 MOBILE OPTIMIZATION */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* 🔍 SEARCH ENGINE VERIFICATION */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification" />
        
        {/* 🏢 BUSINESS INFO */}
        <meta name="organization" content="Pedro Duarte Baptista, Unipessoal Lda" />
        <meta name="contact" content="pedrobaptista@dsicredito.pt" />
        <meta name="coverage" content="Portugal" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Ensure page always starts from top after reload
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              // Force scroll to top only when page loads (not before reload)
              window.scrollTo(0, 0);
            `,
          }}
        />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}