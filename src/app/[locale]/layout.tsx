import styles from "./layout.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "kriz-ui-next/base";
import "kriz-ui-next/blue";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import ContextProvider from "@/context/ContextProvider";

config.autoAddCss = false;

const googleFont = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--fontStack",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
  };
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      className={googleFont.variable}
      data-scroll-behavior="smooth"
    >
      <NextIntlClientProvider>
        <ContextProvider>
          <body className={styles.PageBackground}>{children}</body>
        </ContextProvider>
      </NextIntlClientProvider>
    </html>
  );
}
