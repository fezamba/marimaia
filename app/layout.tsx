import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feliz aniversário, Mari!",
  description: "Uma carta de amor para Mariana Maia em seu aniversário.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
