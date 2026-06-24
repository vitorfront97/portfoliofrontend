import type { Metadata } from "next";
import { Play, Playball, Oleo_Script } from "next/font/google";
import "./globals.css";

const play = Play({
  weight: ["400"],
  variable: "--font-play",
  subsets: ["latin"],
});

const playball = Playball({
  weight: ["400"],
  variable: "--font-playball",
  subsets: ["latin"],
});

const oleoScript = Oleo_Script({
  weight: ["400"],
  variable: "--font-oleoScript",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitor Bruno - Programador Front-end",
  description: "Transformo ideias em experiências digitais modernas, rápidas e estratégicas.Sou desenvolvedor Front-End especializado em Next.js e Tailwind CSS, criando sites com design atual, performance otimizada e foco em SEO. Cada projeto nasce mobile first e é pensado para gerar resultado de verdade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased ${play.variable} ${playball.variable} ${oleoScript.variable}`}
      >
        {children}
      </body>
    </html>
  );
};
