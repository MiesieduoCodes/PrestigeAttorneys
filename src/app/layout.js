import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import Navbar from '@/app/components/navbar.jsx';
import Footer from '@/app/components/footer.jsx';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update metadata for Prestige Attorneys
export const metadata = {
  title: "Prestige Attorneys - Your Trusted Legal Advisors",
  description: "Prestige Attorneys provides expert legal advice and representation in various areas of law, ensuring justice for our clients.",
  keywords: "law, attorneys, legal advice, legal representation, Prestige Attorneys, personal injury, family law, criminal law",
  authors: [{ name: "Prestige Attorneys", url: "https://prestigeattorneys.com" }],
  openGraph: {
    title: "Prestige Attorneys - Trusted Legal Advisors",
    description: "Expert legal services tailored to your needs. Contact Prestige Attorneys for professional representation.",
    url: "https://prestigeattorneys.com",
    siteName: "Prestige Attorneys",
    images: [
      {
        url: "https://prestigeattorneys.com/image.jpg",
        width: 800,
        height: 600,
        alt: "Prestige Attorneys Office",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@prestigeattorneys",
    title: "Prestige Attorneys - Your Trusted Legal Advisors",
    description: "Expert legal services tailored to your needs.",
    image: "https://prestigeattorneys.com/image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://prestigeattorneys.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}