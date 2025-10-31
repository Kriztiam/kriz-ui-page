"use client";

import {
  Button,
  Drawer,
  IconBrush,
  IconGlobe,
  InputText,
  SelectorLanguage,
  SelectorTheme,
  SubMenu,
  Table,
  Tabs,
} from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { navigationLinksList } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

function DrawerExample() {
  return (
    <>
      <nav>
        <menu>
          {navigationLinksList.map((link) =>
            "nestedLinks" in link ? (
              <SubMenu key={link.linkText} label={link.linkText}>
                {link.nestedLinks.map((nestedLink) => (
                  <li key={nestedLink.linkText}>
                    <Link href={nestedLink.href}>{nestedLink.linkText}</Link>
                  </li>
                ))}
              </SubMenu>
            ) : (
              <li key={link.linkText}>
                <Link href={link.href}>{link.linkText}</Link>
              </li>
            )
          )}
        </menu>
      </nav>

      <menu>
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

        <li>
          <InputText type="search" labelText="Search" />
        </li>

        <SubMenu label={"Search"}>
          <li>
            <InputText type="search" labelText="Search" />
          </li>
        </SubMenu>
      </menu>
    </>
  );
}

export default function Page() {
  const t = useTranslations("ComponentsPages");
  const [openDrawer1, setOpenDrawer1] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const [openDrawer3, setOpenDrawer3] = useState(false);
  return (
    <>
      <h1>Drawer</h1>
      <p>{t("Drawer.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Drawer")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Drawer>
            <DrawerExample />
          </Drawer>,
          `<Drawer>\n  <nav>\n    <menu>\n      {navigationLinksList.map((link, i) => {\n        if ("nestedLinks" in link) {\n          return (\n            <SubMenu key={link.linkText} label={link.linkText}>\n              {link.nestedLinks.map((link) => {\n                return (\n                  <li key={link.linkText}>\n                    <Link href={link.href}>{link.linkText}</Link>\n                  </li>\n                );\n              })}\n            </SubMenu>\n          );\n        } else {\n          return (\n            <li key={link.linkText}>\n              <Link href={link.href}>{link.linkText}</Link>\n            </li>\n          );\n        }\n      })}\n    </menu>\n  </nav>\n  <menu>\n    <SubMenu label={<IconBrush />}>\n      <SelectorTheme />\n    </SubMenu>\n\n    <SubMenu label={<IconGlobe />}>\n      <SelectorLanguage />\n    </SubMenu>\n\n    <li>\n      <InputText type="search" labelText="Search" />\n    </li>\n\n    <SubMenu label={"Search"}>\n      <InputText type="search" labelText="Search" />\n    </SubMenu>\n  </menu>\n</Drawer>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenDrawer1((prev) => !prev)}>
              Open drawer
            </Button>

            <Drawer isOpen={openDrawer1} setIsOpen={setOpenDrawer1} fromRight>
              <DrawerExample />
            </Drawer>
          </>,
          `<Button onClick={() => setOpenDrawer1((prev) => !prev)}>Open drawer</Button>\n<Drawer isOpen={openDrawer1} setIsOpen={setOpenDrawer1} fromRight>\n  <DrawerExample />\n</Drawer>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenDrawer2((prev) => !prev)}>
              Open fixed drawer
            </Button>

            <Drawer isOpen={openDrawer2} setIsOpen={setOpenDrawer2} fixed>
              <DrawerExample />
            </Drawer>
          </>,
          `<Button onClick={() => setOpenDrawer2((prev) => !prev)}>Open fixed drawer</Button>\n<Drawer isOpen={openDrawer2} setIsOpen={setOpenDrawer2} fixed>\n  <DrawerExample />\n</Drawer>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenDrawer3((prev) => !prev)}>
              Open fixed drawer from right
            </Button>

            <Drawer
              isOpen={openDrawer3}
              setIsOpen={setOpenDrawer3}
              fixed
              fromRight
            >
              <DrawerExample />
            </Drawer>
          </>,
          `<Button onClick={() => setOpenDrawer3((prev) => !prev)}>Open fixed drawer from right</Button>\n<Drawer isOpen={openDrawer3} setIsOpen={setOpenDrawer3} fixed fromRight>\n  <DrawerExample />\n</Drawer>`
        )}
      />
    </>
  );
}
