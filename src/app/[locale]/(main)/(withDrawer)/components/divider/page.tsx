import { Card, Divider, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { sampleText } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Divider",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Divider</h1>
      <p>{t("Divider.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Divider")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Card>
            <p>{sampleText}</p>
            <Divider style={{ margin: "0.5rem 0" }} />
            <p>{sampleText}</p>
            <Divider parentPadding={"1rem"} style={{ margin: "0.5rem 0" }} />
            <p>{sampleText}</p>
          </Card>,
          `<Card>\n  <p>{sampleText}</p>\n  <Divider style={{ margin: "0.5rem 0" }} />\n  <p>{sampleText}</p>\n  <Divider parentPadding={"1rem"} style={{ margin: "0.5rem 0" }} />\n  <p>{sampleText}</p>\n</Card>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Card>
            <p>{sampleText}</p>
            <Divider stylized />
            <p>{sampleText}</p>
            <Divider parentPadding={"1rem"} stylized />
            <p>{sampleText}</p>
          </Card>,
          `<Card>\n  <p>{sampleText}</p>\n  <Divider stylized />\n  <p>{sampleText}</p>\n  <Divider parentPadding={"1rem"} stylized />\n  <p>{sampleText}</p>\n</Card>`
        )}
      />
    </>
  );
}
