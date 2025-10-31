import { InputRange, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "InputRange",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>InputRange</h1>
      <p>{t("InputRange.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "InputRange")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputRange labelText="Range" />,
          `<InputRange labelText="Range" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputRange labelText="Limited range" min={10} max={20} step={0.1} />,
          `<InputRange labelText="Limited range" min={10} max={20} step={0.1} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputRange
            labelText="Limited range 2"
            min={200}
            max={1000}
            valuePrefix={"$"}
          />,
          `<InputRange labelText="Limited range 2" min={200} max={1000} valuePrefix={"$"} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputRange
            labelText="Limited range 3"
            min={1}
            max={50}
            initialValue={11}
            valueSuffix={"Km"}
          />,
          `<InputRange labelText="Limited range 3" min={1} max={50} initialValue={11} valueSuffix={"Km"} />`
        )}
      />
    </>
  );
}
