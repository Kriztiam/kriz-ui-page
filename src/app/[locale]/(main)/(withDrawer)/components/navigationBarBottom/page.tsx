import {
  Divider,
  IconBrush,
  IconGlobe,
  IconUser,
  NavigationBarBottom,
  SelectorLanguage,
  SelectorTheme,
  SubMenu,
  Table,
  Tabs,
} from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import {
  navigationBottomLinksList,
  navigationLinksList,
} from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";
import logo from "@/assets/img/logo.svg";

export const metadata: Metadata = {
  title: "NavigationBarBottom",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>NavigationBarBottom</h1>
      <p>{t("NavigationBarBottom.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "NavigationBarBottom")}
        denseTable
      />

      <h2>{t("types")}</h2>
      <Table
        tableHeadLabels={[t("type"), t("description")]}
        tableData={generateCodeTable(t, "NavigationBarBottom", true)}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBarBottom logoSrc={logo} />,
          `<NavigationBarBottom logoSrc={logo} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBarBottom
            logoSrc={logo}
            linksInBar={navigationBottomLinksList}
          />,
          `<NavigationBarBottom logoSrc={logo} linksInBar={navigationBottomLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBarBottom
            logoSrc={logo}
            linksInBar={navigationBottomLinksList}
            showIconLabel
          />,
          `<NavigationBarBottom logoSrc={logo} linksInBar={navigationBottomLinksList} showIconLabel />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBarBottom
            logoSrc={logo}
            linksInBar={navigationBottomLinksList}
            showIconLabel
            linksList={navigationLinksList}
          />,
          `<NavigationBarBottom logoSrc={logo} linksInBar={navigationBottomLinksList} showIconLabel linksList={navigationLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBarBottom
            logoSrc={logo}
            linksList={navigationLinksList}
            showIconLabel
          />,
          `<NavigationBarBottom logoSrc={logo} linksList={navigationLinksList} showIconLabel />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBarBottom
            logoSrc={logo}
            linksInBar={navigationBottomLinksList}
            linksList={navigationLinksList}
            showIconLabel
          >
            <Divider style={{ margin: "0.5rem 0" }} />
            <menu>
              <SubMenu label={<IconUser />}>
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Messages</a>
                </li>
                <li>
                  <Divider />
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Divider />
                </li>
                <li>
                  <a>Log out</a>
                </li>
              </SubMenu>

              <SubMenu label={<IconBrush />}>
                <li>
                  <SelectorTheme />
                </li>
              </SubMenu>

              <SubMenu label={<IconGlobe />}>
                <li>
                  <SelectorLanguage />
                </li>
              </SubMenu>
            </menu>
          </NavigationBarBottom>,
          `<NavigationBarBottom logoSrc={logo} linksInBar={navigationBottomLinksList} linksList={navigationLinksList} showIconLabel>\n  <Divider style={{ margin: "0.5rem 0" }} />\n  <menu>\n    <SubMenu label={<IconUser />}>\n      <li>\n        <a>Profile</a>\n      </li>\n      <li>\n        <a>Messages</a>\n      </li>\n      <li><Divider /></li>\n      <li>\n        <a>Settings</a>\n      </li>\n      <li><Divider /></li>\n      <li>\n        <a>Log out</a>\n      </li>\n    </SubMenu>\n    <SubMenu label={<IconBrush />}>\n      <li>\n        <SelectorTheme />\n      </li>\n    </SubMenu>\n    <SubMenu label={<IconGlobe />}>\n      <li>\n        <SelectorLanguage />\n      </li>\n    </SubMenu>\n  </menu>\n</NavigationBarBottom>`
        )}
      />
    </>
  );
}
