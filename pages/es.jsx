"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../styles/signin.module.scss";

export default function SigninES() {
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
      <div className={styles.background}>
        <nav className="p-8">
          <Link href="/" aria-label="Netflix" className="logo">
            Netflix
          </Link>
        </nav>
        <main className={styles.main}>
          <div className={styles.signin}>
            <div className={styles.container}>
              <h1>Películas y series ilimitadas y mucho más</h1>
              <p>Disfruta donde quieras. Cancela cuando quieras.</p>

              <form onSubmit={(e) => handleSubmit(e)}>
                <h2>
                  ¿Quieres ver Netflix ya? Ingresa tu email para crear una
                  cuenta o reiniciar tu membresía de Netflix.
                </h2>
                <div className={styles.formFlex}>
                  <label>
                    <input required placeholder="Email" />
                  </label>
                  <button role="button" type="submit">
                    Comenzar
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
