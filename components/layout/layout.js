import { useGSAP } from "@gsap/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { use, useEffect, useRef } from "react";

export default function Layout({ children }) {
  const container = useRef();

  function handleScroll() {
    const nav = document.querySelector("#nav");
    nav.classList.add("inView");
  }

 

  return (
    <div className="" ref={container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
