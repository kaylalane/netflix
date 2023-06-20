/* eslint-disable no-unused-vars */
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/layout";
import { myList, allShows, allMovies } from "@/components/Data";
import { animatedTVShows } from "@/lib/data";
import Row from "@/components/Row";
import getRandomTitles from "@/components/GetRandomItem";
import styles from "@/styles/feature.module.scss";
import getMyList from "@/components/getMyList";

export default function Home() {
  const allTitles = [...allMovies, ...allShows];
  const [featuredMedia, setFeaturedMedia] = useState(allShows);
  useEffect(() => {
    setFeaturedMedia(getRandomTitles(allShows, 1));
  }, []);

  const spanishShows = allTitles.filter((show) =>
    show.language.includes("spanish")
  );

  const koreanShows = allTitles.filter((show) =>
    show.language.includes("korean")
  );

  const familyMovies = allMovies.filter((movie) =>
    movie.genres.includes("Family Movies")
  );

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="portal"></div>
      <div className={styles.featuredMedia}>
        <div className={styles.featuredInfo}>
          <div className={styles.netflixTag}>
            <Image
              src={"/netflix-logo-sm.png"}
              alt="logo"
              className={styles.logoSm}
              width={20}
              height={30}
              loading="eager"
            />
            <p>Series</p>
          </div>

          <h2 className="text-3xl">{featuredMedia[0].title}</h2>

          <p className={styles.description}>{featuredMedia[0].description}</p>

          <div className="flex-container">
            <button className={styles.playButton}>
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Play
            </button>
            <button className={styles.infoButton}>
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffffff"
              >
                <path
                  d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              More Info
            </button>
          </div>
        </div>

        <div className={styles.fade}></div>
        <Image
          src={featuredMedia[0].banner}
          alt={featuredMedia[0].title}
          id="featured-image"
          width={1280}
          height={720}
        />
      </div>
      <Row currentTitles={myList} rowTitle={"My List"} isRandomTitles={false} />
      <Row
        currentTitles={allTitles}
        rowTitle={"Popular on Netflix"}
        isRandomTitles={true}
      />
      <Row
        currentTitles={koreanShows}
        rowTitle={"Korean Movies & TV Shows"}
        isRandomTitles={false}
      />
      <Row
        currentTitles={spanishShows}
        rowTitle={"Spanish Movies & TV Shows"}
        isRandomTitles={false}
      />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
