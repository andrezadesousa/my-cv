import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";

export function Profile() {
  return (
    <Section id="profile">
      <SectionTitle title="Profile" />
      <p className="profile__description">
        Sou Desenvolvedora Web há 2 anos e graduada em Gestão da Tecnologia da Informação. Estive alocada em
        diversos projetos, tanto mobile quanto web, tendo a oportunidade de trabalhar e conhecer diferentes tecnologias tecnologias.
      </p>
    </Section>
  );
}
