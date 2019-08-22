import React, { useState } from "react";
import Packed from "./Packed";
import Unpacked from "./Unpacked";
import Form from "./Form";
import "./packer.css";
const uuId = require("uuid/v4");

export default function Packer() {
  const defaultState = [
    { name: "T-shirt", packed: false, id: uuId() },
    { name: "Shoes", packed: false, id: uuId() },
    { name: "Jumper", packed: false, id: uuId() },
    { name: "Shorts", packed: false, id: uuId() },
    { name: "Meat", packed: true, id: uuId() },
    { name: "Fish", packed: true, id: uuId() }
  ];

  const [lists, setLists] = useState(defaultState);
  let newName = "";
  const unpacked = lists.filter(list => !list.packed);
  const packed = lists.filter(list => list.packed);

  const addItem = item => setLists([...lists, item]);
  const handleChange = e => {
    newName = e.currentTarget.value;
  };
  const handleSubmit = e => {
    e.preventDefault();
    const item = {
      name: newName,
      packed: false,
      id: uuId()
    };
    addItem(item);
  };
  const hanldeChangeCheckbox = id => {
    const checkbox = lists.map(list => {
      if (list.id !== id) {
        return list;
      } else {
        return { ...list, packed: !list.packed };
      }
    });
    setLists(checkbox);
  };
  return (
    <div className="entry">
      <Form onSubmit={handleSubmit} onChange={handleChange} />
      <Unpacked items={unpacked} onChange={hanldeChangeCheckbox} />
      <Packed items={packed} onChange={hanldeChangeCheckbox} />
    </div>
  );
}
