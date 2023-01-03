import React from "react";
import { MockModalHeader } from "../mock/MockModalHeader";

export function ModalHeader() {
  return (
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        {MockModalHeader.map(({ id, classNav, ref, text, icon }) => {
          return (
            <li key={id} className="nav__item">
              <a href={ref} className={classNav}>
                <i className="nav__icon">{icon}</i>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
