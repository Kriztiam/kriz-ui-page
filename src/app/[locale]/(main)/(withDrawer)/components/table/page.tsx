"use client";

import { Button, Divider, InputText, Modal, Table, Tabs } from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { TABLE_ROWS } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export default function Page() {
  const t = useTranslations("ComponentsPages");

  const [selectedTableRow, setSelectedTableRow] = useState<{
    id: string | number;
    [key: string]: string | number;
  } | null>(null);
  const [selectedTableRows, setSelectedTableRows] = useState<
    (string | number)[] | null
  >(null);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  function rowEdit(id: string | number) {
    console.log("Edit: " + id);
    const obj = TABLE_ROWS.find((obj) => obj.id === id);
    if (obj) {
      setSelectedTableRow(obj);
    }
    setOpenModalEdit(true);
  }

  function rowDelete(id: string | number) {
    console.log("Delete: " + id);
    const obj = TABLE_ROWS.find((obj) => obj.id === id);
    if (obj) {
      setSelectedTableRow(obj);
    }
    setOpenModalDelete(true);
  }

  const [tableSearchTerm, setTableSearchTerm] = useState<string>("");

  return (
    <>
      <h1>Table</h1>
      <p>{t("Table.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Table")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <Modal isOpen={openModalDelete} setIsOpen={setOpenModalDelete}>
              <p>
                Are you sure you want to delete{" "}
                {JSON.stringify(selectedTableRow)} ?
              </p>
              <Divider />
              <div
                style={{ display: "flex", marginTop: "0.5rem", gap: "0.5rem" }}
              >
                <Button
                  onClick={() => setOpenModalDelete(false)}
                  color="hsl(var(--colorError))"
                >
                  Yes
                </Button>
                <Button onClick={() => setOpenModalDelete(false)}>No</Button>
              </div>
            </Modal>
            <Modal isOpen={openModalEdit} setIsOpen={setOpenModalEdit}>
              {selectedTableRow && (
                <div>
                  {JSON.stringify(selectedTableRow)}
                  {Object.entries(selectedTableRow).map(([key, value]) => (
                    <InputText
                      key={`editTableRow-${key}`}
                      labelText={key.charAt(0).toUpperCase() + key.slice(1)}
                      defaultValue={String(value)}
                    />
                  ))}
                </div>
              )}
              <Divider />
              <div
                style={{ display: "flex", marginTop: "0.5rem", gap: "0.5rem" }}
              >
                <Button onClick={() => setOpenModalEdit(false)}>Save</Button>
                <Button onClick={() => setOpenModalEdit(false)} outline>
                  Cancel
                </Button>
              </div>
            </Modal>

            <Table
              tableData={TABLE_ROWS}
              checkboxSelection
              rowEditFunction={rowEdit}
              rowDeleteFunction={rowDelete}
              setSelectedTableRows={setSelectedTableRows}
            />
            <output>
              SelectedTableRowsIds: {JSON.stringify(selectedTableRows)}
            </output>
          </>,
          `<Modal isOpen={openModalDelete} setIsOpen={setOpenModalDelete}>\n  <p>Are you sure you want to delete {JSON.stringify(selectedTableRow)} ?</p>\n  <Divider />\n  <div style={{ display: "flex", marginTop: "0.5rem", gap: "0.5rem" }}>\n    <Button onClick={() => setOpenModalDelete(false)} color="hsl(var(--colorError))">Yes</Button>\n    <Button onClick={() => setOpenModalDelete(false)}>No</Button>\n  </div>\n</Modal>\n\n<Modal isOpen={openModalEdit} setIsOpen={setOpenModalEdit}>\n  {selectedTableRow && (\n    <div>\n      {JSON.stringify(selectedTableRow)}\n      {Object.entries(selectedTableRow).map(([key, value], i) => {\n        return (\n          <InputText key={"editTableRow" + i} labelText={key.charAt(0).toUpperCase() + key.slice(1)} defaultValue={value}/>\n        );\n      })}\n    </div>\n  )}\n  <Divider />\n  <div style={{ display: "flex", marginTop: "0.5rem", gap: "0.5rem" }}>\n    <Button onClick={() => setOpenModalEdit(false)}>Save</Button>\n    <Button onClick={() => setOpenModalEdit(false)} outline>Cancel</Button>\n  </div>\n</Modal>\n\n<Table tableData={TABLE_ROWS} checkboxSelection rowEditFunction={rowEdit} rowDeleteFunction={rowDelete} setSelectedTableRows={setSelectedTableRows} />\n\n<output>SelectedTableRowsIds: {JSON.stringify(selectedTableRows)}</output>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <>
            <InputText
              type="search"
              labelText="Search in table"
              onChange={setTableSearchTerm}
            />
            <Table
              tableData={TABLE_ROWS}
              denseTable
              checkboxSelection
              searchTerm={tableSearchTerm}
              rowEditFunction={rowEdit}
              rowDeleteFunction={rowDelete}
            />
          </>,
          `<InputText type="search" labelText="Search in table" onChange={setTableSearchTerm} />\n<Table tableData={TABLE_ROWS} denseTable checkboxSelection searchTerm={tableSearchTerm} rowEditFunction={rowEdit} rowDeleteFunction={rowDelete} />`
        )}
      />
    </>
  );
}
