import './styles.css'

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BgGrid/index";
import { EducationContent } from "../../components/EducationContent/index";
import { EducationTitle } from "../../components/EducationTitle";

export function Education() {
  return (
    <Section id="education">
      <SectionTitle title="Educação" />
      <BgGrid>
        <EducationContent>
          <BgGrid id="education__data">
            <EducationTitle title="Gestão da Tecnologia da Informação" />
              <span className="education__studies">Fatec Barueri</span>
              <span className="education__year">2018 - 2021</span>
          </BgGrid>
        </EducationContent>
      </BgGrid>
    </Section>
  );
}
