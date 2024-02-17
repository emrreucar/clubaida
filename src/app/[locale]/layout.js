import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TranslationsProvider from "@/components/TranslationsProvider";

import initTranslations from "../i18n";

const inter = Inter({ subsets: ["latin"] });

const i18nNamespaces = ["home", "common"];

export const metadata = {
  title: {
    default: "Club Aida Home Page",
    template: "%s | Club Aida",
  },
  description: "Club Aida Hotel Description",
};

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </TranslationsProvider>
  );
}
