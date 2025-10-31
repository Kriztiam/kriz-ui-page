import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Navigation" });
  const t2 = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: {
      template: `%s | ${t("templates")} | ${t2("title")}`,
      default: t("templates"),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
