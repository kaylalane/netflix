import Navbar from "@/components/layout/Navbar";
import { useState } from "react";
import { IconContext } from "react-icons";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <IconContext.Provider
      value={{ color: "red", className: "global-class-name" }}
    >
      <Navbar />
      <div className="flex flex-col gap-4 pt-12 px-12 m-0 h-auto text-white h-screen	">
        <h2 className="text-4xl pt-3">FAQ</h2>
        <Panel
          title="How much does it cost?"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          Nothing because this website is purely for demonstrative purposes. I
          am talented. Please hire me.
        </Panel>
        <Panel
          title="Is this the real Netflix?"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          Nope, I don&apos;t make that much money.
        </Panel>
        <Panel
          title="Wow. Where's your portfolio?"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          Right{" "}
          <a
            href="https://kaylamarielane.com/"
            target={"_blank"}
            className="inline text-gray-600 underline"
          >
            here
          </a>
          . Thanks for asking!
        </Panel>
      </div>
    </IconContext.Provider>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel bg-gray ">
      {isActive ? (
        <div className="flex gap-2">
          <h3 className="text-xl">{title}</h3>
        </div>
      ) : (
        <div className="flex gap-2">
          <h3 className="text-xl">{title}</h3>
          <button
            onClick={onShow}
            className="flex gap-2 align-center items-center"
          >
            <BsChevronDown />
          </button>
        </div>
      )}
      {isActive && <p className="text-gray-400">{children}</p>}
    </section>
  );
}
