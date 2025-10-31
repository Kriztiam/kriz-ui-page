import {
  Button,
  Card,
  Divider,
  HelperSkeleton,
  Table,
  Tabs,
} from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { sampleTextSmall } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "HelperSkeleton",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>HelperSkeleton</h1>
      <p>{t("HelperSkeleton.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "HelperSkeleton")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <div style={{ display: "flex", gap: "1rem" }}>
            <Card
              style={{
                width: "16rem",
                aspectRatio: "9/13",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1rem",
              }}
            >
              <div>
                <h4>Consectetur</h4>
                <h5>Placeat optio</h5>
              </div>
              <Divider />
              <h6>Veniam labore</h6>
              <p>{sampleTextSmall}</p>
              <Divider />
              <Button>Button</Button>
            </Card>

            <Card
              style={{
                width: "16rem",
                aspectRatio: "9/13",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1rem",
              }}
            >
              <div>
                <HelperSkeleton text="h4" />
                <HelperSkeleton text="h5" />
              </div>
              <Divider />
              <HelperSkeleton text="h6" />

              <div>
                <HelperSkeleton text="p" color="orangered" />
                <HelperSkeleton text="p" color="orange" />
                <HelperSkeleton text="p" color="yellow" />
                <HelperSkeleton text="p" color="greenyellow" />
              </div>
              <Divider />
              <HelperSkeleton height="2.25rem" />
            </Card>
          </div>,
          `<div>\n  <Card>\n    <div>\n      <h4>Consectetur</h4>\n      <h5>Placeat optio</h5>\n    </div>\n    <Divider />\n    <h6>Veniam labore</h6>\n    <p>{sampleTextSmall}</p>\n    <Divider />\n    <Button>Button</Button>\n  </Card>\n\n  <Card>\n    <div>\n      <HelperSkeleton text="h4" />\n      <HelperSkeleton text="h5" />\n    </div>\n    <Divider />\n    <HelperSkeleton text="h6" />\n    <div>\n      <HelperSkeleton text="p" color="orangered" />\n      <HelperSkeleton text="p" color="orange" />\n      <HelperSkeleton text="p" color="yellow" />\n      <HelperSkeleton text="p" color="greenyellow" />\n    </div>\n    <Divider />\n    <HelperSkeleton height="2.25rem" />\n  </Card>\n</div>`
        )}
      />
    </>
  );
}
