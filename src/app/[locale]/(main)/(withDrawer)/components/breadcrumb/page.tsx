import { Breadcrumb, IconHouse, Table, Tabs } from "kriz-ui-next";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import generateCodeTable from "@/utils/generateCodeTable";
import generateExampleTabsContent from "@/utils/generateExampleTabsContent";

export const metadata: Metadata = {
  title: "Breadcrumb",
};

export default function Page() {
  const t = useTranslations("ComponentsPages");

  const linkListExample1 = [
    { linkText: "Lists", href: "/lists" },
    { linkText: "Objects", href: "/lists/objects" },
    {
      linkText: "Fruits",
      nestedLinks: [
        { linkText: "Fruits", href: "/lists/objects/fruits" },
        { linkText: "Colors", href: "/lists/objects/colors" },
        {
          linkText: "Vegetables",
          href: "/lists/objects/vegetables",
        },
        { linkText: "Cars", href: "/lists/objects/cars" },
      ],
    },

    { linkText: "Orange", href: "/lists/objects/fruits/orange" },
  ];

  const linkListExample2 = [
    {
      linkText: "Compras",
      nestedLinks: [
        { linkText: "Compras", href: "/compras" },
        { linkText: "Ventas", href: "/ventas" },
      ],
    },
    {
      linkText: "2023",
      nestedLinks: [
        { linkText: "2025", href: "/compras/2025" },
        { linkText: "2024", href: "/compras/2024" },
        { linkText: "2023", href: "/compras/2023" },
        { linkText: "2022", href: "/compras/2022" },
        { linkText: "2021", href: "/compras/2021" },
        { linkText: "2020", href: "/compras/2020" },
      ],
    },
    {
      linkText: "Marzo",
      nestedLinks: [
        { linkText: "Enero", href: "/compras/2025/enero" },
        { linkText: "Febrero", href: "/compras/2025/febrero" },
        { linkText: "Marzo", href: "/compras/2025/marzo" },
        { linkText: "Abril", href: "/compras/2025/abril" },
        { linkText: "Mayo", href: "/compras/2025/mayo" },
        { linkText: "Junio", href: "/compras/2025/junio" },
        { linkText: "Julio", href: "/compras/2025/julio" },
        { linkText: "Agosto", href: "/compras/2025/agosto" },
        {
          linkText: "Septiembre",
          href: "/compras/2025/septiembre",
        },
        { linkText: "Octubre", href: "/compras/2025/octubre" },
        { linkText: "Noviembre", href: "/compras/2025/noviembre" },
        { linkText: "Diciembre", href: "/compras/2025/diciembre" },
      ],
    },
  ];

  const linkListExample3 = [
    { linkText: "Docs", href: "/docs" },
    {
      linkText: "Components",
      nestedLinks: [
        {
          linkText: "Breadcrumb",
          href: "/docs/components/breadcrumb",
        },
        { linkText: "Avatar", href: "/docs/components/avatar" },
      ],
    },
    { linkText: "Breadcrumb", href: "/docs/components/breadcrumb" },
  ];

  return (
    <>
      <h1>Breadcrumb</h1>
      <p>{t("Breadcrumb.description")}</p>

      <h2>{t("props")}</h2>
      <Table
        tableHeadLabels={[t("prop"), t("description")]}
        tableData={generateCodeTable(t, "Breadcrumb")}
        denseTable
      />

      <h2>{t("types")}</h2>
      <Table
        tableHeadLabels={[t("type"), t("description")]}
        tableData={generateCodeTable(t, "Breadcrumb", true)}
        denseTable
      />

      <h2>{t("examples")}</h2>
      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Breadcrumb linksList={linkListExample1} />,
          `<Breadcrumb linksList={linkListExample1} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Breadcrumb
            homeLink={{
              linkText: "Home",
              href: "/",
              icon: <IconHouse />,
            }}
            linksList={linkListExample2}
          />,
          `<Breadcrumb homeLink={{ linkText: "Home", href: "/", icon: <IconHouse />}} linksList={linkListExample2} />`
        )}
      />

      <Tabs
        tabsNames={[t("example"), t("code")]}
        tabsContent={generateExampleTabsContent(
          <Breadcrumb
            homeLink={{ linkText: "Home", href: "/" }}
            linksList={linkListExample3}
          />,
          `<Breadcrumb homeLink={{ linkText: "Home", href: "/" }} linksList={linkListExample3} />`
        )}
      />
    </>
  );
}
