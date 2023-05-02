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
      <nav>
        <Link href="/" aria-label="Netflix" className="logo">
          Netflix
        </Link>
      </nav>
      <main className={styles.main}>
        <div className={styles.firstPanel}>
          <div className={styles.background}></div>
        </div>

        <div className={styles.signin}>
          <h1>Películas y series ilimitadas y mucho más</h1>
          <span>Disfruta donde quieras. Cancela cuando quieras.</span>

          <form onSubmit={(e) => handleSubmit(e)}>
            <h2>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
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
      </main>
    </>
  );
}
