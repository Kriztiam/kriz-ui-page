import { NotificationCard, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "NotificationCard",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>NotificationCard</h1>
      <p>{t("NotificationCard.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "NotificationCard")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NotificationCard type="normal" notificationTitle="Welcome">
            <p>
              This is a standard notification without any status or alert
              styling. You can use it for general information or neutral
              content.
            </p>
          </NotificationCard>,
          `<NotificationCard type="normal" notificationTitle="Welcome">\n  <p>This is a standard notification without any status or alert styling. You can use it for general information or neutral content.</p>\n</NotificationCard>
          `
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NotificationCard type="info" notificationTitle="System Update">
            <p>The system will undergo maintenance tonight at midnight.</p>
          </NotificationCard>,
          `<NotificationCard type="info" notificationTitle="System Update">\n  <p>The system will undergo maintenance tonight at midnight.</p>\n</NotificationCard>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NotificationCard
            type="success"
            notificationTypeLabel="All Good!"
            notificationTitle="Upload Complete"
          >
            <p>Your files have been successfully uploaded.</p>
          </NotificationCard>,
          `<NotificationCard type="success" notificationTypeLabel="All Good!" notificationTitle="Upload Complete">\n  <p>Your files have been successfully uploaded.</p>\n</NotificationCard>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NotificationCard type="warning" notificationTitle="Low Storage">
            <p>Your storage is almost full. Consider deleting unused files.</p>
          </NotificationCard>,
          `<NotificationCard type="warning" notificationTitle="Low Storage">\n  <p>Your storage is almost full. Consider deleting unused files.</p>\n</NotificationCard>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <NotificationCard
            type="error"
            fullScreen
            notificationTitle="System Failure"
          >
            <p>Critical system error. Please restart your application.</p>
          </NotificationCard>,
          `<NotificationCard type="error" fullScreen notificationTitle="System Failure">\n  <p>Critical system error. Please restart your application.</p>\n</NotificationCard>`
        )}
      />
    </>
  );
}
