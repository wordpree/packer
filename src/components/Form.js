import React from "react";

export default function Form({ onSubmit, onChange }) {
  return (
    <div className="main">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} className="forminput" />
        <input type="submit" id="text" value="add new" className="formsubmit" />
      </form>
    </div>
  );
}
