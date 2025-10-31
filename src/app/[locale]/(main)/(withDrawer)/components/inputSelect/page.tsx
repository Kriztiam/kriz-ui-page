import { InputSelect, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { STRINGS_ARRAY } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "InputSelect",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>InputSelect</h1>
      <p>{t("InputSelect.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "InputSelect")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputSelect
            id="select1"
            options={STRINGS_ARRAY}
            labelText="Select one"
          />,
          `<InputSelect id="select1" options={STRINGS_ARRAY} labelText="Select one" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputSelect
            id="select2"
            options={STRINGS_ARRAY}
            labelText="Select one with disabled elements"
            disabledElements={[
              "Coral",
              "Red",
              "Blue",
              "Orange",
              "Grey",
              "Rust",
            ]}
          />,
          `<InputSelect id="select2" options={STRINGS_ARRAY} labelText="Select one with disabled elements" disabledElements={["Coral", "Red", "Blue", "Orange", "Grey", "Rust"]} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputSelect
            id="select3"
            options={STRINGS_ARRAY}
            labelText="Select one with groups"
            optionsGroups
          />,
          `<InputSelect id="select3" options={STRINGS_ARRAY} labelText="Select one with groups" optionsGroups />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputSelect
            id="select4"
            options={STRINGS_ARRAY}
            labelText="Select one with groups and disabled elements"
            disabledElements={[
              "Coral",
              "Red",
              "Blue",
              "Orange",
              "Grey",
              "Rust",
            ]}
            optionsGroups
          />,
          `<InputSelect id="select4" options={STRINGS_ARRAY} labelText="Select one with groups and disabled elements" disabledElements={["Coral", "Red", "Blue", "Orange", "Grey", "Rust"]} optionsGroups />`
        )}
      />
    </>
  );
}
