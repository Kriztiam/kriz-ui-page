"use client";

import { Button, Divider, Login, Modal, Table, Tabs } from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { sampleText } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export default function Page() {
  const t = useTranslations("ComponentsPages");
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    <>
      <h1>Modal</h1>
      <p>{t("Modal.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Modal")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenModal(true)}>Open modal</Button>
            <Modal isOpen={openModal} setIsOpen={setOpenModal}>
              <Login />
            </Modal>
          </>,
          `<Button onClick={() => setOpenModal(true)}>Open modal</Button>\n<Modal isOpen={openModal} setIsOpen={setOpenModal}>\n  <Login />\n</Modal>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Button onClick={() => setOpenModal2(true)}>Open modal 2</Button>
            <Modal isOpen={openModal2} setIsOpen={setOpenModal2}>
              <p>{sampleText}</p>
              <Divider style={{ margin: "0.5rem 0" }} />
              <Button onClick={() => setOpenModal2(false)}>Close</Button>
            </Modal>
          </>,
          `<Button onClick={() => setOpenModal2(true)}>Open modal 2</Button>\n<Modal isOpen={openModal2} setIsOpen={setOpenModal2}>\n  <p>{sampleText}</p>\n  <Divider style={{ margin: "0.5rem 0" }} />\n  <Button onClick={() => setOpenModal2(false)}>Close</Button>\n</Modal>`
        )}
      />
    </>
  );
}
