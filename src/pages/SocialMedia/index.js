import "./styles.css";
import { Section } from "../../components/Section/index";
import { SectionTitle } from "../../components/SectionTitle/index";
import { BgGrid } from "../../components/BgGrid/index";
import {LinkedinLogo, GithubLogo} from 'phosphor-react'

export function SocialMedia() {
  return (
    <Section class="social">
      <SectionTitle title="Social" />
      <BgGrid id="social__container">
        <a href="https://www.linkedin.com/in/sousa-andreza/" target="__blank" className="social__link">
            <LinkedinLogo className="social__icon"/>Meu Linkedin
        </a>

        <a href="https://github.com/andrezadesousa" target="__blank" className="social__link">
            <GithubLogo className="social__icon"/>Meu Github
        </a>
      </BgGrid>
    </Section>
  );
}
