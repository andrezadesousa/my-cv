import "./styles.css";

import { BgGrid } from "../../components/BdGrid/index";
import { MarkingTime } from "../../components/MarkingTime/index";

export function ExperienceData() {
  return (
    <>
      <div className="experience__content">
        <MarkingTime></MarkingTime>
        <BgGrid id="experience__data">
          <h3 className="experience__title">Teste</h3>
        </BgGrid>
      </div>
    </>
  );
}
