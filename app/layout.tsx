import type { Metadata } from "next";

import { Appshell } from "@/components/layout/Appshell/appshell";

import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Collection",
  description: "Dashboard para gestão de coleções",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Appshell>{children}</Appshell>
      </body>
    </html>
  );
}
