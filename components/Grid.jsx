import Item from "./Item";
import { useState } from "react";

export default function Grid({ titles }) {
  return (
    <div className="pt-20 px-8 md:px-10">
      <h1 className="text-2xl">My List</h1>
      <div className="flex flex-wrap gap-x-1.5 gap-y-4 ">
        {titles.map((title) => (
          <Item
            key={title.title}
            title={title}
            onShow={() => setIsOpen(true)}
          />
        ))}
      </div>
    </div>
  );
}
