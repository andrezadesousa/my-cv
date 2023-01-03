import React, { useState } from "react";
import {ModalHeader} from "../components/ModalHeader";
import {DiamondsFour, XCircle} from 'phosphor-react'
import '../styles/header.css'

export function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="/" className="nav__logo">Andreza</a>

        {modalOpen && <ModalHeader setOpenModal={setModalOpen} />}

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))}
        >
          {modalOpen 
            ? <XCircle /> 
            : <DiamondsFour />}
        </div>
      </nav>
    </header>
  );
}
