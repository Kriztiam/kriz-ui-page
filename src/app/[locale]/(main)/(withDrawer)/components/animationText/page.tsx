import { AnimationText, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "AnimationText",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>AnimationText</h1>
      <p>{t("AnimationText.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "AnimationText")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <h3>
            <AnimationText>
              Sit amet, consectetur adipisicing elit.
            </AnimationText>
          </h3>,
          `<h3>\n  <AnimationText>Sit amet, consectetur adipisicing elit.</AnimationText>\n</h3>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <p>
            <AnimationText>
              Pariatur eaque: 123456-5456-6546 | Adipisci 2457
            </AnimationText>
          </p>,
          `<p>\n  <AnimationText>Pariatur eaque: 123456-5456-6546 | Adipisci 2457</AnimationText>\n</p>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <h6>
            Lorem ipsum, dolor{" "}
            <AnimationText speed={40} style={{ fontWeight: "600" }}>
              sit amet consectetur
            </AnimationText>{" "}
            adipisicing elit. Quos, doloremque!
          </h6>,
          `<h6>Lorem ipsum, dolor <AnimationText speed={40} style={{ fontWeight: "600" }}>sit amet consectetur</AnimationText> adipisicing elit. Quos, doloremque!</h6>`
        )}
      />
    </>
  );
}
