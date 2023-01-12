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
          <span className="experience__company">Nov 2022 - Jan 2023</span>
          <p className="experience__description">
            Atuei em um projeto internacional (Marinha de Portugal). Como
            desenvolvedora Front-end Jr era responsável por desenvolver os
            layouts das telas utilizando as tecnologias : Angular, DevExtremeJs
            e Typescript e C#. Além de utilizar a metodologia ágil Scrum.
          </p>
        </BgGrid>
      </div>

      <div className="experience__content">
        <MarkingLine></MarkingLine>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Desenvolvedora front-end Jr</h3>
          <span className="experience__company">Jun 2022 - Nov 2022</span>
          <p className="experience__description">
            Atuei como desenvolvedora Front-end Jr em um projeto mobile que
            utilizavam as tecnologias ReactJs. Além de utilizar a metodologia
            ágil Scrum. Eu era uma das responsáveis por dar manutenção ao app e
            acrescentar novas funcionalidades
          </p>
        </BgGrid>
      </div>

      <div className="experience__content">
        <MarkingLine></MarkingLine>
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
        <MarkingLineEnd></MarkingLineEnd>
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
