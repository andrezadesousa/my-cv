import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";

export function Profile() {
  return (
    <Section id="profile">
      <SectionTitle>Profile</SectionTitle>
      <p className="profile__description">
        Sou graduada em Gestão da Tecnologia da Informação, há um ano e oito meses
        na área da tecnologia. Iniciei como BA, e posteriormente, migrei para o desenvolvimento. Alocada em
        diversos projetos, tanto mobile quanto web, tendo a oportunidade de trabalhar e
        conhecer novas tecnologias.
      </p>
    </Section>
  );
}
