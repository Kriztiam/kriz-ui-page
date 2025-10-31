"use client";

import { Button, Notification, Table, Tabs } from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { sampleText } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export default function Page() {
  const t = useTranslations("ComponentsPages");
  const [openNotification1, setOpenNotification1] = useState(false);
  const [openNotification2, setOpenNotification2] = useState(false);
  const [openNotification3, setOpenNotification3] = useState(false);
  const [openNotification4, setOpenNotification4] = useState(false);
  const [openNotification5, setOpenNotification5] = useState(false);
  const [openNotification6, setOpenNotification6] = useState(false);

  return (
    <>
      <h1>Notification</h1>
      <p>{t("Notification.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Notification")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenNotification1(true)}>
              Test normal notification
            </Button>
            <Notification
              type="normal"
              message="This is a normal notification."
              open={openNotification1}
              setOpen={setOpenNotification1}
              position="left"
            />
          </>,
          `<Button onClick={() => setOpenNotification1(true)}>Test normal notification</Button>\n<Notification type="normal" message="This is a normal notification." open={openNotification1} setOpen={setOpenNotification1} position="left" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenNotification2(true)}>
              Test info notification
            </Button>
            <Notification
              type="info"
              message="This is a info notification."
              open={openNotification2}
              setOpen={setOpenNotification2}
            />
          </>,
          `<Button onClick={() => setOpenNotification2(true)}>Test info notification</Button>\n<Notification type="info" message="This is a info notification." open={openNotification2} setOpen={setOpenNotification2} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenNotification3(true)}>
              Test success notification
            </Button>
            <Notification
              type="success"
              message="This is a success notification."
              open={openNotification3}
              setOpen={setOpenNotification3}
              position="right"
            />
          </>,
          `<Button onClick={() => setOpenNotification3(true)}>Test success notification</Button>\n<Notification type="success" message="This is a success notification." open={openNotification3} setOpen={setOpenNotification3} position="right" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenNotification4(true)}>
              Test warning notification
            </Button>
            <Notification
              type="warning"
              message="This is a warning notification."
              open={openNotification4}
              setOpen={setOpenNotification4}
              fromBottom
              position="left"
            />
          </>,
          `<Button onClick={() => setOpenNotification4(true)}>Test warning notification</Button>\n<Notification type="warning" message="This is a warning notification." open={openNotification4} setOpen={setOpenNotification4} fromBottom position="left" />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenNotification5(true)}>
              Test error notification
            </Button>
            <Notification
              type="error"
              message="This is a error notification."
              open={openNotification5}
              setOpen={setOpenNotification5}
              fromBottom
            />
          </>,
          `<Button onClick={() => setOpenNotification5(true)}>Test error notification</Button>\n<Notification type="error" message="This is a error notification." open={openNotification5} setOpen={setOpenNotification5} fromBottom />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenNotification6(true)}>
              Test long notification
            </Button>
            <Notification
              message={sampleText}
              open={openNotification6}
              setOpen={setOpenNotification6}
              fromBottom
              position="right"
            />
          </>,
          `<Button onClick={() => setOpenNotification6(true)}>Test long notification</Button>\n<Notification message={sampleText} open={openNotification6} setOpen={setOpenNotification6} fromBottom position="right" />`
        )}
      />
    </>
  );
}
