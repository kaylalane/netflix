import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Navlink from "./Navlink";
import styles from "styles/navbar.module.scss";
import clsx from "clsx";

const Navbar = () => {
  const [visiblity, setVisibility] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef();

  function handleClick() {
    setHamburger(!hamburger);
  }

  useEffect(() => {
    const header = document.querySelector("header");
    const navEl = document.getElementById("nav");
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (visiblity && ref.current && !ref.current.contains(e.target)) {
        setVisibility(false);
      }
    };

    const handlePageShow = () => {
      setHamburgerVisibility(true);
      setMenuVisibility(false);
      console.log("page change");
    };
    window.addEventListener("unload", handlePageShow);
    document.addEventListener("mousedown", checkIfClickedOutside);
    document.addEventListener("scroll", () => {
      navEl.classList.toggle("bg-black", window.scrollY > 20);
    });

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [visiblity]);

  const links = [
    {
      label: "Home",
      link: "/browse",
    },
    {
      label: "TV Shows",
      link: "/tv-shows",
    },
    {
      label: "Movies",
      link: "/movies",
    },
    {
      label: "My List",
      link: "/my-list",
    },
  ];

  return (
    <header>
      <nav className={clsx(styles.navbar)} id="nav">
        <Link href="/browse" aria-label="Netflix" className={styles.logo}>
          Netflix
        </Link>
        <div className={styles.primaryNavigation}>
          <ul>
            {links.map((link) => (
              <Navlink link={link} key={link.label} />
            ))}
          </ul>
        </div>
        <ul className={styles.secondaryNavigation}>
          <li>
            {visiblity ? (
              <input
                ref={ref}
                className={styles.search}
                type="search"
                placeholder="Search"
                autoComplete="off"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            ) : (
              <button onClick={() => setVisibility(!visiblity)}>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffff"
                >
                  <path
                    d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            )}
          </li>

          <li>
            <button>
              <svg
                width="30px"
                height="30px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffffff"
              >
                <path
                  d="M18 8.4c0-1.697-.632-3.325-1.757-4.525C15.117 2.675 13.59 2 12 2c-1.591 0-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4 6 15.867 3 18 3 18h18s-3-2.133-3-9.6zM13.73 21a1.999 1.999 0 01-3.46 0"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
