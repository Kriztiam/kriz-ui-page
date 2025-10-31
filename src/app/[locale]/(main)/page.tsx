import styles from "./page.module.css";
import {
  Avatar,
  Button,
  Card,
  Divider,
  HelperGrid,
  IconRight,
  ImageCarousel,
  Login,
} from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { sampleTextSmall } from "@/utils/examplesData";

export default function Main() {
  const t = useTranslations("HomePage");
  return (
    <article className={styles.Home}>
      <header className={styles.Hero}>
        <h1>Kriz UI</h1>
        <p>{t("heroParagraph")}</p>
        <p>{t("heroParagraph2")}</p>

        <span className={styles.HeroButtons}>
          <Button href="/docs">
            {t("heroButtonGetStarted")} <IconRight />
          </Button>
          <Button href="/components" outline>
            {t("heroButtonComponents")} <IconRight />
          </Button>
          <Button href="/icons" outline>
            {t("heroButtonIcons")} <IconRight />
          </Button>
          <Button href="/templates" outline>
            {t("heroButtonTemplates")} <IconRight />
          </Button>
        </span>
      </header>

      <Divider stylized />

      <section>
        <h2>{t("featuresHeading")}</h2>
        <ul>
          <li>
            <p>
              {t.rich("featuresElement1", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
          <li>
            <p>
              {t.rich("featuresElement2", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
          <li>
            <p>
              {t.rich("featuresElement3", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
          <li>
            <p>
              {t.rich("featuresElement4", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
        </ul>
      </section>

      <Divider stylized />

      <section>
        <h2>{t("previewHeading")}</h2>
        <HelperGrid fillEmptyColumns>
          <Card
            style={{
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Avatar />
              <h6>Veniam labore</h6>
            </div>
            <Divider />
            <p>{sampleTextSmall}</p>
            <Divider style={{ marginTop: "auto" }} />
            <Button outline>Button</Button>
            <Button>Button</Button>
          </Card>

          <Card>
            <Login />
          </Card>

          <ImageCarousel
            srcArray={["./img/1200x800.webp", "./img/1400x1000.webp"]}
          />
        </HelperGrid>
      </section>
    </article>
  );
}
