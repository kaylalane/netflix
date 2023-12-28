import { useEffect, useState } from "react";
import Item from "./Item";
import getRandomTitles from "./GetRandomItem";
import { useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Row({ currentTitles, rowTitle, isRandomTitles }) {
  const [currentTitlesPosition, setCurrentTitlesPosition] = useState(0);
  const [titles, setTitles] = useState(currentTitles);
  let [isOpen, setIsOpen] = useState(false);

  var currentlyShowing = useMemo(() => {
    titles.slice(currentTitlesPosition, currentTitlesPosition + 5);
  }, [currentTitlesPosition, titles]);

  useEffect(() => {
    if (isRandomTitles) {
      setTitles(getRandomTitles(currentTitles, 10));
    }
  }, [currentTitles, isRandomTitles, currentTitlesPosition]);

  return (
    <div className="slider-container">
      <h2 className=" text-red-600">{rowTitle}</h2>
      <div className="relative">
        <div className="relative h-fit overflow-x-clip">
          <div className="flex flex-2 gap-2 md:h-[150px] overflow-visible">
            <div className=" hidden md:contents">
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                c
              >
                {titles.map((title) => (
                  <SwiperSlide key={title.title}>
                    <Item
                      title={title}
                      key={title.title}
                      onShow={() => setIsOpen(true)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
{/* 
            <div className=" md:hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                
              >
                {titles.map((title) => (
                  <SwiperSlide key={title.title}>
                    <Item
                      title={title}
                      key={title.title}
                      onShow={() => setIsOpen(true)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
