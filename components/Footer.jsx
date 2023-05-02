import Link from "next/link";
import styles from "../styles/footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.wrapper}>
        <li>
          <a href="">Audio Description</a>
        </li>
        <li>
          <a href="">Privacy</a>
        </li>
        <li>
          <a href="">Contact US</a>
        </li>
        <li>
          <a href="">Help Center</a>
        </li>
        <li>
          <a href="">Jobs</a>
        </li>
        <li>
          <a href="">Legal Notices</a>
        </li>
        <li>
          <a href="">Gift Cards</a>
        </li>
        <li>
          <a href="">Netflix Shop</a>
        </li>
        <li>
          <a href="">Cookie Preferences</a>
        </li>
        <li>
          <a href="">Media Center</a>
        </li>
        <li>
          <a href="">Terms of Use</a>
        </li>
        <li>
          <Link href="/FAQ">FAQ</Link>
        </li>
      </ul>
      <p>
        Clone by{" "}
        <a
          href="https://kaylamarielane.com/"
          target={"_blank"}
          className="inline underline"
        >
          {" "}
          Kayla Lane
        </a>
      </p>
    </footer>
  );
}
