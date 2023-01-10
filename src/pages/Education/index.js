import './styles.css'

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";

export function Education() {
  return (
    <Section id="education">
      <SectionTitle title="Educação" />
      <p className="education-title">
        Gestão da Tecnologia da Informação
      </p>
      <p className="education-studies">
        Fatec Barueri
      </p>
      <p className="education-studies">
        2021 - 2022
      </p>
    </Section>
  );
}
