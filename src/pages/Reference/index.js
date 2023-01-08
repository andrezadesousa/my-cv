import "./styles.css";

import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BdGrid/index";

export function References() {
  return (
    <Section id="references">
      <SectionTitle>Referência</SectionTitle>
      <BgGrid id="references__container">
        <BgGrid id="references__content">
          <span className="references__subtitle">
            Líder Técnico | Desenvolvedor Fullstack Sênior
          </span>
          <h3 className="references__title">Henrique Fantini</h3>
          <ul className="references__description">
            <li>
              Andreza é uma profissional em plena ascensão e que se mostrou
              muito valiosa logo que começamos a trabalhar em conjunto. Recheada
              de soft skills apresenta uma constante sede de conhecimento e
              busca por aprendizado que a destacam como uma pessoa cheia de
              diferenciais. Sua vontade, facilidade de adaptação e consciência
              relacionada ao aprendizado contínuo, somado ao senso de
              responsabilidade e dedicação que me foi apresentado durante todas
              as nossas interações, levam-me a crer que em pouco tempo ela será
              uma profissional referência no que tange desenvolvimento de
              software. Foi uma imensa honra trabalhar junto de você!
            </li>
          </ul>
        </BgGrid>
      </BgGrid>
    </Section>
  );
}
