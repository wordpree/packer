import React from "react";
import "./packer.css";
export default function Item({ item, onChange }) {
  return (
    <div className="item">
      <input
        className="checkbox"
        checked={item.packed}
        id={item.name}
        type="checkbox"
        onChange={() => onChange(item.id)}
      />
      <label htmlFor={item.name}>{item.name}</label>
    </div>
  );
}
