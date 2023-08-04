import { useEffect, useState } from "react";
import Item from "./Item";
import getRandomTitles from "./GetRandomItem";
import { AnimatePresence, motion } from "framer-motion";

const itemWidth = 250;
const itemHeight = 150;

export default function RowTemp({ currentTitles, rowTitle, isRandomTitles }) {
  const [currentTitlesPosition, setCurrentTitlesPosition] = useState(0);
  const [currentlyShowing, setCurrentlyShowing] = useState(currentTitles[0]);
  const [selectedId, setSelectedId] = useState(null);
  const length = currentTitles.length;

  useEffect(() => {
    if (isRandomTitles) {
      currentlyShowing(getRandomTitles(currentTitles, 10));
    } 
  }, [currentTitles, isRandomTitles, currentlyShowing]);

  function prev() {
    if (titles[currentTitlesPosition - 1] >= 0) {
      setCurrentTitlesPosition(currentTitlesPosition - 1);
    }
  }

  function next() {
    if (titles[currentTitlesPosition + 1] != null && currentTitlesPosition != 7) {
      setCurrentTitlesPosition(currentTitlesPosition + 1);
    }
  }

  return (
    <div className="slider-container">
      <h2>{rowTitle}</h2>
      <div className="relative">
        <div className="relative h-fit overflow-x-clip">
          <div className="flex flex-2 gap-2 h-[150px] overflow-visible">
            {currentlyShowing.map((title) => (
              <motion.div
                key={title.title}
                layoutId={title.id}
                onClick={() => setSelectedId(title.title)}
              >
                <motion.img
                  src={title.img}
                  alt={title.title}
                  width={itemWidth}
                  height={itemHeight}
                  className="sourceImg"
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.h5>{title.subtitle}</motion.h5>
                <motion.h2>{title.title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence>
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

        {currentTitlesPosition != length-1 && (
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
