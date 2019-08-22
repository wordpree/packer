import React, { useState } from "react";
import "./packer.css";
const uuId = require("uuid/v4");

export default function Packer() {
  let ele = null;
  const [list, setList] = useState([
    { name: "T-shirt", status: false, id: uuId() },
    { name: "Shoes", status: false, id: uuId() },
    { name: "Jumper", status: false, id: uuId() }
  ]);
  function handleChange(e) {
    ele = e.currentTarget.value;
  }
  function handelSubmit(e) {
    e.preventDefault();
    setList(pre => [...pre, { name: ele, status: false, id: uuId() }]);
  }
  function handleCheckbox(id) {
    setList(pre => {
      const item1 = pre.filter(item1 => item1.id !== id);
      const item2 = pre.find(item2 => item2.id === id);
      return [...item1, { ...item2, status: !item2.status }];
    });
  }
  return (
    <div className="main">
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={handleChange} className="forminput" />
        <input type="submit" id="text" value="add new" className="formsubmit" />
      </form>
      <div className="entry">
        <div className="packer">
          <h3>
            The unpacked Items({list.filter(item => !item.status).length})
          </h3>
          {list
            .filter(item => !item.status)
            .map((item, index) => (
              <div key={index} className="pack">
                <input
                  className="checkbox"
                  checked={item.status}
                  id={item.name}
                  type="checkbox"
                  onChange={e => handleCheckbox(item.id)}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            ))}
        </div>
        <div className="unpacker">
          <h3>The packed Items({list.filter(item => item.status).length})</h3>
          {list
            .filter(item => item.status)
            .map((item, index) => (
              <div key={index} className="unpack">
                <input
                  className="checkbox"
                  checked={item.status}
                  id={item.name}
                  type="checkbox"
                  onChange={e => handleCheckbox(item.id)}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
