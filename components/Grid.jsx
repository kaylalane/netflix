import Item from "./Item";
import { useState } from "react";

export default function Grid({ titles }) {
  return (
    <div className="grid">
      {titles.map((title) => (
        <Item key={title.title} title={title} onShow={() => setIsOpen(true)} />
      ))}
    </div>
  );
}
