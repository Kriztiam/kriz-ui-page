import { Button, HelperGrid } from "kriz-ui-next";
import { useTranslations } from "next-intl";
import { LINKS_COMPONENTS } from "@/components/Navigation/Navigation";

export default function Page() {
  const t = useTranslations("Navigation");

  const groupedLinks = LINKS_COMPONENTS.reduce(
    (groups, link) => {
      const firstLetter = link.linkText[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(link);
      return groups;
    },
    {} as Record<string, typeof LINKS_COMPONENTS>
  );

  const sortedLetters = Object.keys(groupedLinks).sort();

  return (
    <>
      <h1>{t("components")}</h1>
      {sortedLetters.map((letter) => (
        <section key={letter}>
          <h2
            style={{
              fontSize: "var(--fontSize400)",
              color: "hsl(var(--fontColor),0.8)",
            }}
          >
            {letter}
          </h2>
          <HelperGrid>
            {groupedLinks[letter].map((link) => (
              <Button key={link.linkText} href={link.href} outline>
                {link.linkText}
              </Button>
            ))}
          </HelperGrid>
        </section>
      ))}
    </>
  );
}
