/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { dataHeader } from '../helpers/mockup/mockHeader'
import "./modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        {dataHeader.map(({id,classNav,ref,text,icon}) => {
          return(
            <li key={id} className="nav__item">
              <a href={ref} className={classNav}>
                <i className={icon}></i>{text}
              </a>
            </li>
          )
        })}
         <li className="nav__item" onClick={() => {setOpenModal(false);}}>
          <a href="#" className="nav__link">
            <i class='bx bx-x'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Modal;