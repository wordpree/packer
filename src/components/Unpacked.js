import React from "react";
import Items from "./Items";
export default function Unpacked({ onChange, items }) {
  return (
    <div className="unpacked">
      <h3>The Unpacked Lists</h3>
      <Items items={items} onChange={onChange} />
    </div>
  );
}
