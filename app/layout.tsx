import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Moda Modelo | Elegância para todas as ocasiões",
  description:
    "Moda feminina, masculina, íntima, plus size, praia e perfumaria, vestindo Sua Cidade com elegância.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-soft text-brown-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brown-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-cream-soft"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
