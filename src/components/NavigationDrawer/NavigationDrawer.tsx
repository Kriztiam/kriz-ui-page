"use client";

import styles from "./NavigationDrawer.module.css";
import { Drawer, IconRhombus, SubMenu } from "kriz-ui-next";
import { Link, usePathname } from "@/i18n/navigation";
import { LINKS_COMPONENTS } from "@/components/Navigation/Navigation";

export default function NavigationDrawer() {
  const pathname = usePathname();
  return (
    <Drawer>
      <nav>
        <menu>
          <SubMenu label={"Docs"}>
            <li>
              <Link
                href={"/docs"}
                className={[
                  styles.DrawerLink,
                  pathname === "/docs" && styles.DrawerLinkActive,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {pathname === "/docs" && <IconRhombus />}Installation
              </Link>
            </li>
            <li>
              <Link
                href={"/docs/styles"}
                className={[
                  styles.DrawerLink,
                  pathname === "/docs/styles" && styles.DrawerLinkActive,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {pathname === "/docs/styles" && <IconRhombus />}
                Styles
              </Link>
            </li>
          </SubMenu>

          <SubMenu label={"Components"}>
            {LINKS_COMPONENTS.map((nestedLink) => (
              <li key={nestedLink.linkText}>
                <Link
                  href={nestedLink.href}
                  className={[
                    styles.DrawerLink,
                    pathname === nestedLink.href && styles.DrawerLinkActive,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {pathname === nestedLink.href && <IconRhombus />}
                  {nestedLink.linkText}
                </Link>
              </li>
            ))}
          </SubMenu>

          <li>
            <Link
              href={"/icons"}
              className={[
                styles.DrawerLink,
                pathname === "/icons" && styles.DrawerLinkActive,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {pathname === "/icons" && <IconRhombus />}
              Icons
            </Link>
          </li>

          <li>
            <Link
              href={"/templates"}
              className={[
                styles.DrawerLink,
                pathname === "/templates" && styles.DrawerLinkActive,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {pathname === "/templates" && <IconRhombus />}
              Templates
            </Link>
          </li>
        </menu>
      </nav>
    </Drawer>
  );
}
