/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "../../../components/modal/modal";
import './header.css'

function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">Andreza</a>
        <div 
          class="nav__toggle" 
          id="nav-toggle" 
          onClick={() => { setModalOpen(true);}}>
          <i class='bx bx-grid-alt'></i>
        </div>
      </nav>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </header>
  );
}

export default Header;
