import Link from "next/link";
import styles from "../../styles/footer.module.css";
import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "react-feather";

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/netflix",
    icon: <Facebook />,
  },
  { label: "Twitter", href: "https://twitter.com/netflix", icon: <Twitter /> },
  {
    label: "Instagram",
    href: "https://instagram.com/netflix",
    icon: <Instagram />,
  },
  { label: "YouTube", href: "https://youtube.com/netflix", icon: <Youtube /> },
];

const links = [
  { label: "Audio Description", href: "/" },
  { label: "Privacy", href: "/" },
  { label: "Contact Us", href: "/" },
  { label: "Help Center", href: "/" },
  { label: "Jobs", href: "/" },
  { label: "Legal Notices", href: "/" },
  { label: "Gift Cards", href: "/" },
  { label: "Netflix Shop", href: "/" },
  { label: "Cookie Preferences", href: "/" },
  { label: "Media Center", href: "/" },
  { label: "Terms of Use", href: "/" },
  { label: "FAQ", href: "/faq" },
];
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socials}>
        {socials.map((social) => (
          <li key={social.href}>
            <Link href={social.href} target="__blank">
              {social.icon}
              <span className=" sr-only">{social.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.wrapper}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <p>
        &copy; Not me. Most, if not all, media comes from{" "}
        <a href="https://www.netflix.com/browse">Netflix.com.</a>
      </p>

      <p>
        Clone by{" "}
        <a
          href="https://kaylamarielane.com/"
          target={"_blank"}
          className="inline underline"
        >
          Kayla Lane
        </a>
      </p>
    </footer>
  );
}
