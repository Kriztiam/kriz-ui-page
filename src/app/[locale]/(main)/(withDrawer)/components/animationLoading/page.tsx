import { AnimationLoading, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "AnimationLoading",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>AnimationLoading</h1>
      <p>{t("AnimationLoading.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "AnimationLoading")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <AnimationLoading size="4rem" />,
          `<AnimationLoading size="4rem" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <AnimationLoading size="5vmax" color="#ff00ff" />,
          `<AnimationLoading size="5vmax" color="#ff00ff" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <AnimationLoading fullScreen />,
          `<AnimationLoading fullScreen />`
        )}
      />
    </>
  );
}
