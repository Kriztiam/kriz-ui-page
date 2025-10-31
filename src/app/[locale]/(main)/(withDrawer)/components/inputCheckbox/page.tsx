import { InputCheckbox, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "InputCheckbox",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>InputCheckbox</h1>
      <p>{t("InputCheckbox.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "InputCheckbox")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputCheckbox id={"checkbox"} />,
          `<InputCheckbox id={"checkbox"} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputCheckbox id={"checkbox2"} labelText="Checkbox" />,
          `<InputCheckbox id={"checkbox2"} labelText="Checkbox" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputCheckbox
            id={"checkbox3"}
            labelText="Checkbox default checked"
            defaultChecked
          />,
          `<InputCheckbox id={"checkbox3"} labelText="Checkbox default checked" defaultChecked />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputCheckbox
            id={"checkbox4"}
            labelText="Checkbox required"
            required
          />,
          `<InputCheckbox id={"checkbox4"} labelText="Checkbox required" required />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputCheckbox
            id={"checkbox5"}
            labelText="Checkbox disabled"
            disabled
          />,
          `<InputCheckbox id={"checkbox5"} labelText="Checkbox disabled" disabled />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputCheckbox
            id={"checkbox6"}
            size="1rem"
            labelText="Checkbox size 1rem"
          />,
          `<InputCheckbox id={"checkbox6"} size="1rem" labelText="Checkbox size 1rem" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputCheckbox
            id={"checkbox7"}
            size="2rem"
            labelText="Checkbox size 2rem"
          />,
          `<InputCheckbox id={"checkbox7"} size="2rem" labelText="Checkbox size 2rem" />`
        )}
      />
    </>
  );
}
