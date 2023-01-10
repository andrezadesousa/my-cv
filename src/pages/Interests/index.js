import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BgGrid/index";
import { InterestsData } from "../../components/InterestsData/index";

export function Interests() {
  return (
    <Section id="interests">
      <SectionTitle title="Interesses" />
      <BgGrid id="interests__container">
        <InterestsData />
      </BgGrid>
    </Section>
  );
}
