/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { dataHeader } from '../../components/helpers/mockup/mockHeader'
import './header.css'
import AnimationHeader from "../../components/helpers/animation/animationHeader";

const header = () => {
  return (
    <header className="l-header" id="header">
      <nav className="nav -bd-container">
        <a href="#" className="nav__logo">Andreza</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i class='bx bx-home nav__icon'></i>Home
              </a>
            </li>
            {dataHeader.map(({id,ref,text,icon}) =>{
                return(
                    <li key={id} className='nav__item'>
                        <a href={ref} className="nav__link">
                            <i className={icon}></i>{text}
                        </a>
                    </li>
                )
            })}
          </ul>
        </div>
        <div onClick={AnimationHeader} className="nav__toggle" id="nav-toggle">
            <i class='bx bx-grid-alt'></i>
          </div>
      </nav>
    </header>
  );
};

export default header;
