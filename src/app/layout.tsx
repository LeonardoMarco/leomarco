import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageLoader } from "@/components/page-loader";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_ORIGIN && {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN),
  }),
  title: "Leonardo Marco | Engenheiro de software",
  description:
    "Conheça Leonardo Marco: engenheiro de software. Explore sua história e trajetória profissional.",
  applicationName: "leomarco.dev",
  openGraph: {
    title: "Leonardo Marco — Engenheiro de software",
    description: "História e trajetória profissional de Leonardo Marco.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <PageLoader />
        <div className="site-shell">
          <a className="skip-link" href="#conteudo">
            Pular para o conteúdo
          </a>
          <Header />
          <main className="site-main" id="conteudo">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
