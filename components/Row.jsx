import { useEffect, useState } from "react";
import Item from "./Item";
import getRandomTitles from "./GetRandomItem";

export default function Row({ currentTitles, rowTitle, isRandomTitles }) {
  const [currentTitlesPosition, setCurrentTitlesPosition] = useState(0);
  const [titles, setTitles] = useState(currentTitles);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isRandomTitles) {
      setTitles(getRandomTitles(currentTitles, 10));
    }
  }, [currentTitles, currentlyShowing, isRandomTitles, currentTitlesPosition]);
  var currentlyShowing = [];
  if (titles) {
    currentlyShowing = titles.slice(
      currentTitlesPosition,
      currentTitlesPosition + 6
    );
  }

  function prev() {
    if (titles[currentTitlesPosition - 1] != null) {
      setCurrentTitlesPosition(currentTitlesPosition - 1);
    }
  }

  function next() {
    if (titles[currentTitlesPosition + 1] != null) {
      setCurrentTitlesPosition(currentTitlesPosition + 1);
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

        {currentTitlesPosition != 0 && (
          <button
            aria-label="Previous"
            className="absolute top-0 z-50 w-[50px] h-[150px] text-2xl"
            onClick={prev}
          >
            &#10094;
          </button>
        )}

        {currentTitlesPosition + 1 != null && (
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
