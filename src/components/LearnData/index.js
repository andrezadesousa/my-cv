import "./styles.css";

import { BgGrid } from "../../components/BdGrid/index";
import { MarkingTime } from "../../components/MarkingTime/index";
import { MarkingTimeEnd } from "../../components/MakingTimeEnd/index";

export function LearnData() {
  return (
    <>
    <div className="learn__content">
      <MarkingTime></MarkingTime>
      <BgGrid id="learn__data">
        <h3 className="learn__title">FrontStart</h3>
        <span className="learn__studies">Isadora Stangarlin</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </div>
    <div className="learn__content">
      <MarkingTimeEnd></MarkingTimeEnd>
      <BgGrid id="learn__data">
        <h3 className="learn__title">Trilha Conectar</h3>
        <span className="learn__studies">Rocketseat</span>
        <span className="learn__year">Jan/2023 - estudando</span>
      </BgGrid>
    </div>
    </>
  );
}
