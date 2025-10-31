import { Button, Footer, InputText, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { footerLinksList, socialMediaLinksList } from "@/utils/examplesData";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";
import logo from "@/assets/img/logo.svg";

export const metadata: Metadata = {
  title: "Footer",
};

function FooterLogoBelowContent() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
        similique.
      </p>
      <p>Argentina - Mendoza</p>
      <Link href="https://github.com/kriztiam">github.com/kriztiam</Link>
    </>
  );
}

function FooterBottomContent() {
  return (
    <p>
      © 2025 KrizUI | Designed By:{" "}
      <Link href="https://github.com/kriztiam">Kriz</Link>
    </p>
  );
}

export default function Page() {
  const t = useTranslations("ComponentsPages");
  return (
    <>
      <h1>Footer</h1>
      <p>{t("Footer.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Footer")}
        denseTable
      />

      <h2>{t("types")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Footer", true)}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Footer
            logoImgSrc={logo}
            logoText={"Kriz UI"}
            logoBelowContent={<FooterLogoBelowContent />}
            linksList={footerLinksList}
            footerBottomContent={<FooterBottomContent />}
            socialMediaLinks={socialMediaLinksList}
          >
            <>
              <p style={{ textAlign: "center" }}>
                Receive all our news and updates
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputText type="email" labelText="Email" />
                <Button>Subscribe</Button>
              </div>
            </>
          </Footer>,
          `<Footer logoImgSrc={logo} logoText={"Kriz UI"} logoBelowContent={<FooterLogoBelowContent />} linksList={footerLinksList} footerBottomContent={<FooterBottomContent />} socialMediaLinks={socialMediaLinksList}>\n  <>\n    <p style={{ textAlign: "center" }}>Receive all our news and updates</p>\n    <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>\n      <InputText type="email" labelText="Email" />\n      <Button>Subscribe</Button>\n    </div>\n  </>\n</Footer>`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Footer
            logoImgSrc={logo}
            logoText={"Kriz UI"}
            logoBelowContent={<FooterLogoBelowContent />}
            linksList={footerLinksList}
            footerBottomContent={<FooterBottomContent />}
            socialMediaLinks={socialMediaLinksList}
          />,
          `<Footer logoImgSrc={logo} logoText={"Kriz UI"} logoBelowContent={<FooterLogoBelowContent />} linksList={footerLinksList} footerBottomContent={<FooterBottomContent />} socialMediaLinks={socialMediaLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Footer
            logoImgSrc={logo}
            logoText={"Kriz UI"}
            linksList={footerLinksList}
            footerBottomContent={<FooterBottomContent />}
            socialMediaLinks={socialMediaLinksList}
          />,
          `<Footer logoImgSrc={logo} logoText={"Kriz UI"} linksList={footerLinksList} footerBottomContent={<FooterBottomContent />} socialMediaLinks={socialMediaLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Footer
            logoImgSrc={logo}
            logoText={"Kriz UI"}
            linksList={footerLinksList}
          />,
          `<Footer logoImgSrc={logo} logoText={"Kriz UI"} linksList={footerLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Footer
            logoImgSrc={logo}
            logoText={"Kriz UI"}
            linksList={footerLinksList}
            socialMediaLinks={socialMediaLinksList}
          />,
          `<Footer logoImgSrc={logo} logoText={"Kriz UI"} linksList={footerLinksList} socialMediaLinks={socialMediaLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Footer
            logoImgSrc={logo}
            logoText={"Kriz UI"}
            socialMediaLinks={socialMediaLinksList}
          />,
          `<Footer logoImgSrc={logo} logoText={"Kriz UI"} socialMediaLinks={socialMediaLinksList} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Footer
            logoImgSrc={logo}
            logoText={"Kriz UI"}
            linksList={footerLinksList}
            footerBottomContent={<FooterBottomContent />}
          />,
          `<Footer logoImgSrc={logo} logoText={"Kriz UI"} linksList={footerLinksList} footerBottomContent={<FooterBottomContent />} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Footer footerBottomContent={<FooterBottomContent />} />,
          `<Footer footerBottomContent={<FooterBottomContent />} />`
        )}
      />
    </>
  );
}
