import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wizia - Automatisation IA pour Community Managers",
  description: "Planifiez, automatisez et gérez vos campagnes de réseaux sociaux et newsletters avec Wizia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased bg-slate-950 text-white selection:bg-wizia-purple/30`}
      >
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-wizia-purple/20 blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-wizia-cyan/20 blur-[100px] animate-pulse delay-1000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-wizia-pink/10 blur-[150px] animate-pulse delay-2000" />
        </div>
        {children}
      </body>
    </html>
  );
}
