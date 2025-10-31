"use client";

import styles from "./page.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBoxOpen,
  faCartShopping,
  faCreditCard,
  faMapPin,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AnimationTextGradient,
  Button,
  Card,
  Divider,
  Footer,
  HelperGrid,
  IconBrush,
  IconUser,
  InputText,
  Login,
  Menu,
  Modal,
  NavigationBar,
  SelectorTheme,
} from "kriz-ui-next";
import { useState } from "react";
import logo from "@/assets/img/logo.svg";

function ProductCard({
  product,
}: {
  product: {
    imageSrc: string;
    category: string;
    name: string;
    price: string;
    colors: string[];
    sizes: string[];
  };
}) {
  return (
    <Card className={styles.ProductCard}>
      <img src={product.imageSrc} alt={product.name} />
      <div>
        <h3>{product.category}</h3>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <div className={styles.ProductColor}>
          {product.colors.map((color) => (
            <button
              key={color}
              style={{ "--color": color } as React.CSSProperties}
            >
              {color}
            </button>
          ))}
        </div>
        {product.sizes.length !== 0 && (
          <div className={styles.ProductSize}>
            {product.sizes.map((size) => (
              <button key={size}>{size}</button>
            ))}
          </div>
        )}
      </div>
      <Button outline>See product</Button>
    </Card>
  );
}

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);

  const navigationLinksList = [
    { linkText: "Home", href: "#Home" },
    { linkText: "Brands", href: "#Brands" },
    { linkText: "New Products", href: "#NewProducts" },
    { linkText: "Featured Products", href: "#FeaturedProducts" },
    { linkText: "About", href: "#About" },
    { linkText: "FAQ", href: "#FAQ" },
  ];

  const newProducts = [
    {
      imageSrc: "/img/800x600.webp",
      category: "Men's Apparel",
      name: "Classic Cotton T-Shirt",
      price: "$29.99",
      colors: ["white", "black", "cadetblue"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      imageSrc: "/img/2560x1440.webp",
      category: "Women's Apparel",
      name: "Flowy Summer Dress",
      price: "$54.99",
      colors: ["brown", "cadetblue", "beige"],
      sizes: ["S", "M", "L"],
    },
    {
      imageSrc: "/img/1400x1000.webp",
      category: "Accessories",
      name: "Leather Wallet",
      price: "$39.99",
      colors: ["brown", "black", "tan"],
      sizes: [],
    },
    {
      imageSrc: "/img/720x1280.webp",
      category: "Footwear",
      name: "Lightweight Running Shoes",
      price: "$89.99",
      colors: ["gray", "cadetblue", "white"],
      sizes: ["7", "8", "9", "10", "11"],
    },
    {
      imageSrc: "/img/2520x1080.webp",
      category: "Women's Apparel",
      name: "Classic Knit Sweater",
      price: "$64.99",
      colors: ["beige", "gray", "cadetblue"],
      sizes: ["S", "M", "L"],
    },
  ];

  const featuredProducts = [
    {
      imageSrc: "/img/2560x1440.webp",
      category: "Men's Apparel",
      name: "Premium Denim Jacket",
      price: "$89.99",
      colors: ["cadetblue", "dimgray"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      imageSrc: "/img/2520x1080.webp",
      category: "Women's Apparel",
      name: "Classic Knit Sweater",
      price: "$64.99",
      colors: ["beige", "gray", "darkcyan"],
      sizes: ["S", "M", "L"],
    },
    {
      imageSrc: "/img/1600x800.webp",
      category: "Footwear",
      name: "Urban High-Top Sneakers",
      price: "$99.99",
      colors: ["white", "black", "brown"],
      sizes: ["7", "8", "9", "10", "11"],
    },
    {
      imageSrc: "/img/1400x1000.webp",
      category: "Accessories",
      name: "Minimalist Leather Belt",
      price: "$34.99",
      colors: ["brown", "black"],
      sizes: [],
    },
    {
      imageSrc: "/img/1200x800.webp",
      category: "Electronics",
      name: "Wireless Earbuds Pro",
      price: "$149.00",
      colors: ["white", "black"],
      sizes: [],
    },
    {
      imageSrc: "/img/800x600.webp",
      category: "Smart Home",
      name: "Portable Smart Lamp",
      price: "$59.00",
      colors: ["white", "gray", "green"],
      sizes: [],
    },
    {
      imageSrc: "/img/720x1280.webp",
      category: "Women's Apparel",
      name: "High-Waisted Yoga Leggings",
      price: "$49.99",
      colors: ["black", "darkslateblue", "darkslategray"],
      sizes: ["XS", "S", "M", "L"],
    },
    {
      imageSrc: "/img/400x400.webp",
      category: "Accessories",
      name: "Stainless Steel Water Bottle",
      price: "$24.99",
      colors: ["silver", "dimgray", "cadetblue"],
      sizes: [],
    },
    {
      imageSrc: "/img/2560x1440.webp",
      category: "Men's Apparel",
      name: "Slim Fit Oxford Shirt",
      price: "$54.99",
      colors: ["white", "green"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      imageSrc: "/img/2520x1080.webp",
      category: "Home & Lifestyle",
      name: "Aromatic Soy Candle Set",
      price: "$29.99",
      colors: ["tan", "ivory"],
      sizes: [],
    },
  ];

  const chooseUsCard = [
    {
      icon: <FontAwesomeIcon icon={faCreditCard} fixedWidth />,
      title: "Secure Payment",
      description: "Every transaction is protected with advanced encryption.",
    },
    {
      icon: <FontAwesomeIcon icon={faTruckFast} fixedWidth />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $50.",
    },
    {
      icon: <FontAwesomeIcon icon={faBoxOpen} fixedWidth />,
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days, hassle-free.",
    },
    {
      icon: <FontAwesomeIcon icon={faMapPin} fixedWidth />,
      title: "Order Tracking",
      description: "Track your order from checkout to delivery.",
    },
  ];

  const footerLinksList = [
    {
      linkText: "Quick Links",
      nestedLinks: [
        { linkText: "Home", href: "#Home" },
        { linkText: "Brands", href: "#Brands" },
        { linkText: "New Products", href: "#NewProducts" },
        { linkText: "Featured Products", href: "#FeaturedProducts" },
        { linkText: "About", href: "#About" },
        { linkText: "FAQ", href: "#FAQ" },
      ],
    },
    {
      linkText: "Social Media",
      nestedLinks: [
        { linkText: "Facebook", href: "/" },
        { linkText: "Instagram", href: "/" },
        { linkText: "Pinterest", href: "/" },
        { linkText: "X", href: "/" },
      ],
    },
  ];

  return (
    <main className={styles.Template}>
      <NavigationBar logoSrc={logo} linksList={navigationLinksList}>
        <Menu label={<IconBrush />} menuWidth="7.5em">
          <li>
            <SelectorTheme customColor />
          </li>
        </Menu>
        <Button>
          <FontAwesomeIcon icon={faCartShopping} fixedWidth />
        </Button>
        <Modal isOpen={showLogin} setIsOpen={setShowLogin}>
          <Login />
        </Modal>
        <Button onClick={() => setShowLogin(true)}>
          <IconUser />
        </Button>
      </NavigationBar>

      <section id="Home" className={styles.Hero}>
        <h1>Discover Quality Products Made for You</h1>
        <p>
          Explore a world of innovation, style, and unbeatable value. Whatever
          you&apos;re shopping for, we&apos;ve got something you&apos;ll love.
        </p>
        <Button>Shop now</Button>
      </section>

      <section className={styles.Offer}>
        <h2>
          <AnimationTextGradient
            gradientBaseColor="hsl(var(--colorPrimary950))"
            gradientAccentColor="hsl(var(--colorPrimary500))"
          >
            Special Offer
          </AnimationTextGradient>
        </h2>
        <p>
          Use code{" "}
          <AnimationTextGradient
            gradientBaseColor="hsl(var(--colorPrimary950))"
            gradientAccentColor="hsl(var(--colorPrimary500))"
          >
            <strong>SUMMER10</strong>
          </AnimationTextGradient>{" "}
          to get 10% off your first order! Shop your favorite products and enjoy
          savings for a limited time.
        </p>
        <Button color="hsl(var(--fontColorA))">Shop Now</Button>
      </section>

      <section id="Brands" className={styles.FeaturedBrands}>
        <h2>Our Trusted Brands</h2>
        <div>
          <img src="/img/logoipsum/logoipsum-372.svg" alt="Brand 2" />
          <img src="/img/logoipsum/logoipsum-402.svg" alt="Brand 3" />
          <img src="/img/logoipsum/logoipsum-406.svg" alt="Brand 4" />
          <img src="/img/logoipsum/logoipsum-385.svg" alt="Brand 1" />
        </div>
      </section>

      <Divider className={styles.Divider} stylized />

      <section id="NewProducts" className={styles.Products}>
        <h2>Newest Products</h2>
        <HelperGrid columnsNumber={5} columnsMinSize="12rem" gap="1rem">
          {newProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </HelperGrid>
      </section>

      <Divider className={styles.Divider} stylized />

      <section id="FeaturedProducts" className={styles.Products}>
        <h2>Featured Products</h2>
        <HelperGrid columnsNumber={5} columnsMinSize="12rem" gap="1rem">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </HelperGrid>
      </section>

      <section id="About" className={styles.ChooseUs}>
        <h2>Why choose us</h2>
        <p>
          We believe shopping should be simple, secure, and satisfying.
          Here&apos;s what makes us stand out.
        </p>
        <HelperGrid columnsNumber={4} columnsMinSize="10rem">
          {chooseUsCard.map((card, index) => (
            <Card key={index} className={styles.ChooseUsCard}>
              {card.icon}
              <h3>
                <AnimationTextGradient>{card.title}</AnimationTextGradient>
              </h3>
              <p>{card.description}</p>
            </Card>
          ))}
        </HelperGrid>
      </section>

      <section className={styles.ShippingReturns}>
        <h2>Shipping & Returns</h2>
        <p>
          We deliver across the U.S. and select international locations. Free
          standard shipping for orders over $50, and 30-day easy returns on all
          purchases.
        </p>
        <Button>Learn More</Button>
      </section>

      <Divider className={styles.Divider} stylized />

      <section id="FAQ" className={styles.FAQ}>
        <h2>Frequently Asked Questions</h2>

        <Accordion label="What payment methods do you accept?" open>
          <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
        </Accordion>
        <Accordion label="Do you offer international shipping?" open>
          <p>Yes! We ship worldwide. Rates vary depending on your region.</p>
        </Accordion>
        <Accordion label="Can I track my order?" open>
          <p>
            Absolutely — you&apos;ll receive a tracking link as soon as your
            package ships.
          </p>
        </Accordion>
        <Accordion label="What is your return policy?" open>
          <p>
            You can return any unused item within 30 days for a full refund.
          </p>
        </Accordion>
      </section>

      <section className={styles.StoreLocator}>
        <h2>Find a Store Near You</h2>
        <p>
          Visit one of our physical stores to experience our products in person.
          Check the map below to find a location closest to you.
        </p>
        <Button>View Store Locations</Button>
      </section>

      <Footer
        logoImgSrc={logo}
        logoBelowContent={
          <>
            <p>123 Fifth Avenue, New York,</p>
            <a href="#">contact@info.com</a>
            <p>123-454-3210</p>
          </>
        }
        linksList={footerLinksList}
        footerBottomContent={
          <p>Copyright © 2025 Example eCommerce. All Rights Reserved.</p>
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
      >
        <section className={styles.Newsletter}>
          <h2>Stay Updated</h2>
          <p>
            Join our mailing list to get <strong>exclusive discounts</strong>,
            early access to <strong>new arrivals</strong>, and product updates
            delivered straight to your inbox.
          </p>
          <form>
            <InputText type="email" labelText="Enter your email address" />
            <Button>Subscribe</Button>
          </form>
          <p>
            <small className={styles.NewsletterNote}>
              We respect your privacy. Unsubscribe at any time.
            </small>
          </p>
        </section>
      </Footer>
    </main>
  );
}
