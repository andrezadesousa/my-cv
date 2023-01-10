import './styles.css'

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";

export function Education() {
  return (
    <Section id="education">
      <SectionTitle title="Educação" />
      <p className="education__title">
        Gestão da Tecnologia da Informação
      </p>
      <p className="education__studies">
        Fatec Barueri
      </p>
      <p className="education__studies">
        2021 - 2022
      </p>
    </Section>
  );
}
