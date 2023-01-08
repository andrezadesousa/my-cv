import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";

export function Profile() {
  return (
    <Section id="profile">
      <SectionTitle>Profile</SectionTitle>
      <p className="profile__description">
        Graduada em Gestão da Tecnologia da Informação, há um ano e oito meses
        na área da tecnologia. Inicialmente, atuei como BA e posterirmente autando como desenvolvedora. Alocada em
        diferentes projetos, tanto mobile quanto web, tendo a oportunidade de
        conhecer novas tecnologias.
      </p>
    </Section>
  );
}
