import { SelectorLanguage, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "SelectorLanguage",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>SelectorLanguage</h1>
      <p>{t("SelectorLanguage.description")}</p>

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <SelectorLanguage />,
          `<SelectorLanguage />`
        )}
      />
    </>
  );
}
