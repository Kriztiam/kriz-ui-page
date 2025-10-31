import { InputSelectMultiple, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { STRINGS_ARRAY } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "InputSelectMultiple",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>InputSelectMultiple</h1>
      <p>{t("InputSelectMultiple.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "InputSelectMultiple")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputSelectMultiple
            labelText="Select some options"
            options={STRINGS_ARRAY}
          />,
          `<InputSelectMultiple labelText="Select some options" options={STRINGS_ARRAY} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputSelectMultiple
            labelText="Select some options with disabled elements"
            options={STRINGS_ARRAY}
            disabledElements={[
              "Coral",
              "Red",
              "Blue",
              "Orange",
              "Grey",
              "Rust",
            ]}
          />,
          `<InputSelectMultiple labelText="Select some options with disabled elements" options={STRINGS_ARRAY} disabledElements={["Coral", "Red", "Blue", "Orange", "Grey", "Rust"]} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputSelectMultiple
            labelText="Select some options with default selected and disabled"
            options={STRINGS_ARRAY}
            defaultSelected={["Gold", "Brown", "Purple"]}
            disabledElements={[
              "Coral",
              "Red",
              "Blue",
              "Orange",
              "Grey",
              "Rust",
            ]}
          />,
          `<InputSelectMultiple labelText="Select some options with default selected and disabled" options={STRINGS_ARRAY} defaultSelected={["Gold", "Brown", "Purple"]} disabledElements={["Coral", "Red", "Blue", "Orange", "Grey", "Rust"]} />`
        )}
      />
    </>
  );
}
