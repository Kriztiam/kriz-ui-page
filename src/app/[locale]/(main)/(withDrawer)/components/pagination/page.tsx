import { Pagination, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Pagination",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Pagination</h1>
      <p>{t("Pagination.description")}</p>
      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Pagination")}
        denseTable
      />
      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Pagination maxPages={10} />
            <Pagination maxPages={10} defaultPage={7} hideLastButton />
            <Pagination maxPages={10} defaultPage={7} hideNextButton />
            <Pagination maxPages={10} hideLastButton hideNextButton />
          </>,
          `<Pagination maxPages={10} />\n<Pagination maxPages={10} defaultPage={7} hideLastButton />\n<Pagination maxPages={10} defaultPage={7} hideNextButton />\n<Pagination maxPages={10} hideLastButton hideNextButton />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Pagination maxPages={100} defaultPage={30} />,
          `<Pagination maxPages={100} defaultPage={30} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Pagination maxPages={10} defaultPage={5} size="0.75rem" />
            <Pagination maxPages={10} defaultPage={5} />
            <Pagination maxPages={10} defaultPage={5} size="1.25rem" />
          </>,
          `<Pagination maxPages={10} defaultPage={5} size="0.75rem" />\n<Pagination maxPages={10} defaultPage={5} />\n<Pagination maxPages={10} defaultPage={5} size="1.25rem" />`
        )}
      />
    </>
  );
}
