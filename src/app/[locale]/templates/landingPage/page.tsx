"use client";

import styles from "./page.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AnimationScrollDown,
  AnimationTextGradient,
  Button,
  Card,
  Divider,
  Footer,
  HelperGrid,
  IconBrush,
  IconRight,
  IconUser,
  InputCheckbox,
  Login,
  Menu,
  Modal,
  NavigationBar,
  SelectorTheme,
} from "kriz-ui-next";
import { useState } from "react";
import logo from "@/assets/img/logo.svg";

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);

  const [showAnnualPrice, setShowAnnualPrice] = useState(false);

  const pricingCards = [
    {
      name: "Starter",
      description: "Perfect for freelancers and solo makers",
      price: "$9 / month",
      priceAnnual: "$90 / year",
      features: [
        "Access to 30+ prebuilt components",
        "1 active project",
        "Responsive layout support",
        "Email support",
        "Open-source license",
      ],
    },
    {
      name: "Pro",
      description: "For small teams building multiple projects",
      price: "$19 / month",
      priceAnnual: "$190 / year",
      features: [
        "Everything in Launch",
        "Access to 100+ components",
        "5 active projects",
        "Dark mode + theme switching",
        "Priority email support",
      ],
    },
    {
      name: "Business",
      description: "Ideal for startups and growing businesses.",
      price: "$39 / month",
      priceAnnual: "$390 / year",
      features: [
        "Everything in Grow",
        "Unlimited projects",
        "Custom component theming",
        "Component-level analytics",
        "Team collaboration (up to 5 users)",
        "Slack support",
      ],
    },
    {
      name: "Enterprise",
      description: "Custom-tailored solution for organizations",
      price: "$50 / month",
      priceAnnual: "$500 / year",
      features: [
        "Everything in Scale",
        "Self-hosting option",
        "Advanced permissions",
        "Design system integration",
        "Dedicated support manager",
        "SSO & compliance (SOC2, GDPR)",
      ],
    },
  ];

  return (
    <main className={styles.Template}>
      <NavigationBar
        logoSrc={logo}
        logoText={"Example UI"}
        linksList={[
          { linkText: "Home", href: "#Home" },
          { linkText: "Brands", href: "#Brands" },
          { linkText: "Pricing", href: "#Pricing" },
          { linkText: "FAQ", href: "#FAQ" },
        ]}
      >
        <Menu label={<IconBrush />} menuWidth="7.5em">
          <li>
            <SelectorTheme />
          </li>
        </Menu>
        <Modal isOpen={showLogin} setIsOpen={setShowLogin}>
          <Login />
        </Modal>
        <Button onClick={() => setShowLogin(true)}>
          <IconUser />
        </Button>
      </NavigationBar>

      <section id="Home" className={styles.Home}>
        <div>
          <h1>
            <AnimationTextGradient>Example UI:</AnimationTextGradient>{" "}
            Streamline your frontend workflow.
          </h1>
          <p>
            Use prebuilt, customizable React components to launch beautiful
            pages without starting from scratch.
          </p>
          <Button color={"hsl(var(--fontColorA))"}>
            Get Started for free
            <IconRight />
          </Button>
        </div>
        <AnimationScrollDown
          size="4vmax"
          color={"hsl(var(--fontColorA), 0.4)"}
        />
      </section>

      <section id="Brands" className={styles.Brands}>
        <h3>Trusted by startups and teams worldwide</h3>
        <div>
          <img src={"/img/logoipsum/logoipsum-348.svg"} alt={"Brand 1"} />
          <img src={"/img/logoipsum/logoipsum-372.svg"} alt={"Brand 2"} />
          <img src={"/img/logoipsum/logoipsum-385.svg"} alt={"Brand 3"} />
          <img src={"/img/logoipsum/logoipsum-402.svg"} alt={"Brand 4"} />
          <img src={"/img/logoipsum/logoipsum-406.svg"} alt={"Brand 5"} />
        </div>
      </section>

      <section id="Pricing" className={styles.Pricing}>
        <div className={styles.PricingHeader}>
          <h4>Pricing</h4>
          <h2>Plans that scale with your business</h2>
          <p>
            Whether you&apos;re launching your first product or managing
            enterprise-grade platforms, our pricing grows with you—no hidden
            fees, no surprises.
          </p>
        </div>

        <div className={styles.PricingCheckbox}>
          <InputCheckbox
            labelText="Annual prices"
            checked={showAnnualPrice}
            onChange={() => setShowAnnualPrice((prev) => !prev)}
          />
        </div>

        <HelperGrid
          className={styles.PricingCardsContainer}
          columnsNumber={4}
          gap={"1rem"}
        >
          {pricingCards.map((tier) => (
            <Card key={"pricing" + tier.name} className={styles.PricingCard}>
              <div>
                <h2>
                  <AnimationTextGradient>{tier.name}</AnimationTextGradient>
                  {tier.name === "Business" && (
                    <AnimationTextGradient
                      gradientBaseColor="greenyellow"
                      gradientAccentColor={"hsl(var(--colorSuccess))"}
                    >
                      ¡Most popular!
                    </AnimationTextGradient>
                  )}
                </h2>

                <p>{tier.description}</p>
              </div>
              <Divider />
              <p>{showAnnualPrice ? tier.priceAnnual : tier.price}</p>
              <Divider />
              <ul>
                {tier.features.map((feature, i) => (
                  <li key={"feature" + i}>{feature}</li>
                ))}
              </ul>
              <Button>Subscribe</Button>
            </Card>
          ))}
        </HelperGrid>
      </section>

      <section id="FAQ" className={styles.FAQ}>
        <h2>FAQ</h2>
        <Accordion label="What is Example UI?" groupName="FAQ" open>
          Example UI is a modern component library and template system designed
          to help developers build high-quality landing pages quickly using
          React and Next.js.
        </Accordion>

        <Accordion label="Do I need to know React to use this?" groupName="FAQ">
          While familiarity with React is helpful, our intuitive components and
          documentation make it easy for anyone to get started, even with
          minimal experience.
        </Accordion>

        <Accordion
          label="Can I cancel or change my plan later?"
          groupName="FAQ"
        >
          Yes, you can upgrade, downgrade, or cancel your subscription anytime
          through your dashboard. No contracts or cancellation fees.
        </Accordion>
      </section>

      <section className={styles.GetStarted}>
        <img src={logo.src} alt="Example1" />
        <h4>
          Turn ideas into pages{" "}
          <AnimationTextGradient>in minutes</AnimationTextGradient>
        </h4>
        <p>
          Launch your next product faster with our prebuilt components and
          intelligent design tools.
        </p>
        <Button color={"hsl(var(--fontColorA))"}>
          Try It Now
          <IconRight />
        </Button>
      </section>

      <Footer
        logoImgSrc={logo}
        logoText={"Example UI"}
        logoBelowContent={
          <p>Empowering developers to build beautiful UIs, faster.</p>
        }
        footerBottomContent={
          <p>Copyright © 2025 {"Example UI"}. All Rights Reserved.</p>
        }
        linksList={[
          {
            linkText: "Product",
            nestedLinks: [
              { linkText: "Features", href: "/Features" },
              { linkText: "Pricing", href: "/Pricing" },
              { linkText: "FAQ", href: "/FAQ" },
            ],
          },
          {
            linkText: "Company",
            nestedLinks: [
              { linkText: "About Us", href: "/AboutUs" },
              { linkText: "Press", href: "/Press" },
              { linkText: "Partners", href: "/Partners" },
            ],
          },
          {
            linkText: "Legal",
            nestedLinks: [
              { linkText: "Terms", href: "/Terms" },
              { linkText: "Privacy", href: "/Privacy" },
            ],
          },
        ]}
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
