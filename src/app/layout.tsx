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
    url: "https://neededgen.vercel.app/",
    siteName: "QR Code Generator",
    type: "website",
    images: [
      {
        url: "https://neededgen.vercel.app/qrphoto.png", // Update with your actual image
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
    images: ["https://neededgen.vercel.app/qrphoto.png"], // Update with your actual image
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://neededgen.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="df954562-1963-4f3d-998f-7b544acfca4f"
      ></script>
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
