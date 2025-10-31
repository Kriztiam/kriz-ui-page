import { InputText, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "InputText",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>InputText</h1>
      <p>{t("InputText.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "InputText")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Text'" />,
          `<InputText labelText="Input type='Text'" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Search'" type="search" />,
          `<InputText labelText="Input type='Search'" type="search" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Email'" type="email" />,
          `<InputText labelText="Input type='Email'" type="email" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Password'" type="password" />,
          `<InputText labelText="Input type='Password'" type="password" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Number'" type="number" />,
          `<InputText labelText="Input type='Number'" type="number" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Date'" type="date" />,
          `<InputText labelText="Input type='Date'" type="date" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText
            labelText="Input type='Datetime-local'"
            type="datetime-local"
          />,
          `<InputText labelText="Input type='Datetime-local'" type="datetime-local" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Month'" type="month" />,
          `<InputText labelText="Input type='Month'" type="month" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Time'" type="time" />,
          `<InputText labelText="Input type='Time'" type="time" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <InputText labelText="Input type='Week'" type="week" />,
          `<InputText labelText="Input type='Week'" type="week" />`
        )}
      />
    </>
  );
}
