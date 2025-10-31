import styles from "./page.module.css";
import {
  Button,
  Card,
  Divider,
  HelperGrid,
  IconRight,
  SelectorTheme,
} from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Navigation" });
  return {
    title: `${t("styles")} | Docs`,
  };
}

const COLORS_VARIABLES = [
  "colorPrimary050",
  "colorPrimary100",
  "colorPrimary200",
  "colorPrimary300",
  "colorPrimary400",
  "colorPrimary500",
  "colorPrimary600",
  "colorPrimary700",
  "colorPrimary800",
  "colorPrimary900",
  "colorPrimary950",
  "colorPrimary100A",
  "colorPrimary200A",
  "colorPrimary300A",
  "colorPrimary400A",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
  "colorError",
  "colorBackground",
  "colorBackgroundA",
  "fontColor",
  "fontColorA",
];

export const themePredefined = `"kriz-ui-next/blue"\n"kriz-ui-next/green"\n"kriz-ui-next/lavender"\n"kriz-ui-next/purple"\n"kriz-ui-next/red"\n"kriz-ui-next/white"\n"kriz-ui-next/yellow"`;

export const themeVariables = `:root {\n  /* Colors in "H, S, L" format */\n  --colorPrimary050: 307, 41.5%, 92%;\n  --colorPrimary100: 307, 29.7%, 82.2%;\n  --colorPrimary200: 305, 23.4%, 72.4%;\n  --colorPrimary300: 307, 18.5%, 62.9%;\n  --colorPrimary400: 305, 14.6%, 53.1%;\n  --colorPrimary500: 305, 15.2%, 43.9%;\n  --colorPrimary600: 304, 18%, 34.9%;\n  --colorPrimary700: 304, 22.4%, 26.3%;\n  --colorPrimary800: 305, 28.3%, 18%;\n  --colorPrimary900: 306, 38.5%, 10.2%;\n  --colorPrimary950: 307, 52.9%, 3.3%;\n  --colorPrimary100A: 300, 100%, 88%;\n  --colorPrimary200A: 303, 53.2%, 66.5%;\n  --colorPrimary300A: 303, 40.8%, 43.7%;\n  --colorPrimary400A: 301, 94.1%, 19.8%;\n}`;

export default function Page() {
  const t = useTranslations("Docs.styles");
  return (
    <article className={styles.StylesArticle}>
      <header>
        <h1>{t("heading")}</h1>
        <p>
          {t.rich("headingDescription", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </header>

      <section>
        <h2>{t("typographyHeading")}</h2>
        <p>{t("typographyParagraph")}</p>
        <Card>
          <h1>{t("typographyDescription.heading")} 1</h1>
          <h2>{t("typographyDescription.heading")} 2</h2>
          <h3>{t("typographyDescription.heading")} 3</h3>
          <h4>{t("typographyDescription.heading")} 4</h4>
          <h5>{t("typographyDescription.heading")} 5</h5>
          <h6>{t("typographyDescription.heading")} 6</h6>
          <p>{t("typographyDescription.paragraph")}</p>
        </Card>
      </section>

      <section>
        <h2>{t("colorPaletteHeading")}</h2>
        <p>{t("colorPaletteParagraph")}</p>

        <HelperGrid columnsMinSize="8.5rem" columnsNumber={11}>
          {COLORS_VARIABLES.map((variableName) => (
            <Card key={variableName} className={styles.ColorBoxContainer}>
              <span
                style={{
                  backgroundColor: `hsl(var(--${variableName}))`,
                }}
              />
              <p>{variableName}</p>
            </Card>
          ))}
        </HelperGrid>
      </section>

      <section>
        <h2>{t("themingHeading")}</h2>
        <p>
          {t.rich("themingParagraph", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <h3>{t("themingPredefinedHeading")}</h3>
        <p>{t("themingPredefinedParagraph1")}</p>
        <pre>
          <code>import &quot;kriz-ui-next/blue&quot;;</code>
        </pre>

        <p>{t("themingPredefinedParagraph2")}</p>
        <pre>
          <code>{themePredefined}</code>
        </pre>

        <h3>{t("themingCustomHeading")}</h3>
        <p>{t("themingCustomParagraph")}</p>
        <pre>
          <code>{themeVariables}</code>
        </pre>

        <h3>{t("themingSwitchHeading")}</h3>
        <p>
          {t.rich("themingSwitchParagraph", {
            code: (chunks) => <code>{chunks}</code>,
          })}
        </p>
        <div className={styles.SelectorThemeContainer}>
          <SelectorTheme customColor />
        </div>
      </section>

      <Divider stylized />

      <footer>
        <h3>{t("nextHeading")}</h3>
        <p>{t("nextParagraph")}</p>
        <Button href="/components">
          {t("nextButton")} <IconRight />
        </Button>
      </footer>
    </article>
  );
}
