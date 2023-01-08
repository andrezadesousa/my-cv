import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BdGrid/index";

import { MockSkillsData } from "../../mock/MockSkillsData";

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <BgGrid id="skills__content">
        {MockSkillsData.map(({ id, skills }) => {
          return (
            <ul key={id} className="skills__data">
              <li className="skills__name">
                <span className="skills__circle"></span>
                {skills}
              </li>
            </ul>
          );
        })}
      </BgGrid>
    </Section>
  );
}
