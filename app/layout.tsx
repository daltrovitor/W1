// Hello World
import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "PRX × W1 CONSULTORIA FINANCEIRA — Uma nova geração de investidores começa antes do patrimônio",
  description:
    "Proposta de parceria estratégica entre a PRX e a W1 Consultoria Financeira: transformando jovens consumidores em jovens investidores por meio da vertical PRX INVEST.",
  authors: [{ name: "PRX & W1 Consultoria Financeira" }],
  keywords: [
    "PRX",
    "W1",
    "W1 Consultoria Financeira",
    "PRX INVEST",
    "Geração Z",
    "Investimentos",
    "Educação Financeira",
    "Planejamento Financeiro",
    "Linha PRX",
    "PRX First 100",
    "Anti-Bet",
    "PRX Founders",
    "Patrimônio",
  ],
  openGraph: {
    title: "PRX × W1 CONSULTORIA FINANCEIRA — Uma nova geração de investidores começa antes do patrimônio",
    description:
      "A PRX possui acesso, linguagem e conexão com a Geração Z. A W1 possui conhecimento e metodologia financeira. Juntos, construindo o LTV da próxima geração.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-white text-slate-900 selection:bg-[#032029] selection:text-white min-h-screen"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
