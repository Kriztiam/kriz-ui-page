import {
  Avatar,
  Button,
  IconBrush,
  Menu,
  SelectorTheme,
  Table,
  Tabs,
  Tooltip,
} from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Tooltip",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Tooltip</h1>
      <p>{t("Tooltip.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Tooltip")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              justifyItems: "center",
              gap: "1rem",
            }}
          >
            <Tooltip tooltipText="You don't have permission to do this">
              <Button disabled>Button</Button>
            </Tooltip>

            <Tooltip tooltipText="This is your avatar">
              <Avatar name="K" size="2.25rem" />
            </Tooltip>

            <Tooltip tooltipText="Change theme">
              <Menu label={<IconBrush />} menuWidth="7.5em">
                <li>
                  <SelectorTheme />
                </li>
              </Menu>
            </Tooltip>

            <Tooltip tooltipText="You don't have permission to do this">
              <Button disabled>Button</Button>
            </Tooltip>
          </div>,
          `<div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", justifyItems: "center", gap: "1rem" }}>\n  <Tooltip tooltipText="You don't have permission to do this">\n    <Button disabled>Button</Button>\n  </Tooltip>\n\n  <Tooltip tooltipText="This is your avatar">\n    <Avatar name="K" size="2.25rem" />\n  </Tooltip>\n\n  <Tooltip tooltipText="Change theme">\n    <Menu label={<IconBrush />} menuWidth="7.5em">\n      <li>\n        <SelectorTheme />\n      </li>\n    </Menu>\n  </Tooltip>\n\n  <Tooltip tooltipText="You don't have permission to do this">\n    <Button disabled>Button</Button>\n  </Tooltip>\n</div>`
        )}
      />
    </>
  );
}
