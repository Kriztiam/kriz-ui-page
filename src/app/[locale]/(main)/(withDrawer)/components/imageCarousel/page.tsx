import { ImageCarousel, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "ImageCarousel",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>ImageCarousel</h1>
      <p>{t("ImageCarousel.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "ImageCarousel")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageCarousel
            height="30rem"
            srcArray={[
              "/img/2560x1440.webp",
              "/img/2520x1080.webp",
              "/img/1600x800.webp",
              "/img/1400x1000.webp",
              "/img/1200x800.webp",
              "/img/800x600.webp",
              "/img/720x1280.webp",
              "/img/400x400.webp",
            ]}
          />,
          `<ImageCarousel
  height="30rem"
  srcArray={[
    "/img/2560x1440.webp",
    "/img/2520x1080.webp",
    "/img/1600x800.webp",
    "/img/1400x1000.webp",
    "/img/1200x800.webp",
    "/img/800x600.webp",
    "/img/720x1280.webp",
    "/img/400x400.webp",
  ]}
/>`
        )}
      />
    </>
  );
}
