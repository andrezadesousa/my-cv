import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BgGrid/index";
import { EducationData } from "../../components/EducationData";

export function Education() {
  return (
    <Section id="education">
      <SectionTitle>Educação</SectionTitle>
      <BgGrid id="education__container">
        <EducationData></EducationData>
      </BgGrid>
    </Section>
  );
}
