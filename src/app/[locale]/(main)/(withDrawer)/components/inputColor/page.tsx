import { InputColor, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "InputColor",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>InputColor</h1>
      <p>{t("InputColor.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "InputColor")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputColor defaultValue={"#7b3b8c"} />,
          `<InputColor defaultValue={"#7b3b8c"} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputColor
            defaultValue={"#7b3b8c"}
            listOptions={["#ff0000", "#00ff00", "#0000ff"]}
          />,
          `<InputColor defaultValue={"#7b3b8c"} listOptions={["#ff0000", "#00ff00", "#0000ff"]} />`
        )}
      />
    </>
  );
}
