import { Accordion, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";
import { sampleText } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Accordion",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Accordion</h1>
      <p>{t("Accordion.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Accordion")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Accordion label="Section 1" open>
              <p>{sampleText}</p>
            </Accordion>
            <Accordion label="Section 2">
              <p>{sampleText}</p>
            </Accordion>
            <Accordion label="Section 3">
              <p>{sampleText}</p>
            </Accordion>
          </>,
          `<Accordion label="Section 1" open>\n  <p>{sampleText}</p>\n</Accordion>\n<Accordion label="Section 2">\n  <p>{sampleText}</p>\n</Accordion>\n<Accordion label="Section 3">\n  <p>{sampleText}</p>\n</Accordion>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Accordion
              label="Grouped section 1"
              groupName="accordionGroup"
              color="orangered"
            >
              <p>{sampleText}</p>
            </Accordion>
            <Accordion
              label="Grouped section 2"
              groupName="accordionGroup"
              color="darkorange"
            >
              <p>{sampleText}</p>
            </Accordion>
            <Accordion
              label="Grouped section 3"
              groupName="accordionGroup"
              color="orange"
            >
              <p>{sampleText}</p>
            </Accordion>
          </>,
          `<Accordion label="Grouped section 1" groupName="accordionGroup" color="orangered">\n  <p>{sampleText}</p>\n</Accordion>\n<Accordion label="Grouped section 2" groupName="accordionGroup" color="darkorange">\n  <p>{sampleText}</p>\n</Accordion>\n<Accordion label="Grouped section 3" groupName="accordionGroup" color="orange">\n  <p>{sampleText}</p>\n</Accordion>`
        )}
      />
    </>
  );
}
