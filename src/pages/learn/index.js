import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BgGrid/index";
import { LearnData } from "../../components/LearnData";

export function Learn() {
  return (
    <Section id="education">
      <SectionTitle title="Estudando"/>
      <BgGrid id="education__container">
        <LearnData />
      </BgGrid>
    </Section>
  );
}
