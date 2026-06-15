import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flutter Developer Portfolio | Guntur, AP",
  description:
    "Professional Flutter Developer with 5+ years of experience building production-grade mobile apps. Specialized in Dart, Flutter, Firebase, and clean architecture.",
  keywords: [
    "Flutter Developer",
    "Dart",
    "Mobile App Developer",
    "Android",
    "iOS",
    "Guntur",
    "Andhra Pradesh",
    "India",
    "Firebase",
    "Portfolio",
  ],
  authors: [{ name: "Flutter Developer" }],
  themeColor: "#0d0d0f",
  openGraph: {
    title: "Flutter Developer Portfolio",
    description: "5+ years building beautiful mobile apps with Flutter & Dart",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
