import Link from "next/link";
import styles from "../../styles/footer.module.css";
import React from "react";

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
      <ul className={styles.wrapper}>
        {links.map((link) => {
          <li>
            <Link href={link.href}>{link.label}</Link>
          </li>;
        })}
      </ul>
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
