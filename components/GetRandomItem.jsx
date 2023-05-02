import { useState } from "react";

export default function getRandomTitles(initialList, length) {
  const titles = [];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  while (titles.length < length) {

    const temp = initialList[getRandomInt(initialList.length)];
    if (!titles.includes(temp)) {
      titles.push(temp);
    }
  }

  return titles;
};

