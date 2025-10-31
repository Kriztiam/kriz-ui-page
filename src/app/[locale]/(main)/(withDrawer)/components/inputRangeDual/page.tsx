import { InputRangeDual, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "InputRangeDual",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>InputRangeDual</h1>
      <p>{t("InputRangeDual.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "InputRangeDual")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputRangeDual labelText="Dual range" />,
          `<InputRangeDual labelText="Dual range" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputRangeDual
            labelText="Limited dual range"
            min={200}
            max={1000}
            valuePrefix={"$"}
          />,
          `<InputRangeDual labelText="Limited dual range" min={200} max={1000} valuePrefix={"$"} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputRangeDual
            labelText="Limited dual range 2"
            min={1}
            max={50}
            initialValueMin={10}
            initialValueMax={25}
            valueSuffix={"Km"}
          />,
          `<InputRange labelText="Limited dual range 2" min={1} max={50} initialValueMin={10} initialValueMax={25} valueSuffix={"Km"} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputRangeDual
            labelText="Limited dual range with step"
            min={50}
            max={100}
            step={0.1}
          />,
          `<InputRangeDual labelText="Limited dual range with step" min={50} max={100} step={0.1} />`
        )}
      />
    </>
  );
}
