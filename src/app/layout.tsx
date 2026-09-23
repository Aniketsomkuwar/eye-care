import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jyotieyecare.com"),
  title: {
    default: "Jyoti Eye Care | Dr. Ruchita Sontakke | Cataract & Oculoplasty Surgeon Nagpur",
    template: "%s | Jyoti Eye Care Clinic Nagpur",
  },
  description:
    "Leading ophthalmic & eye surgery clinic in Gopal Nagar, Nagpur led by Dr. Ruchita Sontakke (MBBS, MS MAMC New Delhi, DNB, Ex-SR MAMC). Specializing in micro-incision cataract surgery, premium IOLs, ptosis & eyelid oculoplasty, dry eye therapy, and computerized eye examinations. Evening OPD: 6:30 PM - 9:30 PM.",
  keywords: [
    "Jyoti Eye Care",
    "Dr Ruchita Sontakke",
    "Eye clinic Nagpur",
    "Best eye surgeon Nagpur",
    "Cataract surgery Nagpur",
    "Micro incision phacoemulsification Nagpur",
    "Oculoplasty surgeon Nagpur",
    "Ptosis surgery Nagpur",
    "Eyelid reconstruction Nagpur",
    "MAMC Delhi eye specialist",
    "Dry eye treatment Nagpur",
    "Computer vision syndrome specialist",
    "Gopal Nagar eye hospital",
    "Evening OPD eye doctor Nagpur",
    "Ophthalmologist near me Nagpur",
  ],
  authors: [{ name: "Dr. Ruchita Sontakke", url: "https://jyotieyecare.com" }],
  creator: "Dr. Ruchita Sontakke",
  publisher: "Jyoti Eye Care",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://jyotieyecare.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jyotieyecare.com",
    siteName: "Jyoti Eye Care Clinic Nagpur",
    title: "Jyoti Eye Care | Dr. Ruchita Sontakke - Cataract & Oculoplasty Surgeon in Nagpur",
    description:
      "Advanced cataract surgery, oculoplasty, and comprehensive eye care in Gopal Nagar, Nagpur by Dr. Ruchita Sontakke (Ex-SR MAMC New Delhi). Evening OPD 6:30 PM - 9:30 PM.",
    images: [
      {
        url: "/images/dr-ruchita-flowers.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Ruchita Sontakke, Chief Surgeon at Jyoti Eye Care Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyoti Eye Care | Dr. Ruchita Sontakke - Cataract & Oculoplasty Surgeon",
    description:
      "Accessible, ethical, and advanced ophthalmic care in Gopal Nagar, Nagpur. Evening OPD 6:30 PM - 9:30 PM.",
    images: ["/images/dr-ruchita-flowers.jpg"],
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  name: "Jyoti Eye Care",
  alternateName: "Dr. Ruchita Sontakke Eye Clinic",
  image: "https://jyotieyecare.com/images/dr-ruchita-flowers.jpg",
  logo: "https://jyotieyecare.com/icon.svg",
  url: "https://jyotieyecare.com",
  telephone: "+918830383320",
  email: "ruchitasontakke451@gmail.com",
  priceRange: "₹₹",
  medicalSpecialty: [
    "Ophthalmology",
    "PlasticSurgery",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "4383, Gopal Nagar, Near Pratap Nagar Ring Road",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    postalCode: "440022",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.1166,
    longitude: 79.0624,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:30",
      closes: "21:30",
    },
  ],
  physician: {
    "@type": "Physician",
    name: "Dr. Ruchita Sontakke",
    jobTitle: "Chief Cataract & Oculoplastic Surgeon",
    description:
      "MBBS (IGGMC) • MS Ophthalmology (Maulana Azad Medical College - MAMC, New Delhi) • DNB • Ex-Senior Resident MAMC Delhi",
    medicalSpecialty: "Ophthalmology",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "128",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#EEF2F6] text-slate-900 font-sans selection:bg-[#1E5BF9] selection:text-white">
        {children}
      </body>
    </html>
  );
}
