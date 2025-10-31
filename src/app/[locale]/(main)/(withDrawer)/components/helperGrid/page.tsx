import { Card, HelperGrid, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { sampleText } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "HelperGrid",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>HelperGrid</h1>

      <p>{t("HelperGrid.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "HelperGrid")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <HelperGrid columnsNumber={2}>
            {Array.from({ length: 2 }, (_, index) => (
              <Card key={`grid1Card${index}`}>
                <p>{sampleText}</p>
              </Card>
            ))}
          </HelperGrid>,
          `<HelperGrid columnsNumber={2}>\n  <Cards />\n</HelperGrid>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <HelperGrid fillEmptyColumns>
            <Card>
              <p>{sampleText}</p>
            </Card>
          </HelperGrid>,
          `<HelperGrid fillEmptyColumns>\n  <Card>\n    <p>{sampleText}</p>\n  </Card>\n</HelperGrid>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <HelperGrid columnsMinSize="20rem">
            {Array.from({ length: 15 }, (_, index) => (
              <Card key={`grid1Card${index}`}>
                <p>{sampleText}</p>
              </Card>
            ))}
          </HelperGrid>,
          `<HelperGrid columnsMinSize="20rem">\n  <Cards />\n</HelperGrid>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <HelperGrid columnsNumber={4}>
            {Array.from({ length: 3 }, (_, index) => (
              <Card key={`grid1Card${index}`}>
                <p>{sampleText}</p>
              </Card>
            ))}
          </HelperGrid>,
          `<HelperGrid columnsNumber={4}>\n  <Cards />\n</HelperGrid>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <HelperGrid columnsNumber={3} gap="1rem">
            {Array.from({ length: 5 }, (_, index) => (
              <Card key={`grid1Card${index}`}>
                <p>{sampleText}</p>
              </Card>
            ))}
          </HelperGrid>,
          `<HelperGrid columnsNumber={3} gap="1rem">\n  <Cards />\n</HelperGrid>`
        )}
      />
    </>
  );
}
