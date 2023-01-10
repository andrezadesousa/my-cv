import "./styles.css";

import { EducationContent } from "../EducationContent/index"
import { MarkingLine } from "../../components/MarkingLine/index";
import { BgGrid } from "../BgGrid/index";
import { EducationTitle } from "../EducationTitle";
import { MarkingLineEnd } from "../../components/MakingLineEnd/index";

export function LearnData() {
 
  return (
    <>
    <EducationContent>
      <MarkingLine />
      <BgGrid id="learn__data">
        <EducationTitle title="Trilha Conectar" />
        <span className="learn__studies">Rocketseat</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </EducationContent>

    <EducationContent>
      <MarkingLineEnd />
      <BgGrid id="learn__data">
        <EducationTitle title="FrontStart" />
        <span className="learn__studies">Isadora Stangarlin</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </EducationContent>
    </>
  );
}
