import { useEffect, useState } from "react";
import Item from "./Item";
import { allShows } from "./Data";
import getRandomTitles from "./GetRandomItem";

export default function Row({ allTitles, rowTitle, random }) {
  const [index, setIndex] = useState(0);
  const [titles, setTitles] = useState(allTitles);
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (random) {
      setTitles(getRandomTitles(allTitles, 10));
    }
  }, [allTitles, currentlyShowing, random, index]);

  var currentlyShowing = titles.slice(index, index + 6);

  function prev() {
    if (titles[index - 1] != null) {
      setIndex(index - 1);
    }
  }

  function next() {
    if (titles[index + 1] != null) {
      setIndex(index + 1);
    }
  }

  return (
    <div className="slider-container">
      <h2>{rowTitle}</h2>
      <div className="relative">

        <div className="relative h-fit">
          <div className="flex flex-2 gap-2 m-0 h-[150px] overflow-visible">
            {currentlyShowing.map((title) => (
              <Item
                title={title}
                key={title.title}
                onShow={() => setIsOpen(true)}
              />
            ))}
          </div>
        </div>
        
        {index != 0 && (
          <button
            aria-label="Previous"
            className="absolute top-0 z-50 w-[50px] h-[150px] text-2xl"
            onClick={prev}
          >
            &#10094;
          </button>
        )}

        {index + 1 != null && (
          <button
            aria-label="Next"
            className="absolute top-0 right-0 z-50 w-[50px] h-[150px] text-2xl"
            onClick={next}
          >
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
}
