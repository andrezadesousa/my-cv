import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BgGrid/index";
import { MarkingLine } from "../../components/MarkingLine/index";
import { MarkingLineEnd } from "../../components/MakingLineEnd/index";

export function Bootcamp() {
  return (
    <Section>
      <SectionTitle title="BootCamps & Eventos" />
      <BgGrid>
        <div className="bootcamp__content">
          <MarkingLine />
          <BgGrid id="bootcamp__data">
            <h3 className="bootcamp__title">
              Next Level Week Together | ReactJs
            </h3>
            <span className="bootcamp__company">RocketSeat | 2022</span>
            <p className="bootcamp__description">
              O maior evento online promovido pela RocketSeat durante uma
              semana. Voltado tanto para quem já é desenvolvedor quanto para
              quem está começando no mundo da programação Nesse período nós
              (devs) desenvolvemos uma aplicação do zero. Nessa edição foi
              desenvolvido o{" "}
              <a className="bootcamp__link" href="https://github.com/andrezadesousa/let-me-ask">
                LetmeAks
              </a>{" "}
              em que o usuário pode criar salas de Q&A com o seu público, de uma
              forma muito organizada e democrática.
            </p>
          </BgGrid>
        </div>

        <div className="bootcamp__content">
          <MarkingLineEnd />
          <BgGrid id="bootcamp__data">
            <h3 className="bootcamp__title">Ignite Lab | ReactJs</h3>
            <span className="bootcamp__company">RocketSeat | 2022</span>
            <p className="bootcamp__description">
              Um evento online promovido pela RocketSeat. Voltado para quem já é
              desenvolvedor e está em etapa de especialização, aprofundando-se
              nas ferramentas e tecnologias mais modernas. Nessa edição foi desenvolvida uma aplicação em{" "}
              <a className="bootcamp__link" href="https://github.com/andrezadesousa/react-design-system">
                React Design System
              </a>{" "}
            </p>
          </BgGrid>
        </div>
      </BgGrid>
    </Section>
  );
}
