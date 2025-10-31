import styles from "./Navigation.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBoxesStacked,
  faFile,
  faIcons,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Divider,
  IconBrush,
  IconGlobe,
  Menu,
  NavLink,
  NavigationBar,
  NavigationBarBottom,
  SelectorLanguage,
  SelectorTheme,
  SubMenu,
} from "kriz-ui-next";
import { useTranslations } from "next-intl";
import logo from "@/assets/img/logo.svg";

export const LINKS_COMPONENTS: NavLink[] = [
  { linkText: "Accordion", href: "/components/accordion" },
  {
    linkText: "AnimationLoading",
    href: "/components/animationLoading",
  },
  {
    linkText: "AnimationScrollDown",
    href: "/components/animationScrollDown",
  },
  {
    linkText: "AnimationText",
    href: "/components/animationText",
  },
  {
    linkText: "AnimationTextGradient",
    href: "/components/animationTextGradient",
  },
  { linkText: "Avatar", href: "/components/avatar" },
  { linkText: "Breadcrumb", href: "/components/breadcrumb" },
  { linkText: "Button", href: "/components/button" },
  { linkText: "Card", href: "/components/card" },
  { linkText: "Divider", href: "/components/divider" },
  { linkText: "Drawer", href: "/components/drawer" },
  { linkText: "Footer", href: "/components/footer" },
  { linkText: "HelperGrid", href: "/components/helperGrid" },
  {
    linkText: "HelperSkeleton",
    href: "/components/helperSkeleton",
  },
  {
    linkText: "ImageCarousel",
    href: "/components/imageCarousel",
  },
  { linkText: "ImageGrid", href: "/components/imageGrid" },
  { linkText: "ImageViewer", href: "/components/imageViewer" },
  {
    linkText: "InputCheckbox",
    href: "/components/inputCheckbox",
  },
  { linkText: "InputColor", href: "/components/inputColor" },
  { linkText: "InputRadio", href: "/components/inputRadio" },
  { linkText: "InputRange", href: "/components/inputRange" },
  {
    linkText: "InputRangeDual",
    href: "/components/inputRangeDual",
  },
  { linkText: "InputSelect", href: "/components/inputSelect" },
  {
    linkText: "InputSelectMultiple",
    href: "/components/inputSelectMultiple",
  },
  { linkText: "InputText", href: "/components/inputText" },
  { linkText: "Login", href: "/components/login" },
  { linkText: "Menu", href: "/components/menu" },
  { linkText: "Modal", href: "/components/modal" },
  {
    linkText: "NavigationBar",
    href: "/components/navigationBar",
  },
  {
    linkText: "NavigationBarBottom",
    href: "/components/navigationBarBottom",
  },
  { linkText: "Notification", href: "/components/notification" },
  { linkText: "NotificationCard", href: "/components/notificationCard" },
  { linkText: "Pagination", href: "/components/pagination" },
  {
    linkText: "SelectorLanguage",
    href: "/components/selectorLanguage",
  },
  {
    linkText: "SelectorTheme",
    href: "/components/selectorTheme",
  },
  {
    linkText: "SocialMediaLinks",
    href: "/components/socialMediaLinks",
  },
  { linkText: "Table", href: "/components/table" },
  { linkText: "Tabs", href: "/components/tabs" },
  { linkText: "Tooltip", href: "/components/tooltip" },
];

export const LINKS_TEMPLATES: NavLink[] = [
  { linkText: "Landing page", href: "/templates/landingPage" },
  { linkText: "Blog", href: "/templates/blog" },
  { linkText: "E-Commerce", href: "/templates/ecommerce" },
];

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Navigation");
  const linkList = [
    {
      linkText: "Docs",
      nestedLinks: [
        { linkText: t("installation"), href: "/docs" },
        { linkText: t("styles"), href: "/docs/styles" },
      ],
    },
    {
      linkText: t("components"),
      nestedLinks: LINKS_COMPONENTS,
    },
    { linkText: t("icons"), href: "/icons" },
    {
      linkText: t("templates"),
      nestedLinks: LINKS_TEMPLATES,
    },
    { linkText: "GitHub", href: "https://github.com/kriztiam" },
  ];

  return (
    <>
      <header>
        <NavigationBar
          logoSrc={logo}
          logoText={"Kriz UI"}
          linksList={linkList}
          className={styles.NavigationDesktop}
          aria-label="Primary navigation"
        >
          <Menu label={<IconBrush />} menuWidth="7.5em">
            <li>
              <SelectorTheme customColor />
            </li>
          </Menu>

          <Menu label={<IconGlobe />} menuWidth="7.5em">
            <li>
              <SelectorLanguage />
            </li>
          </Menu>
        </NavigationBar>
      </header>

      {children}

      <NavigationBarBottom
        logoSrc={logo}
        linksList={linkList}
        linksInBar={[
          {
            icon: <FontAwesomeIcon icon={faFile} />,
            linkText: "Docs",
            href: "/docs",
          },
          {
            icon: <FontAwesomeIcon icon={faBoxesStacked} />,
            linkText: t("components"),
            href: "/components",
          },
          {
            icon: <FontAwesomeIcon icon={faIcons} />,
            linkText: t("icons"),
            href: "/icons",
          },
          {
            icon: <FontAwesomeIcon icon={faObjectGroup} />,
            linkText: t("templates"),
            href: "/templates",
          },
          {
            icon: <FontAwesomeIcon icon={faGithub} />,
            linkText: "GitHub",
            href: "https://github.com/kriztiam",
          },
        ]}
        showIconLabel
        className={styles.NavigationMobile}
        aria-label="Primary navigation"
      >
        <Divider parentPadding={"0.5rem"} style={{ margin: "0.25rem 0" }} />

        <menu>
          <SubMenu label={<IconBrush />}>
            <li>
              <SelectorTheme customColor />
            </li>
          </SubMenu>

          <SubMenu label={<IconGlobe />}>
            <li>
              <SelectorLanguage />
            </li>
          </SubMenu>
        </menu>
      </NavigationBarBottom>
    </>
  );
}
