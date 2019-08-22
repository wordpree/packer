import React from "react";
import Items from "./Items";
export default function Packed({ onChange, items }) {
  return (
    <div className="packed">
      <h3>The Packed Lists</h3>
      <Items items={items} onChange={onChange} />
    </div>
  );
}
