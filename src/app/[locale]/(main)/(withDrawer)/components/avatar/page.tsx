import { Avatar, Button, Divider, Menu, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Avatar",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Avatar</h1>
      <p>{t("Avatar.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Avatar")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Avatar name="Kriz" />
            <Avatar name="Kriz" size="3rem" />
          </>,
          `<Avatar name="Kriz" />\n<Avatar name="Kriz" size="3rem" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Avatar name="Kriz" imgURL={"/img/400x400.webp"} />
            <Avatar name="Kriz" imgURL={"/img/400x400.webp"} size="3rem" />
          </>,
          `<Avatar name="Kriz" imgURL={"/img/400x400.webp"} />\n<Avatar name="Kriz" imgURL={"/img/400x400.webp"} size="3rem" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Avatar />
            <Avatar size="3rem" />
          </>,
          `<Avatar />\n<Avatar size="3rem" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Avatar color="orange" />
            <Avatar size="3rem" color="orange" />
          </>,
          `<Avatar color="orange" />\n<Avatar size="3rem" color="orange" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Button>
            <Avatar /> Profile
          </Button>,
          `<Button>\n  <Avatar /> Profile\n</Button>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Menu label={"Account"} menuWidth="7rem">
            <li>
              <span>
                <Avatar size="1.5rem" /> Profile
              </span>
            </li>
            <li>Messages</li>
            <li>
              <Divider />
            </li>
            <li>Settings</li>
            <li>
              <Divider />
            </li>
            <li>Log out</li>
          </Menu>,
          `<Menu label={"Account"} menuWidth="7rem">\n  <li>\n    <span>\n      <Avatar size="1.5rem" /> Profile\n    </span>\n  </li>\n  <li>Messages</li>\n  <li><Divider /></li>\n  <li>Settings</li>\n  <li><Divider /></li>\n  <li>Log out</li>\n</Menu>`
        )}
      />
    </>
  );
}
