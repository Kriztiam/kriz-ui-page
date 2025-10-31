import {
  faFacebook,
  faGithub,
  faHackerrank,
  faLinkedin,
  faTiktok,
  faTwitch,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBoxesStacked,
  faLayerGroup,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLink, NavLink, NestedLinks } from "kriz-ui-next";

export const sampleText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis in, corrupti animi voluptate dolorem odio. Quaerat alias voluptates blanditiis, voluptatem consectetur soluta ipsa mollitia beatae quia odit, sit culpa. Libero numquam aliquid laborum dolor ut in incidunt reiciendis tempore. Facere illo optio cum voluptates suscipit voluptatem! Praesentium, quibusdam veritatis?";

export const sampleTextSmall =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio dolores ex alias tempore facilis natus, quae fuga aperiam doloribus?";

export const footerLinksList: NestedLinks[] = [
  {
    linkText: "Categories",
    nestedLinks: [
      { linkText: "TypeScript", href: "/TypeScript" },
      { linkText: "React", href: "/React" },
      { linkText: "NextJs", href: "/NextJs" },
      { linkText: "Components", href: "/Components" },
      { linkText: "Templates", href: "/Templates" },
    ],
  },
  {
    linkText: "Quick Links",
    nestedLinks: [
      { linkText: "About Us", href: "/AboutUs" },
      { linkText: "Contact Us", href: "/ContactUs" },
      { linkText: "Contribute", href: "/Contribute" },
      { linkText: "Privacy Policy", href: "/PrivacyPolicy" },
      { linkText: "Sitemap", href: "/Sitemap" },
    ],
  },
  {
    linkText: "Popular Category",
    nestedLinks: [
      { linkText: "Ui Design", href: "/UiDesign" },
      { linkText: "Components", href: "/Components" },
      { linkText: "Templates", href: "/Templates" },
    ],
  },
  {
    linkText: "Our Company",
    nestedLinks: [
      { linkText: "About Us", href: "/AboutUs" },
      { linkText: "How It Works", href: "/HowItWorks" },
      { linkText: "Affiliates", href: "/Affiliates" },
      { linkText: "Testimonials", href: "/Testimonials" },
      { linkText: "Contact Us", href: "/ContactUs" },
      { linkText: "Plan & Pricing", href: "/PlanPricing" },
      { linkText: "Blog", href: "/Blog" },
    ],
  },
  {
    linkText: "Help Support",
    nestedLinks: [
      { linkText: "Support Forum", href: "/SupportForum" },
      { linkText: "Terms & Conditions", href: "/TermsConditions" },
      { linkText: "Support Policy", href: "/SupportPolicy" },
      { linkText: "Refund Policy", href: "/RefundPolicy" },
      { linkText: "FAQs", href: "/FAQs" },
      { linkText: "Buyers Faq", href: "/BuyersFaq" },
      { linkText: "Sellers Faq", href: "/SellersFaq" },
    ],
  },
];

export const STRINGS_ARRAY = [
  "Red",
  "Orange",
  "Yellow",
  "Lime",
  "Green",
  "Forest",
  "Blue",
  "Navy",
  "Purple",
  "Pink",
  "Turquoise",
  "Coral",
  "Peach",
  "Mint",
  "Lavender",
  "Grey",
  "Silver",
  "Gold",
  "Brown",
  "Beige",
  "Cream",
  "Teal",
  "Magenta",
  "Fuchsia",
  "Chartreuse",
  "Rust",
  "Sienna",
  "Ochre",
  "Cobalt",
  "Cerulean",
  "123 Number",
  "456 Number",
  "789 Number",
  "& Symbol",
  "€ Symbol",
  "| Symbol",
  "! Symbol",
];

export const navigationLinksList: (NavLink | NestedLinks)[] = [
  { linkText: "Architecto", href: "/a" },
  { linkText: "Beatae", href: "/b" },
  { linkText: "Consectetur", href: "/c" },
  { linkText: "Dantium", href: "/d" },
  { linkText: "Expedita", href: "/e" },

  {
    linkText: "Expand",
    nestedLinks: [
      { linkText: "Facere", href: "/f" },
      { linkText: "Gumend", href: "/g" },
      { linkText: "Hil", href: "/h" },
      { linkText: "Iciis", href: "/i" },
      { linkText: "Jaecat", href: "/j" },
    ],
  },

  { linkText: "Ktatib", href: "/k" },
  { linkText: "Lusamu", href: "/l" },
  { linkText: "Molestiae", href: "/m" },

  {
    linkText: "Expand2",
    nestedLinks: [
      { linkText: "Necessitatibus", href: "/n" },
      { linkText: "Officia", href: "/o" },
      { linkText: "Perferendis", href: "/p" },
      { linkText: "Quisquam", href: "/q" },
    ],
  },

  { linkText: "Repellendus", href: "/r" },
  { linkText: "Similique", href: "/s" },
];

export const navigationBottomLinksList: IconLink[] = [
  {
    icon: <FontAwesomeIcon icon={faBoxesStacked} />,
    linkText: "Components",
    href: "/components",
  },
  {
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
    linkText: "Templates",
    href: "/templates",
  },
  {
    icon: <FontAwesomeIcon icon={faObjectGroup} />,
    linkText: "Examples",
    href: "/examples",
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    linkText: "GitHub",
    href: "https://github.com/kriztiam",
  },
  {
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
    linkText: "Templates",
    href: "/templates",
  },
  {
    icon: <FontAwesomeIcon icon={faObjectGroup} />,
    linkText: "Examples",
    href: "/examples",
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    linkText: "GitHub",
    href: "https://github.com/kriztiam",
  },
];

export const socialMediaLinksList: IconLink[] = [
  {
    href: "https://www.x.com",
    linkText: "X",
    icon: <FontAwesomeIcon icon={faXTwitter} fixedWidth />,
  },
  {
    href: "https://www.facebook.com",
    linkText: "Facebook",
    icon: <FontAwesomeIcon icon={faFacebook} fixedWidth />,
  },
  {
    href: "https://www.linkedin.com/in/kriztiam",
    linkText: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} fixedWidth />,
  },
  {
    href: "https://www.youtube.com",
    linkText: "YouTube",
    icon: <FontAwesomeIcon icon={faYoutube} fixedWidth />,
  },
  {
    href: "https://www.twitch.com",
    linkText: "Twitch",
    icon: <FontAwesomeIcon icon={faTwitch} fixedWidth />,
  },
  {
    href: "https://www.tiktok.com",
    linkText: "TikTok",
    icon: <FontAwesomeIcon icon={faTiktok} fixedWidth />,
  },
  {
    href: "https://github.com/Kriztiam",
    linkText: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} fixedWidth />,
  },
  {
    href: "https://www.hackerrank.com/Kriztiam",
    linkText: "Hackerrank",
    icon: <FontAwesomeIcon icon={faHackerrank} fixedWidth />,
  },
];

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): { id: string | number; [key: string]: string | number } {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

export const TABLE_ROWS = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];
