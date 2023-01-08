import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BdGrid/index";
import { InterestsData } from "../../components/InterestsData/index";

import {Headphones} from 'phosphor-react'

export function Interests() {
  return (
    <Section id="interests">
      <SectionTitle>Interesses</SectionTitle>
      <BgGrid id="interests__container">
        <InterestsData />
      </BgGrid>
    </Section>
  );
}
