"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "../styles/signin.module.scss";
export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    router.push("/browse");
  }

  return (
    <>
      <Head>
        <title>Netflix Clone - Watch Tv Shows Online</title>
        <meta name="description" content="Netflix Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@thekaylalane" />
        <meta name="twitter:title" content="Netflix Clone" />
      </Head>
      <div className={styles.background}>
        <nav className="p-8">
          <Link href="/" aria-label="Netflix" className="logo">
            Netflix
          </Link>
          <form></form>
        </nav>
        <main className={styles.main}>
        <div id="modal"></div>
          <div className={styles.signin}>
            <div className={styles.container}>
              <h1>Unlimited movies, TV Shows, and more</h1>
              <p>Watch anywhere. Cancel anytime.</p>

              <form
                onSubmit={(e) => handleSubmit(e)}
                aria-label="Sign up or start your membership with Netflix."
              >
                <h2>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h2>
                <div className={styles.formFlex}>
                  <label>
                    <input required type="email" placeholder="Email address" />
                  </label>
                  <button role="button" type="submit">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
