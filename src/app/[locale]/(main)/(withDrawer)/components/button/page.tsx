import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimationLoading, Button, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Button",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Button</h1>
      <p>{t("Button.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Button")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button>Normal button</Button>
            <Button outline>Outline button</Button>
          </>,
          `<Button>Normal button</Button>\n<Button outline>Outline button</Button>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button disabled>Disabled button</Button>
            <Button outline disabled>
              Disabled outline button
            </Button>
          </>,
          `<Button disabled>Disabled button</Button>\n<Button outline disabled>Disabled outline button</Button>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Button href="https://github.com/" target="_blank">
            Link button
          </Button>,
          `<Button href="https://github.com/" target="_blank">Link button</Button>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button>
              <FontAwesomeIcon icon={faGithub} fixedWidth /> Icon button
            </Button>
            <Button>
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </Button>
            <Button>
              Icon button <FontAwesomeIcon icon={faGithub} fixedWidth />
            </Button>
            <Button outline>
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </Button>
            <Button>✖</Button>
            <Button outline>✖</Button>
          </>,
          `<Button>\n  <FontAwesomeIcon icon={faGithub} fixedWidth /> Icon button\n</Button>\n<Button>\n  <FontAwesomeIcon icon={faGithub} fixedWidth />\n</Button>\n<Button>\n  Icon button <FontAwesomeIcon icon={faGithub} fixedWidth />\n</Button>\n<Button outline>\n  <FontAwesomeIcon icon={faGithub} fixedWidth />\n</Button>\n<Button>✖</Button>\n<Button outline>✖</Button>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button outline disabled>
              <AnimationLoading color="hsl(var(--fontColorA))" />
            </Button>
            <Button disabled>
              <AnimationLoading color="hsl(var(--colorBackground))" />{" "}
              Loading...
            </Button>
          </>,
          `<Button outline disabled>\n  <AnimationLoading color="hsl(var(--fontColorA))" />\n</Button>\n<Button disabled>\n  <AnimationLoading color="hsl(var(--colorBackground))" /> Loading...\n</Button>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button color="#ff00ff">Button color</Button>
            <Button outline color="#ff00ff">
              Button outline color
            </Button>
          </>,
          `<Button color="#ff00ff">Button color</Button>\n<Button outline color="#ff00ff">Button outline colors</Button>`
        )}
      />
    </>
  );
}
