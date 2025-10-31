"use client";

import { KrizUIContextProvider } from "kriz-ui-next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  return (
    <NextIntlClientProvider locale={locale}>
      <KrizUIContextProvider
        navigation={{ Link, usePathname, useRouter }}
        routing={routing}
      >
        {children}
      </KrizUIContextProvider>
    </NextIntlClientProvider>
  );
}
