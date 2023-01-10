import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BdGrid/index";
import { LearnData } from "../../components/LearnData";

export function Learn() {
  return (
    <Section id="education">
      <SectionTitle>Estudando</SectionTitle>
      <BgGrid id="education__container">
        <LearnData></LearnData>
      </BgGrid>
    </Section>
  );
}
