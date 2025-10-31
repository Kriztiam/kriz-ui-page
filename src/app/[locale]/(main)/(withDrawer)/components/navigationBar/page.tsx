import {
  Divider,
  IconBrush,
  IconGlobe,
  IconUser,
  InputText,
  Menu,
  NavigationBar,
  SelectorLanguage,
  SelectorTheme,
  Table,
  Tabs,
} from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { navigationLinksList } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";
import logo from "@/assets/img/logo.svg";

export const metadata: Metadata = {
  title: "NavigationBar",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>NavigationBar</h1>
      <p>{t("NavigationBar.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "NavigationBar")}
        denseTable
      />

      <h2>{t("types")}</h2>
      <Table
        tableHeadLabels={[t("type"), t("description")]}
        tableData={generateCodeTable(t, "NavigationBar", true)}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBar logoSrc={logo} logoText={"Kriz UI"} />,
          `<NavigationBar logoSrc={logo} logoText={"Kriz UI"} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBar logoSrc={logo} logoText={"Kriz UI"}>
            <Menu label={<IconBrush />} menuWidth="7.5em">
              <li>
                <SelectorTheme />
              </li>
            </Menu>

            <Menu label={<IconGlobe />} menuWidth="7.5em">
              <li>
                <SelectorLanguage />
              </li>
            </Menu>
          </NavigationBar>,
          `<NavigationBar logoSrc={logo} logoText={"Kriz UI"}>\n  <Menu label={<IconBrush />} menuWidth="7.5em">\n    <li>\n      <SelectorTheme />\n    </li>\n  </Menu>\n  <Menu label={<IconGlobe />} menuWidth="7.5em">\n    <li>\n      <SelectorLanguage />\n    </li>\n  </Menu>\n</NavigationBar>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBar
            logoSrc={logo}
            logoText={"Kriz UI"}
            linksList={navigationLinksList}
          />,
          `<NavigationBar logoSrc={logo} logoText={"Kriz UI"} linksList={navigationLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBar
            logoSrc={logo}
            logoText={"Kriz UI"}
            linksList={navigationLinksList}
          >
            <Menu label={<IconBrush />} menuWidth="7.5em">
              <li>
                <SelectorTheme />
              </li>
            </Menu>

            <Menu label={<IconGlobe />} menuWidth="7.5em">
              <li>
                <SelectorLanguage />
              </li>
            </Menu>
          </NavigationBar>,
          `<NavigationBar logoSrc={logo} logoText={"Kriz UI"} linksList={navigationLinksList}>\n  <Menu label={<IconBrush />} menuWidth="7.5em">\n    <li>\n      <SelectorTheme />\n    </li>\n  </Menu>\n  <Menu label={<IconGlobe />} menuWidth="7.5em">\n    <li>\n      <SelectorLanguage />\n    </li>\n  </Menu>\n</NavigationBar>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBar
            logoSrc={logo}
            logoText={"Kriz UI"}
            childrenLeft={
              <>
                <InputText type="search" labelText="Search" />
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
              </>
            }
          />,
          `<NavigationBar logoSrc={logo} logoText={"Kriz UI"} childrenLeft={\n  <>\n    <InputText type="search" labelText="Search" />\n    <Menu label={<IconUser />}>\n      <li>Profile</li>\n      <li>Messages</li>\n      <li><Divider /></li>\n      <li>Settings</li>\n      <li><Divider /></li>\n      <li>Log out</li>\n    </Menu>\n  </>\n} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBar
            logoSrc={logo}
            logoText={"Kriz UI"}
            childrenLeft={
              <>
                <InputText type="search" labelText="Search" />
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
              </>
            }
          >
            <Menu label={<IconBrush />} menuWidth="7.5em">
              <li>
                <SelectorTheme />
              </li>
            </Menu>

            <Menu label={<IconGlobe />} menuWidth="7.5em">
              <li>
                <SelectorLanguage />
              </li>
            </Menu>
          </NavigationBar>,
          `<NavigationBar logoSrc={logo} logoText={"Kriz UI"} childrenLeft={\n  <>\n    <InputText type="search" labelText="Search" />\n    <Menu label={<IconUser />}>\n      <li>Profile</li>\n      <li>Messages</li>\n      <li><Divider /></li>\n      <li>Settings</li>\n      <li><Divider /></li>\n      <li>Log out</li>\n    </Menu>\n  </>\n}>\n  <Menu label={<IconBrush />} menuWidth="7.5em">\n    <li>\n      <SelectorTheme />\n    </li>\n  </Menu>\n  <Menu label={<IconGlobe />} menuWidth="7.5em">\n    <li>\n      <SelectorLanguage />\n    </li>\n  </Menu>\n</NavigationBar>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBar
            logoSrc={logo}
            logoText={"Kriz UI"}
            linksList={navigationLinksList}
            childrenLeft={
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
            }
          />,
          `<NavigationBar logoSrc={logo} logoText={"Kriz UI"} linksList={navigationLinksList} childrenLeft={\n  <Menu label={<IconUser />}>\n    <li>Profile</li>\n    <li>Messages</li>\n    <li><Divider /></li>\n    <li>Settings</li>\n    <li><Divider /></li>\n    <li>Log out</li>\n  </Menu>\n} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NavigationBar
            logoSrc={logo}
            logoText={"Kriz UI"}
            linksList={navigationLinksList}
            childrenLeft={
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
            }
          >
            <Menu label={<IconBrush />} menuWidth="7.5em">
              <li>
                <SelectorTheme />
              </li>
            </Menu>

            <Menu label={<IconGlobe />} menuWidth="7.5em">
              <li>
                <SelectorLanguage />
              </li>
            </Menu>
          </NavigationBar>,
          `<NavigationBar logoSrc={logo} logoText={"Kriz UI"} linksList={navigationLinksList} childrenLeft={\n  <Menu label={<IconUser />}>\n    <li>Profile</li>\n    <li>Messages</li>\n    <li><Divider /></li>\n    <li>Settings</li>\n    <li><Divider /></li>\n    <li>Log out</li>\n  </Menu>\n}>\n  <Menu label={<IconBrush />} menuWidth="7.5em">\n    <li>\n      <SelectorTheme />\n    </li>\n  </Menu>\n  <Menu label={<IconGlobe />} menuWidth="7.5em">\n    <li>\n      <SelectorLanguage />\n    </li>\n  </Menu>\n</NavigationBar>`
        )}
      />
    </>
  );
}
