import { ImageGrid, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "ImageGrid",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>ImageGrid</h1>
      <p>{t("ImageGrid.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "ImageGrid")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageGrid
            srcArray={[
              "/img/1200x800.webp",
              "/img/1400x1000.webp",
              "/img/1600x800.webp",
              "/img/2520x1080.webp",
              "/img/2560x1440.webp",
              "/img/1400x1000.webp",
              "/img/1200x800.webp",
              "/img/2560x1440.webp",
              "/img/1600x800.webp",
              "/img/2520x1080.webp",
            ]}
            altArray={[
              "ImageGrid test image 1",
              "ImageGrid test image 2",
              "ImageGrid test image 3",
              "ImageGrid test image 4",
              "ImageGrid test image 5",
              "ImageGrid test image 6",
              "ImageGrid test image 7",
              "ImageGrid test image 8",
              "ImageGrid test image 9",
              "ImageGrid test image 10",
            ]}
            sizeEachImage="15vw"
          />,
          `<ImageGrid
        srcArray={[
          "/img/1200x800.webp",
          "/img/1400x1000.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
          "/img/2560x1440.webp",
          "/img/1400x1000.webp",
          "/img/1200x800.webp",
          "/img/2560x1440.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
        ]}
        altArray={[
          "ImageGrid test image 1",
          "ImageGrid test image 2",
          "ImageGrid test image 3",
          "ImageGrid test image 4",
          "ImageGrid test image 5",
          "ImageGrid test image 6",
          "ImageGrid test image 7",
          "ImageGrid test image 8",
          "ImageGrid test image 9",
          "ImageGrid test image 10",
        ]}
        sizeEachImage="15vw"
      />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageGrid
            srcArray={[
              "/img/400x400.webp",
              "/img/720x1280.webp",
              "/img/800x600.webp",
              "/img/1200x800.webp",
              "/img/1400x1000.webp",
              "/img/1600x800.webp",
              "/img/2520x1080.webp",
              "/img/2560x1440.webp",
              "/img/400x400.webp",
              "/img/720x1280.webp",
              "/img/800x600.webp",
              "/img/1200x800.webp",
              "/img/1400x1000.webp",
              "/img/1600x800.webp",
              "/img/2520x1080.webp",
              "/img/2560x1440.webp",
            ]}
          />,
          `<ImageGrid
        srcArray={[
          "/img/400x400.webp",
          "/img/720x1280.webp",
          "/img/800x600.webp",
          "/img/1200x800.webp",
          "/img/1400x1000.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
          "/img/2560x1440.webp",
          "/img/400x400.webp",
          "/img/720x1280.webp",
          "/img/800x600.webp",
          "/img/1200x800.webp",
          "/img/1400x1000.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
          "/img/2560x1440.webp",
        ]}
      />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <ImageGrid
            srcArray={[
              "/img/400x400.webp",
              "/img/720x1280.webp",
              "/img/800x600.webp",
              "/img/1200x800.webp",
              "/img/1400x1000.webp",
              "/img/1600x800.webp",
              "/img/2520x1080.webp",
              "/img/2560x1440.webp",
              "/img/400x400.webp",
              "/img/720x1280.webp",
              "/img/800x600.webp",
              "/img/1200x800.webp",
              "/img/1400x1000.webp",
              "/img/1600x800.webp",
              "/img/2520x1080.webp",
              "/img/2560x1440.webp",
              "/img/400x400.webp",
              "/img/720x1280.webp",
              "/img/800x600.webp",
              "/img/1200x800.webp",
              "/img/1400x1000.webp",
              "/img/1600x800.webp",
              "/img/2520x1080.webp",
              "/img/2560x1440.webp",
            ]}
            sizeEachImage="10rem"
          />,
          `<ImageGrid
        srcArray={[
          "/img/400x400.webp",
          "/img/720x1280.webp",
          "/img/800x600.webp",
          "/img/1200x800.webp",
          "/img/1400x1000.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
          "/img/2560x1440.webp",
          "/img/400x400.webp",
          "/img/720x1280.webp",
          "/img/800x600.webp",
          "/img/1200x800.webp",
          "/img/1400x1000.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
          "/img/2560x1440.webp",
          "/img/400x400.webp",
          "/img/720x1280.webp",
          "/img/800x600.webp",
          "/img/1200x800.webp",
          "/img/1400x1000.webp",
          "/img/1600x800.webp",
          "/img/2520x1080.webp",
          "/img/2560x1440.webp",
        ]}
        sizeEachImage="10rem"
      />`
        )}
      />
    </>
  );
}
