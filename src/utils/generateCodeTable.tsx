import { useTranslations } from "next-intl";

export default function generateCodeTable(
  t: ReturnType<typeof useTranslations>,
  componentName: string,
  typesTable?: boolean
) {
  if (typesTable) {
    let numberOfTypes = 0;
    while (
      t.has(
        `${componentName}.type-${numberOfTypes + 1}` as Parameters<typeof t>[0]
      )
    ) {
      numberOfTypes++;
    }
    return Array.from({ length: numberOfTypes }, (_, i) => ({
      code: (
        <code>
          {t((componentName + ".type-" + (i + 1)) as Parameters<typeof t>[0])}
        </code>
      ),
      description: (
        <code>
          {t(
            (componentName + ".typeDescription-" + (i + 1)) as Parameters<
              typeof t
            >[0]
          )}
        </code>
      ),
    }));
  } else {
    let numberOfProps = 0;
    while (
      t.has(
        `${componentName}.prop-${numberOfProps + 1}` as Parameters<typeof t>[0]
      )
    ) {
      numberOfProps++;
    }
    return Array.from({ length: numberOfProps }, (_, i) => ({
      code: (
        <code>
          {t((componentName + ".prop-" + (i + 1)) as Parameters<typeof t>[0])}
        </code>
      ),
      description: t(
        (componentName + ".propDescription-" + (i + 1)) as Parameters<
          typeof t
        >[0]
      ),
    }));
  }
}
