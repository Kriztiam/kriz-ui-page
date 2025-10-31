import { Avatar, Button, Card, Divider, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { sampleTextSmall } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Card",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Card</h1>
      <p>{t("Card.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Card")}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Card
            style={{
              maxWidth: "16rem",
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
          </Card>,
          `<Card style={{ maxWidth: "16rem", aspectRatio: "9/13", display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem", }}>\n  <div>\n    <h4>Consectetur</h4>\n    <h5>Placeat optio</h5>\n  </div>\n  <Divider />\n  <h6>Veniam labore</h6>\n  <p>{sampleTextSmall}</p>\n  <Divider />\n  <Button>Button</Button>\n</Card>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Card
            style={{
              width: "16rem",
              aspectRatio: "9/13",
              gap: "0.5rem",
            }}
          >
            <img src={"/img/1600x800.webp"} alt="Card test" />
            <p>{sampleTextSmall}</p>
            <Button>Button</Button>
          </Card>,
          `<Card style={{ width: "16rem", aspectRatio: "9/13", gap: "0.5rem"}}>\n  <img src={"/img/1600x800.webp"} alt="Card test" />\n  <p>{sampleTextSmall}</p>\n  <Button>Button</Button>\n</Card>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Card
            style={{
              width: "16rem",
              aspectRatio: "0.7",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Avatar />
              <h6>Veniam labore</h6>
            </div>
            <Divider />
            <p>{sampleTextSmall}</p>
            <Divider />
            <Button outline>Button</Button>
            <Button>Button</Button>
          </Card>,
          `<Card style={{ width: "16rem", aspectRatio: "0.7", gap: "0.5rem"}}>\n  <div style={{ display: "flex", alignItems: "center", gap: "1rem"}}>\n    <Avatar />\n    <h6>Veniam labore</h6>\n  </div>\n  <Divider />\n  <p>{sampleTextSmall}</p>\n  <Divider />\n  <Button outline>Button</Button>\n  <Button>Button</Button>\n</Card>`
        )}
      />
    </>
  );
}
