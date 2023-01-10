import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BgGrid/index";
import { LearnContent } from "../../components/LearnContent/index"
import { LearnTitle } from "../../components/LearnTitle";
import { MarkingLineEnd } from "../../components/MakingLineEnd/index";
import { MarkingLine } from "../../components/MarkingLine/index";

export function Learn() {
  return (
    <Section>
      <SectionTitle title="Estudando"/>
      <BgGrid id="education__container">
      <LearnContent>
      <MarkingLine />
      <BgGrid id="learn__data">
        <LearnTitle title="Trilha Conectar" />
        <span className="learn__studies">Rocketseat</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </LearnContent>

    <LearnContent>
      <MarkingLineEnd />
      <BgGrid id="learn__data">
        <LearnTitle title="FrontStart" />
        <span className="learn__studies">Isadora Stangarlin</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </LearnContent>
      </BgGrid>
    </Section>
  );
}
