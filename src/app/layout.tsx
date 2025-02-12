import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import Script from "next/script";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "QR Code Generator & Editor | Create Custom QR Codes Online",
  description:
    "Create, edit, and customize QR codes effortlessly. Adjust colors, shapes, and sizes with advanced settings for free.",
  keywords: [
    "QR Code Generator",
    "Custom QR Codes",
    "QR Code Editor",
    "Editable QR Codes",
    "Free QR Code Maker",
  ],
  openGraph: {
    title: "QR Code Generator & Editor | Customizable QR Codes Online",
    description:
      "Generate and customize QR codes with advanced features. Change colors, styles, and formats effortlessly.",
    url: "https://yourwebsite.com",
    siteName: "QR Code Generator",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Update with your actual image
        width: 1200,
        height: 630,
        alt: "QR Code Generator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "QR Code Generator & Editor | Customizable QR Codes Online",
    description:
      "Generate and customize QR codes with advanced features. Change colors, styles, and formats effortlessly.",
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Update with your actual image
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Script
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="//unpkg.com/react-scan/dist/auto.global.js"
      /> */}
      <body className={`${lexend.variable} antialiased font-lexend`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
