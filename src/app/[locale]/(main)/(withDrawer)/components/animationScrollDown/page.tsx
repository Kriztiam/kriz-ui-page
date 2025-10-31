import { AnimationScrollDown, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "AnimationScrollDown",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>AnimationScrollDown</h1>
      <p>{t("AnimationScrollDown.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "AnimationScrollDown")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <AnimationScrollDown size="4rem" />,
          `<AnimationScrollDown size="4rem" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <AnimationScrollDown size="10vmax" color="#ff00ff" />,
          `<AnimationScrollDown size="10vmax" color="#ff00ff" />`
        )}
      />
    </>
  );
}
