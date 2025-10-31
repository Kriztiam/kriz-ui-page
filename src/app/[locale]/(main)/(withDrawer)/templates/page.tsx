import { Button, HelperGrid } from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";
import { LINKS_TEMPLATES } from "@/components/Navigation/Navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Navigation" });
  return {
    title: t("templates"),
  };
}

export default function Page() {
  const t = useTranslations("Navigation");
  return (
    <article>
      <h1 style={{ marginBottom: "0.5em" }}>{t("templates")}</h1>
      <HelperGrid>
        {LINKS_TEMPLATES.map((link) => (
          <Button key={link.linkText} href={link.href} outline>
            {link.linkText}
          </Button>
        ))}
      </HelperGrid>
    </article>
  );
}
