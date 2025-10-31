import styles from "./page.module.css";
import { Button, Divider, IconRight } from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";
import { themePredefined, themeVariables } from "./styles/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Navigation" });
  return {
    title: `${t("installation")} | Docs`,
  };
}

const contextExample = `import { Link, usePathname, useRouter } from "@/i18n/navigation";\nimport { routing } from "@/i18n/routing";\n\n<KrizUIContextProvider\n  navigation={{ Link, usePathname, useRouter }}\n  routing={routing}\n>\n  <body>{children}</body>\n</KrizUIContextProvider>`;

const layoutExample = `// app/[locale]/layout.tsx\n\nimport { notFound } from "next/navigation";\nimport { NextIntlClientProvider, hasLocale } from "next-intl";\nimport { Link, usePathname, useRouter } from "@/i18n/navigation";\nimport { routing } from "@/i18n/routing";\nimport "kriz-ui-next/base";\nimport "kriz-ui-next/blue";\n\nexport default async function LocaleLayout({\n  children,\n  params,\n}: {\n  children: React.ReactNode;\n  params: Promise<{ locale: string }>;\n}) {\n  const { locale } = await params;\n  if (!hasLocale(routing.locales, locale)) {\n    notFound();\n  }\n  return (\n    <html lang={locale}>\n      <NextIntlClientProvider>\n        <KrizUIContextProvider\n          navigation={{ Link, usePathname, useRouter }}\n          routing={routing}\n        >\n          <body>{children}</body>\n        </KrizUIContextProvider>\n      </NextIntlClientProvider>\n    </html>\n  );\n}`;

export default function Page() {
  const t = useTranslations("Docs.main");
  return (
    <article className={styles.InstallationArticle}>
      <header>
        <h1>{t("installationHeading")}</h1>
        <p>
          {t.rich("installationParagraph", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </header>

      <section>
        <h2>{t("installHeading")}</h2>
        <p>{t("installParagraph")}</p>

        <pre>
          <code>npm install kriz-ui-next</code>
        </pre>
      </section>

      <section>
        <h2>{t("configureHeading")}</h2>
        <p>{t("configureParagraph")}</p>

        <ol>
          <li>
            <p>{t("configureStepsParagraph1")}</p>
            <pre>
              <code>import &quot;kriz-ui-next/base&quot;;</code>
            </pre>
          </li>

          <li>
            <p>{t("configureStepsParagraph2")}</p>
            <pre>
              <code>{themePredefined}</code>
            </pre>
            <p>{t("configureStepsParagraph3")}</p>
            <pre>
              <code>{themeVariables}</code>
            </pre>
          </li>

          <li>
            <p>
              {t.rich("configureStepsParagraph4", {
                code: (chunks) => <code>{chunks}</code>,
              })}
            </p>
            <p>{t("configureStepsParagraph5")}</p>
            <p>
              {t.rich("configureStepsParagraph6", {
                code: (chunks) => <code>{chunks}</code>,
              })}
            </p>

            <pre>
              <code>{contextExample}</code>
            </pre>
          </li>
        </ol>
      </section>

      <section>
        <h2>{t("exampleHeading")}</h2>
        <p>
          {t.rich("exampleParagraph1", {
            code: (chunks) => <code>{chunks}</code>,
          })}
        </p>

        <pre>
          <code>{layoutExample}</code>
        </pre>
      </section>

      <Divider stylized />

      <footer>
        <h3>{t("nextHeading")}</h3>
        <p>{t("nextParagraph")}</p>
        <Button href="/docs/styles">
          {t("nextButton")} <IconRight />
        </Button>
      </footer>
    </article>
  );
}
