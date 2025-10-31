import { Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { sampleText, sampleTextSmall } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Tabs",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Tabs</h1>
      <p>{t("Tabs.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Tabs")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Tabs
            tabsNames={["Exercitationem", "Temporibus", "Consectetur"]}
            tabsContent={[
              <div key={"tab1"}>
                <p>{sampleTextSmall}</p>
              </div>,

              <div key={"tab2"}>
                <p>{sampleText}</p>
              </div>,

              <div key={"tab3"}>
                <p>
                  {sampleText} {sampleTextSmall}
                </p>
              </div>,
            ]}
          />,
          `<Tabs\n  tabsNames={["Exercitationem", "Temporibus", "Consectetur"]}\n  tabsContent={[\n    <div key={"tab1"}>\n      <p>{sampleTextSmall}</p>\n    </div>,\n    <div key={"tab2"}>\n      <p>{sampleText}</p>\n    </div>,\n    <div key={"tab3"}>\n      <p>{sampleText} {sampleTextSmall}</p>\n    </div>,\n  ]}\n/>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Tabs
            fillEmptySpace
            tabsNames={["Exercitationem", "Temporibus", "Consectetur"]}
            tabsContent={[
              <div key={"tab1"}>
                <p>{sampleTextSmall}</p>
              </div>,

              <div key={"tab2"}>
                <p>{sampleText}</p>
              </div>,

              <div key={"tab3"}>
                <p>
                  {sampleText} {sampleTextSmall}
                </p>
              </div>,
            ]}
          />,
          `<Tabs\n  tabsNames={["Exercitationem", "Temporibus", "Consectetur"]}\n  tabsContent={[\n    <div key={"tab1"}>\n      <p>{sampleTextSmall}</p>\n    </div>,\n    <div key={"tab2"}>\n      <p>{sampleText}</p>\n    </div>,\n    <div key={"tab3"}>\n      <p>{sampleText} {sampleTextSmall}</p>\n    </div>,\n  ]}\n/>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Tabs
            simpleStyle
            tabsNames={["Exercitationem", "Temporibus", "Consectetur"]}
            tabsContent={[
              <div key={"tab1"}>
                <p>{sampleTextSmall}</p>
              </div>,

              <div key={"tab2"}>
                <p>{sampleText}</p>
              </div>,

              <div key={"tab3"}>
                <p>
                  {sampleText} {sampleTextSmall}
                </p>
              </div>,
            ]}
          />,
          `<Tabs\n  simpleStyle\n  tabsNames={["Exercitationem", "Temporibus", "Consectetur"]}\n  tabsContent={[\n    <div key={"tab1"}>\n      <p>{sampleTextSmall}</p>\n    </div>,\n    <div key={"tab2"}>\n      <p>{sampleText}</p>\n    </div>,\n    <div key={"tab3"}>\n      <p>{sampleText} {sampleTextSmall}</p>\n    </div>,\n  ]}\n/>`
        )}
      />
    </>
  );
}
