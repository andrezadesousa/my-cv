import React from "react";
import { NavLinks } from "../../mock/MockModalHeader";
import './styles.css'

export function ModalHeader() {
  return (
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        {NavLinks.map((NavLink) => {
          return (
            <li key={NavLink.id} className="nav__item">
              <a href={NavLink.ref} className={NavLink.classNav}>
                <i className="nav__icon">{NavLink.icon}</i>
                {NavLink.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
