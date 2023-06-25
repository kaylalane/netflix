import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import Row from "../components/Row";
import { allMovies, myList } from "../components/Data";
import Footer from "../components/layout/Footer";
import styles from "../styles/feature.module.scss";

export default function Movies() {
  const myMoviesList = myList.filter((media) => media.media == "movie");
  const spanishMovies = allMovies.filter((show) =>
    show.language.includes("spanish")
  );

  const dramaMovies = allMovies.filter((movie) =>
    movie.genres.includes("Dramas")
  );

  const familyMovies = allMovies.filter((movie) =>
    movie.genres.includes("Family Movies")
  );

  const comedies = allMovies.filter((show) => show.genres.includes("Comedies"));
  return (
    <>
      <Navbar />
      <main className="main">
        <div className={styles.featuredMedia}>
          <div className={styles.featuredInfo}>
            {allMovies[1].netflixOriginal && (
              <div className={styles.netflixTag}>
                <Image
                  src={"/netflix-logo-sm.png"}
                  alt="logo"
                  className={styles.logoSm}
                  width={20}
                  height={30}
                />
                <p>Film</p>
              </div>
            )}
            <h2 className={styles.title}>{allMovies[1].title}</h2>

            <p className={styles.description}>{allMovies[1].description}</p>

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

          <div>
            <div className={styles.fade}></div>
            <Image
              className="item"
              src={allMovies[1].banner}
              alt={allMovies[1].title}
              id="featured-Image"
              width={1280}
              height={720}
              loading="lazy"
            />
          </div>
        </div>
        <Row
          currentTitles={myMoviesList}
          rowTitle={"My List"}
          isRandomTitles={false}
        />
        <Row
          currentTitles={comedies}
          rowTitle={"Feel-Good Comedies"}
          isRandomTitles={false}
        />
        <Row currentTitles={dramaMovies} rowTitle={"Dramas"} isRandomTitles={false} />
        <Row
          currentTitles={familyMovies}
          rowTitle={"Family Movies"}
          isRandomTitles={false}
        />
        <Footer />
      </main>
    </>
  );
}
