import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Item from "./Item";

export default function Items({ items, onChange }) {
  return (
    <TransitionGroup component={null}>
      {items.map((item, index) => (
        <CSSTransition key={index} timeout={600} classNames="list">
          <Item onChange={onChange} item={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
