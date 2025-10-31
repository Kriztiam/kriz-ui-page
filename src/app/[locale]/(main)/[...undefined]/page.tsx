import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NotFound" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export async function generateStaticParams() {
  const locales = routing.locales;
  const staticSubpaths = ["404"];
  return locales.flatMap((locale) =>
    staticSubpaths.map((slug) => ({
      locale,
      undefined: [slug],
    }))
  );
}

export default function CatchAllPage() {
  notFound();
}
