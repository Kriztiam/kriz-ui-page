import { InputRadio, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "InputRadio",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>InputRadio</h1>
      <p>{t("InputRadio.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "InputRadio")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <InputRadio groupName="Units" labelText="px" />
            <InputRadio groupName="Units" labelText="em" />
            <InputRadio groupName="Units" labelText="rem" />
            <InputRadio groupName="Units" labelText="vmax" />
          </>,
          `<InputRadio groupName="Units" labelText="px" />\n<InputRadio groupName="Units" labelText="em" />\n<InputRadio groupName="Units" labelText="rem" />\n<InputRadio groupName="Units" labelText="vmax" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <InputRadio groupName="Distance" labelText="cm" inline />
            <InputRadio groupName="Distance" labelText="m" inline />
            <InputRadio groupName="Distance" labelText="km" inline />
            <InputRadio groupName="Distance" labelText="mile" inline disabled />
          </>,
          `<InputRadio groupName="Distance" labelText="cm" inline />\n<InputRadio groupName="Distance" labelText="m" inline />\n<InputRadio groupName="Distance" labelText="km" inline />\n<InputRadio groupName="Distance" labelText="mile" inline disabled />`
        )}
      />
    </>
  );
}
