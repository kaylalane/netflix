"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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
      </Head>
      <nav>
        <Link href="/" aria-label="Netflix" className="logo">
          Netflix
        </Link>
        <form></form>
      </nav>
      <main className={styles.main}>
        <div className={styles.firstPanel}>
          <div className={styles.background}></div>
        </div>

        <div className={styles.signin}>
          <h1 tabIndex={0}>Unlimited movies, TV Shows, and more.</h1>
          <p tabIndex="0">Watch anywhere. Cancel anytime.</p>

          <form
            onSubmit={(e) => handleSubmit(e)}
            aria-label="Sign up or start your membership with Netflix."
          >
            <h2 tabIndex="0">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h2>
            <div className={styles.formFlex}>
              <label>
                <input required placeholder="Email address" />
              </label>
              <button role="button" type="submit">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
