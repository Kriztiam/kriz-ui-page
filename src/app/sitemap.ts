import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

  const staticRoutes: string[] = [
    "",
    "/components",
    "/components/accordion",
    "/components/animationLoading",
    "/components/animationScrollDown",
    "/components/animationText",
    "/components/animationTextGradient",
    "/components/avatar",
    "/components/breadcrumb",
    "/components/button",
    "/components/card",
    "/components/divider",
    "/components/drawer",
    "/components/footer",
    "/components/helperGrid",
    "/components/helperSkeleton",
    "/components/imageCarousel",
    "/components/imageGrid",
    "/components/imageViewer",
    "/components/inputCheckbox",
    "/components/inputColor",
    "/components/inputRadio",
    "/components/inputRange",
    "/components/inputRangeDual",
    "/components/inputSelect",
    "/components/inputSelectMultiple",
    "/components/inputText",
    "/components/login",
    "/components/menu",
    "/components/modal",
    "/components/navigationBar",
    "/components/navigationBarBottom",
    "/components/notification",
    "/components/notificationCard",
    "/components/pagination",
    "/components/selectorLanguage",
    "/components/selectorTheme",
    "/components/socialMediaLinks",
    "/components/table",
    "/components/tabs",
    "/components/tooltip",
    "/templates",
    "/templates/landingPage",
    "/templates/blog",
    "/templates/ecommerce",
  ];

  const staticRoutesSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${baseUrl}/en${route}`,
        es: `${baseUrl}/es${route}`,
      },
    },
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return staticRoutesSitemap;
}
