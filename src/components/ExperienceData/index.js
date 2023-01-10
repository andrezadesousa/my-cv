import "./styles.css";

import { BgGrid } from "../../components/BgGrid/index";
import { MarkingTime } from "../../components/MarkingTime/index";
import { MarkingTimeEnd } from "../../components/MakingTimeEnd/index";

export function ExperienceData() {
  return (
    <>
      <div className="experience__content">
        <MarkingTime></MarkingTime>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Desenvolvedora front-end Jr</h3>
          <span className="experience__company">Nov 2022 - Momento</span>
          <p className="experience__description">
            Atualmente, alocada em um cliente internacional (Portugal). Atuando
            em um projeto web como desenvolvedora Front-end com as tecnologias :
            Angular, Typescript e C#. Além de utilizar a metodologia ágil Scrum.
          </p>
        </BgGrid>
      </div>

      <div className="experience__content">
        <MarkingTime></MarkingTime>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Desenvolvedora front-end Jr</h3>
          <span className="experience__company">Jun 2022 - Nov 2022</span>
          <p className="experience__description">
            Atuei como desenvolvedora Front-end em um projeto mobile e web que
            utilizavam as tecnologias React e React Native. Além de utilizar a
            metodologia ágil Scrum.
          </p>
        </BgGrid>
      </div>

      <div className="experience__content">
        <MarkingTime></MarkingTime>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Business Analyst Jr</h3>
          <span className="experience__company">Dez 2021 - Mai 2022</span>
          <p className="experience__description">
            Atuei como Analista de Negócios na elaboração da documentação de um
            dos projetos. Realizei pesquisas, analisando as operações do
            serviço, através de reuniões com os colaboradores, stakeholders e
            cliente. Ao lado dos mesmos modelei e documentei o serviço.
            Elaborando também o diagrama dos processos de atendimento, sempre
            mantendo a comunicação transparente para cumprir os prazos.
          </p>
        </BgGrid>
      </div>

      <div className="experience__content">
        <MarkingTimeEnd></MarkingTimeEnd>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Desenvolvedora back end Trainee</h3>
          <span className="experience__company">Mai 2021 - Dez 2021</span>
          <p className="experience__description">
            Atuei como desenvolvedora backend em um projeto internacional. Sendo
            responsável por auxiliar na manutenção de sistemas, utilizando
            JavaScript e Typescript como principais linguagens de programação e
            ferramentas como puppeteer e Git para versionamento. Além de
            utilizar a metodologia ágil Scrum
          </p>
        </BgGrid>
      </div>
    </>
  );
}
