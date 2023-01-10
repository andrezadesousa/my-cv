import "./styles.css";

import { EducationContent } from "../EducationContent/index"
import { MarkingTime } from "../../components/MarkingTime/index";
import { BgGrid } from "../BgGrid/index";
import { EducationTitle } from "../EducationTitle";
import { MarkingTimeEnd } from "../../components/MakingTimeEnd/index";

export function LearnData() {
 
  return (
    <>
    <EducationContent>
      <MarkingTime />
      <BgGrid id="learn__data">
        <EducationTitle title="Trilha Conectar" />
        <span className="learn__studies">Rocketseat</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </EducationContent>

    <EducationContent>
      <MarkingTimeEnd />
      <BgGrid id="learn__data">
        <EducationTitle title="FrontStart" />
        <span className="learn__studies">Isadora Stangarlin</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </EducationContent>
    </>
  );
}
