import type { Metadata } from "next";
import "@/app/style/globals.css";

export const metadata: Metadata = {
  title: "Conheça o meu trabalho",
  description: "Portifólio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">{children}</body>
    </html>
  );
}
