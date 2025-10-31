import { SocialMediaLinks, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { socialMediaLinksList } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "SocialMediaLinks",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>SocialMediaLinks</h1>
      <p>{t("SocialMediaLinks.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "SocialMediaLinks")}
        denseTable
      />

      <h2>{t("types")}</h2>
      <Table
        tableHeadLabels={[t("type"), t("description")]}
        tableData={generateCodeTable(t, "SocialMediaLinks", true)}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <SocialMediaLinks socialMediaLinks={socialMediaLinksList} showText />,
          `<SocialMediaLinks socialMediaLinks={socialMediaLinksList} showText />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <SocialMediaLinks socialMediaLinks={socialMediaLinksList} />,
          `<SocialMediaLinks socialMediaLinks={socialMediaLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <SocialMediaLinks
            socialMediaLinks={socialMediaLinksList}
            showText
            vertical
          />,
          `<SocialMediaLinks socialMediaLinks={socialMediaLinksList} showText vertical />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <SocialMediaLinks socialMediaLinks={socialMediaLinksList} vertical />,
          `<SocialMediaLinks socialMediaLinks={socialMediaLinksList} vertical />`
        )}
      />
    </>
  );
}
