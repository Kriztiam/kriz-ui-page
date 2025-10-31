import { ImageViewer, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "ImageViewer",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>ImageViewer</h1>
      <p>{t("ImageViewer.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "ImageViewer")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageViewer
            src="/img/1400x1000.webp"
            alt="ImageViewer test image 1"
            size="5rem"
          />,
          `<ImageViewer
        src="/img/1400x1000.webp"
        alt="ImageViewer test image 1"
        size="4rem"
      />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageViewer
            src="/img/720x1280.webp"
            alt="ImageViewer test image 2"
            size="10rem"
          />,
          `<ImageViewer
        src="/img/720x1280.webp"
        alt="ImageViewer test image 2"
        size="10rem"
      />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageViewer
            src="/img/1600x800.webp"
            alt="ImageViewer test image 3"
            size="20rem"
          />,
          `<ImageViewer
        src="/img/1600x800.webp"
        alt="ImageViewer test image 3"
        size="20rem"
      />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageViewer
            src="/img/1200x800.webp"
            alt="ImageViewer test image 4"
            size="30rem"
          />,
          `<ImageViewer
        src="/img/1200x800.webp"
        alt="ImageViewer test image 4"
        size="30rem"
      />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageViewer
            src="/img/2560x1440.webp"
            alt="ImageViewer test image 5"
            thumbnailSrc="/img/256x144.webp"
            size="20rem"
          />,
          `<ImageViewer
        src="/img/2560x1440.webp"
        alt="ImageViewer test image 5"
        thumbnailSrc="/img/256x144.webp"
        size="20rem"
      />`
        )}
      />
    </>
  );
}
