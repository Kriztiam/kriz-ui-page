import styles from "./page.module.css";
import {
  Card,
  HelperGrid,
  IconBrush,
  IconCalendar,
  IconCheck,
  IconClock,
  IconDelete,
  IconDown,
  IconEllipsis,
  IconError,
  IconExpand,
  IconEye,
  IconEyeSlash,
  IconFirst,
  IconGear,
  IconGlobe,
  IconHouse,
  IconInfo,
  IconKey,
  IconLast,
  IconLeft,
  IconMail,
  IconMenu,
  IconMinus,
  IconMoon,
  IconPen,
  IconPlus,
  IconRhombus,
  IconRight,
  IconSearch,
  IconSort,
  IconSortDown,
  IconSortUp,
  IconSquareArrowUp,
  IconSun,
  IconTrash,
  IconUp,
  IconUser,
  IconWarning,
  IconX,
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
    title: t("icons"),
  };
}

const iconImportExample = `import { IconBrush } from "kriz-ui-next";\n\nexport default function Example() {\n  return (\n    <div>\n      <IconBrush />\n    </div>\n  );\n}`;

export default function Page() {
  const t = useTranslations("Icons");
  return (
    <article className={styles.IconsArticle}>
      <header>
        <h1>{t("heading")}</h1>
        <p>
          {t.rich("headingDescription", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </header>

      <section>
        <h2>{t("usageHeading")}</h2>
        <p>{t("usageParagraph")}</p>

        <pre>
          <code>{iconImportExample}</code>
        </pre>
      </section>

      <section>
        <h2>{t("collectionHeading")}</h2>
        <p>{t("collectionParagraph")}</p>
      </section>

      <HelperGrid columnsMinSize="9rem" columnsNumber={11}>
        <Card className={styles.IconContainer}>
          <IconBrush />
          <code>&lt;IconBrush /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconCalendar />
          <code>&lt;IconCalendar /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconCheck />
          <code>&lt;IconCheck /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconClock />
          <code>&lt;IconClock /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconDelete />
          <code>&lt;IconDelete /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconDown />
          <code>&lt;IconDown /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconEllipsis />
          <code>&lt;IconEllipsis /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconError />
          <code>&lt;IconError /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconExpand />
          <code>&lt;IconExpand /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconEye />
          <code>&lt;IconEye /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconEyeSlash />
          <code>&lt;IconEyeSlash /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconFirst />
          <code>&lt;IconFirst /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconGear />
          <code>&lt;IconGear /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconGlobe />
          <code>&lt;IconGlobe /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconHouse />
          <code>&lt;IconHouse /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconInfo />
          <code>&lt;IconInfo /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconKey />
          <code>&lt;IconKey /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconLast />
          <code>&lt;IconLast /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconLeft />
          <code>&lt;IconLeft /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconMail />
          <code>&lt;IconMail /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconMenu />
          <code>&lt;IconMenu /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconMinus />
          <code>&lt;IconMinus /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconMoon />
          <code>&lt;IconMoon /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconPen />
          <code>&lt;IconPen /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconPlus />
          <code>&lt;IconPlus /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconRhombus />
          <code>&lt;IconRhombus /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconRight />
          <code>&lt;IconRight /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconSearch />
          <code>&lt;IconSearch /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconSort />
          <code>&lt;IconSort /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconSortDown />
          <code>&lt;IconSortDown /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconSortUp />
          <code>&lt;IconSortUp /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconSquareArrowUp />
          <code>&lt;IconSquareArrowUp /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconSun />
          <code>&lt;IconSun /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconTrash />
          <code>&lt;IconTrash /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconUp />
          <code>&lt;IconUp /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconUser />
          <code>&lt;IconUser /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconWarning />
          <code>&lt;IconWarning /&gt;</code>
        </Card>
        <Card className={styles.IconContainer}>
          <IconX />
          <code>&lt;IconX /&gt;</code>
        </Card>
      </HelperGrid>
    </article>
  );
}
