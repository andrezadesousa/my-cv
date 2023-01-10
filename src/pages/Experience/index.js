import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BgGrid/index";
import { ExperienceData } from "../../components/ExperienceData/index";

export function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Experiência</SectionTitle>
      <BgGrid id="experience__container">
        <ExperienceData></ExperienceData>
      </BgGrid>
    </Section>
  );
}
