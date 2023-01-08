import "./styles.css";

import { AirplaneInFlight, Headphones, Books, GameController, Barbell } from "phosphor-react";

export function InterestsData() {
  return (
    <>
      <div className="interests__content">
        <AirplaneInFlight className="interests__icon" />
        <span className="interests__name">Viagens</span>
      </div>

      <div className="interests__content">
        <Headphones className="interests__icon" />
        <span className="interests__name">Música</span>
      </div>

      <div className="interests__content">
        <Books className="interests__icon" />
        <span className="interests__name">Ler</span>
      </div>

      <div className="interests__content">
        <GameController className="interests__icon" />
        <span className="interests__name">Jogar</span>
      </div>

      <div className="interests__content">
        <Barbell className="interests__icon" />
        <span className="interests__name">Exercitar-se</span>
      </div>
    </>
  );
}
