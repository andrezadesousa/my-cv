import "./styles.css";

import { LearnContent } from "../LearnContent/index"
import { MarkingLine } from "../../components/MarkingLine/index";
import { BgGrid } from "../BgGrid/index";
import { LearnTitle } from "../LearnTitle";
import { MarkingLineEnd } from "../../components/MakingLineEnd/index";

export function LearnData() {
  return (
    <>
    <LearnContent>
      <MarkingLine />
      <BgGrid id="learn__data">
        <LearnTitle title="Trilha Conectar" />
        <span className="learn__studies">Rocketseat</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </LearnContent>

    <LearnContent>
      <MarkingLineEnd />
      <BgGrid id="learn__data">
        <LearnTitle title="FrontStart" />
        <span className="learn__studies">Isadora Stangarlin</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </LearnContent>
    </>
  );
}
