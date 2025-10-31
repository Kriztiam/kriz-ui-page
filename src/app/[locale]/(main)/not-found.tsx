import styles from "./not-found.module.css";
import { Button, NotificationCard } from "kriz-ui-next";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className={styles.NotFoundContainer}>
      <NotificationCard
        className={styles.NotFoundContent}
        type="error"
        notificationTitle={`404 ${t("pageNotFound")}`}
        fullScreen
      >
        <div>
          <p>{t("descriptionText")}</p>
          <p>{t("goBackText")}</p>
        </div>
        <Button href="/">{t("button")}</Button>
      </NotificationCard>
    </div>
  );
}
