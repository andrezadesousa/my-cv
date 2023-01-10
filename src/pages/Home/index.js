import homeImage from "../../assets/image/homeImage.jpg";

import { MapPin, UserCircle } from "phosphor-react";

import { HomeInformation } from "../../components/HomeInformation/index";
import { BgGrid } from "../../components/BgGrid/index";

import "./styles.css";

export function Home() {

  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <BgGrid id="home__data">
          <img
            src={homeImage}
            className="home__img"
            alt="Imagem de Perfil"
          ></img>
          <h1 className="home__title">
            ANDREZA <b>SOUSA</b>
          </h1>
          <h2 className="home__profession">Desenvolvedora Front-end Jr</h2>
        </BgGrid>

        <BgGrid id="home__address">
          <HomeInformation>
            <MapPin className="home__icon"></MapPin>São Paulo - Brasil
          </HomeInformation>

          <HomeInformation>
            <UserCircle className="home__icon"></UserCircle> 23 anos
          </HomeInformation>
        </BgGrid>
      </div>
    </section>
  );
}
