import "./styles.css";

import { BgGrid } from "../../components/BgGrid/index";
import { MarkingLine } from "../../components/MarkingLine/index";
import { MarkingLineEnd } from "../../components/MakingLineEnd/index";

export function ExperienceData() {
  return (
    <>
      <div className="experience__content">
        <MarkingLine></MarkingLine>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Desenvolvedora front-end Jr</h3>
          <span className="experience__company">Dez 2021 - Jan 2023</span>
          <p className="experience__description">
            Atuei em uma empresa de consultoria. Participando de diferentes projetos, internacionais e nacionais, como desenvolvedora web. Todos os projetos em que atuei foram com metodologia ágil Scrum e com as tecnologias:
          </p>
          <div className="experience__description">
            <li>React</li>
            <li>React Native;</li>
            <li>Angular</li>
            <li>DevExtreme Angular Components;</li>
            <li>NodeJS;</li>
            <li>JavaScript;</li>
            <li>TypeScript.</li>
          </div>
        </BgGrid>
      </div>

      <div className="experience__content">
        <MarkingLine></MarkingLine>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Business Analyst Jr</h3>
          <span className="experience__company">Ago 2021 - Dez 2021</span>
          <p className="experience__description">
            Atuei como Analista de Negócios na elaboração da documentação de um projeto americano.
            Realizei pesquisas, analisando as operações do serviço, através de reuniões com os colaboradores, stakeholders e cliente. Ao lado dos mesmos modelei e documentei o serviço. Elaborando também o diagrama dos processos de atendimento, sempre mantendo a comunicação transparente para cumprir os prazo
          </p>
        </BgGrid>
      </div>

      <div className="experience__content">
        <MarkingLineEnd></MarkingLineEnd>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Desenvolvedora FullStack Trainee</h3>
          <span className="experience__company">Mai 2021 - Dez 2021</span>
          <p className="experience__description">
            Atuei como desenvolvedora backend em um projeto americano. Sendo responsável por auxiliar na manutenção de sistemas, utilizando JavaScript e Typescript como principais linguagens de programação e ferramentas como puppeteer e Git para versionamento. Além de utilizar a metodologia ágil Scrum
          </p>
        </BgGrid>
      </div>
    </>
  );
}
