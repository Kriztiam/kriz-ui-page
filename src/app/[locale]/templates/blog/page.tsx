import styles from "./page.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Footer,
  HelperGrid,
  InputText,
  NavigationBar,
  Pagination,
  SelectorTheme,
  Tabs,
} from "kriz-ui-next";
import "kriz-ui-next/lavender";
import { Metadata } from "next";
import { Fragment } from "react";
import logo from "@/assets/img/logo.svg";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  const blogCards = [
    {
      category: "Nature",
      imageUrl: "/img/1600x800.webp",
      title: "Chasing Light in the mountains",
      description:
        "A journey through the serene mountain ranges, capturing the changing moods of nature with every sunrise.",
      date: new Date("2025-08-10"),
    },
    {
      category: "Urban",
      imageUrl: "/img/2560x1440.webp",
      title: "Neon Dreams: Urban Nights",
      description:
        "Exploring the vibrant city lights and quiet back alleys of the city through the lens of night photography.",
      date: new Date("2025-07-22"),
    },
    {
      category: "Travel",
      imageUrl: "/img/1200x800.webp",
      title: "A Travel Photographer's Diary",
      description:
        "Here's how to capture the soul of each landscape in your travel photos.",
      date: new Date("2025-06-18"),
    },
    {
      category: "Black & White",
      imageUrl: "/img/720x1280.webp",
      title: "Monochrome Moments: The Art of Black & White",
      description:
        "Learn how to use contrast and emotion to create powerful black & white images that tell a story.",
      date: new Date("2025-09-01"),
    },
    {
      category: "Travel",
      imageUrl: "/img/1400x1000.webp",
      title: "Center of Light",
      description:
        "A towering spiral of windows and stone draws the eye upward toward a burst of light, where architecture meets sky.",
      date: new Date("2025-05-27"),
    },
    {
      category: "Nature",
      imageUrl: "/img/800x600.webp",
      title: "The Stillness of Forests: Capturing Natural Silence",
      description:
        "Photographing the depth, light, and texture of forest environments — a guide to still and soulful compositions.",
      date: new Date("2025-08-30"),
    },
    {
      category: "Urban",
      imageUrl: "/img/400x400.webp",
      title: "Urban Architecture Photography",
      description:
        "From brutalist facades to glass skyscrapers, learn how to find geometry and rhythm in city structures.",
      date: new Date("2025-07-15"),
    },
    {
      category: "Travel",
      imageUrl: "/img/2520x1080.webp",
      title: "Where the Horizon Breathes",
      description:
        "A guide to photographing dramatic landscapes — what to pack and where to go.",
      date: new Date("2025-06-02"),
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(blogCards.map((card) => card.category))),
  ];

  const filteredTabsContent = categories.map((category) => (
    <Fragment key={category}>
      <HelperGrid columnsNumber={3}>
        {blogCards
          .filter((card) => category === "All" || card.category === category)
          .map((blogCard, index) => (
            <Card key={`blogCard${index}`} className={styles.Card}>
              <a href="#Post">
                <img
                  src={blogCard.imageUrl}
                  alt={"Example blog card " + index}
                />
                <div>
                  <h2>{blogCard.title}</h2>
                  <p>{blogCard.description}</p>
                  <time dateTime={blogCard.date.toISOString()}>
                    {new Intl.DateTimeFormat("en-GB").format(blogCard.date)}
                  </time>
                </div>
              </a>
            </Card>
          ))}
      </HelperGrid>
      <Pagination maxPages={20} />
    </Fragment>
  ));

  return (
    <main className={styles.Template}>
      <NavigationBar logoSrc={logo} logoText={"Captured Light"}>
        <SelectorTheme />
      </NavigationBar>

      <section className={styles.Header}>
        <h1>Captured Light Blog</h1>
        <p>Exploring the world, one frame at a time.</p>
      </section>

      <section className={styles.Cards}>
        <InputText type="search" labelText="Search" />
        <Tabs
          simpleStyle
          tabsNames={categories}
          tabsContent={filteredTabsContent}
        />
      </section>

      <Footer
        footerBottomContent={
          <p>Copyright © 2025 Captured Light. All Rights Reserved.</p>
        }
        socialMediaLinks={[
          {
            href: "https://github.com/Kriztiam",
            linkText: "GitHub",
            icon: <FontAwesomeIcon icon={faGithub} fixedWidth />,
          },
          {
            href: "https://www.linkedin.com/in/kriztiam",
            linkText: "LinkedIn",
            icon: <FontAwesomeIcon icon={faLinkedin} fixedWidth />,
          },
        ]}
      />
    </main>
  );
}
