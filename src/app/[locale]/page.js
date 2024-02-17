import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import HomePage from "@/components/Home/HomePage";

const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <HomePage />
    </TranslationsProvider>
  );
}
