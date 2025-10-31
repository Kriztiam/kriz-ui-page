import styles from "./layout.module.css";
import Navigation from "@/components/Navigation/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Navigation>
      <main className={styles.Main}>{children}</main>
    </Navigation>
  );
}
