import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bad Bunny Fan Site | Música y Letras",
  description: "Escucha las canciones más populares de Bad Bunny con letras sincronizadas. Fan site no oficial.",
  keywords: ["Bad Bunny", "reggaeton", "música latina", "letras", "lyrics"],
  authors: [{ name: "Fan Site" }],
  openGraph: {
    title: "Bad Bunny Fan Site",
    description: "Escucha las canciones más populares de Bad Bunny con letras",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
