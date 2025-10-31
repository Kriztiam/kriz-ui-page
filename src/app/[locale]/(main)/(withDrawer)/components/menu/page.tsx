import {
  Divider,
  IconBrush,
  IconUser,
  Menu,
  SelectorLanguage,
  SelectorTheme,
  SubMenu,
  Table,
  Tabs,
} from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Menu",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Menu</h1>
      <p>{t("Menu.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Menu")}
        denseTable
      />

      <h2>SubMenu {t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "SubMenu")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Menu label={<IconBrush />} menuWidth="7.5em">
              <li>
                <SelectorTheme />
              </li>
            </Menu>

            <Menu label={"Theme"} menuWidth="7.5em">
              <li>
                <SelectorTheme />
              </li>
            </Menu>
          </>,
          `<Menu label={<IconBrush />} menuWidth="7.5em">\n  <li>\n    <SelectorTheme />\n  </li>\n</Menu>\n\n<Menu label={"Theme"} menuWidth="7.5em">\n  <li>\n    <SelectorTheme />\n  </li>\n</Menu>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Menu label={<IconUser />}>
              <li>Profile</li>
              <li>Messages</li>
              <li>
                <Divider />
              </li>
              <li>Settings</li>
              <li>
                <Divider />
              </li>
              <li>Log out</li>
            </Menu>

            <Menu label={"Account"}>
              <li>Profile</li>
              <li>Messages</li>
              <li>
                <Divider />
              </li>
              <li>Settings</li>
              <li>
                <Divider />
              </li>
              <li>Log out</li>
            </Menu>

            <Menu menuWidth="7.5em">
              <li>Profile</li>
              <li>Messages</li>
              <li>
                <Divider />
              </li>
              <li>
                <SelectorLanguage />
              </li>
              <li>
                <Divider />
              </li>

              <li>
                <SelectorTheme />
              </li>
              <li>
                <Divider />
              </li>
              <li>Log out</li>
            </Menu>
          </>,
          `<Menu label={<IconUser />}>\n  <li>Profile</li>\n  <li>Messages</li>\n  <li><Divider /></li>\n  <li>Settings</li>\n  <li><Divider /></li>\n  <li>Log out</li>\n</Menu>\n\n<Menu label={"Account"}>\n  <li>Profile</li>\n  <li>Messages</li>\n  <li><Divider /></li>\n  <li>Settings</li>\n  <li><Divider /></li>\n  <li>Log out</li>\n</Menu>\n\n<Menu menuWidth="7.5em">\n  <li>Profile</li>\n  <li>Messages</li>\n  <li><Divider /></li>\n  <li>\n    <SelectorLanguage />\n  </li>\n  <li><Divider /></li>\n  <li>\n    <SelectorTheme />\n  </li>\n  <li><Divider /></li>\n  <li>Log out</li>\n</Menu>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Menu label={"SubMenu"}>
              <li>Profile</li>
              <li>Messages</li>
              <li>
                <Divider />
              </li>
              <li>Settings</li>
              <li>
                <Divider />
              </li>
              <li>Log out</li>

              <SubMenu label="SubMenu">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
                <li>Option 5</li>
                <li>Option 6</li>
                <li>Option 7</li>
              </SubMenu>
            </Menu>

            <Menu label={"SubMenus"}>
              <li>Profile</li>
              <li>Messages</li>
              <li>
                <Divider />
              </li>
              <li>Settings</li>
              <li>
                <Divider />
              </li>
              <li>Log out</li>

              <SubMenu label="SubMenu 1">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <SubMenu label="SubMenu 2">
                  <li>Option 4</li>
                  <li>Option 5</li>
                  <li>Option 6</li>
                  <li>Option 7</li>
                </SubMenu>
              </SubMenu>
            </Menu>
          </>,
          `<Menu label={"SubMenu"}>\n  <li>Profile</li>\n  <li>Messages</li>\n  <li><Divider /></li>\n  <li>Settings</li>\n  <li><Divider /></li>\n  <li>Log out</li>\n  <SubMenu label="SubMenu">\n    <li>Option 1</li>\n    <li>Option 2</li>\n    <li>Option 3</li>\n    <li>Option 4</li>\n    <li>Option 5</li>\n    <li>Option 6</li>\n    <li>Option 7</li>\n  </SubMenu>\n</Menu>\n\n<Menu label={"SubMenus"}>\n  <li>Profile</li>\n  <li>Messages</li>\n  <li><Divider /></li>\n  <li>Settings</li>\n  <li><Divider /></li>\n  <li>Log out</li>\n  <SubMenu label="SubMenu 1">\n    <li>Option 1</li>\n    <li>Option 2</li>\n    <li>Option 3</li>\n    <SubMenu label="SubMenu 2">\n      <li>Option 4</li>\n      <li>Option 5</li>\n      <li>Option 6</li>\n      <li>Option 7</li>\n    </SubMenu>\n  </SubMenu>\n</Menu>`
        )}
      />
    </>
  );
}
