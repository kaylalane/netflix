import Item from "./Item";
import { useState } from "react";

export default function Grid({ titles }) {
  return (
    <div className="pt-20 px-10 md:px-10">
      <h1 className="text-2xl">My List</h1>
      <div className="flex flex-wrap gap-x-1 gap-y-4 ">
        {titles.map((title) => (
          <div key={title.title} className="h-[150px]">
            <Item title={title} onShow={() => setIsOpen(true)} />
          </div>
        ))}
      </div>
    </div>
  );
}
