import type { Metadata } from "next";
import "@/app/style/globals.css";
import { Poppins } from "next/font/google";

const fontPoppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={`${fontPoppins.className} antialiased`}>{children}</body>
    </html>
  );
}
