import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM AUTO — Garage Mécanique à Floirac",
  description: "Entretien, réparation et diagnostic de votre véhicule à Floirac. Prix transparents, service rapide, expertise technique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
