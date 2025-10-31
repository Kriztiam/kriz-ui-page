import { AnimationTextGradient, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "AnimationTextGradient",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>AnimationTextGradient</h1>
      <p>{t("AnimationTextGradient.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "AnimationTextGradient")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <h3>
            <AnimationTextGradient>
              Lorem ipsum dolor sit amet.
            </AnimationTextGradient>
          </h3>,
          `<h3>\n  <AnimationTextGradient>Lorem ipsum dolor sit amet.</AnimationTextGradient>\n</h3>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <h6>
            Lorem ipsum, dolor{" "}
            <AnimationTextGradient style={{ fontWeight: "600" }}>
              sit amet consectetur
            </AnimationTextGradient>{" "}
            adipisicing elit. Quos, doloremque!
          </h6>,
          `<h6>Lorem ipsum, dolor <AnimationTextGradient style={{ fontWeight: "600" }}>sit amet consectetur</AnimationTextGradient> adipisicing elit. Quos, doloremque!</h6>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <h3>
            <AnimationTextGradient
              gradientBaseColor="blueviolet"
              gradientAccentColor="cyan"
            >
              Lorem ipsum dolor sit amet.
            </AnimationTextGradient>
          </h3>,
          `<h3>\n  <AnimationTextGradient gradientBaseColor="blueviolet" gradientAccentColor="cyan">Lorem ipsum dolor sit amet.</AnimationTextGradient>\n</h3>`
        )}
      />
    </>
  );
}
