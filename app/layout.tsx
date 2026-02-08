import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn what Bad Bunny's saying before the Super Bowl",
  description: "Finally know what you're singing during the halftime show 🐰",
  keywords: ["Bad Bunny", "Super Bowl", "halftime show", "English lyrics", "translations", "reggaeton"],
  authors: [{ name: "jespn88" }],
  openGraph: {
    title: "Learn what Bad Bunny's saying before the Super Bowl",
    description: "Finally know what you're singing during the halftime show 🐰",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
