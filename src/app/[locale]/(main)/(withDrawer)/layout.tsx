import styles from "./layout.module.css";
import NavigationDrawer from "@/components/NavigationDrawer/NavigationDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.DrawerLayout}>
      <NavigationDrawer />
      <div className={styles.DrawerLayoutChildren}>{children}</div>
    </div>
  );
}
