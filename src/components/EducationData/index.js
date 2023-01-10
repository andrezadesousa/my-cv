import "./styles.css";

import { BgGrid } from "../../components/BgGrid/index";
import { MarkingTime } from "../../components/MarkingTime/index";
import { MarkingTimeEnd } from "../../components/MakingTimeEnd/index";

export function EducationData() {
  return (
    <>
    <div className="education__content">
      <MarkingTime></MarkingTime>
      <BgGrid id="education__data">
        <h3 className="education__title">Gestão da TI</h3>
        <span className="education__studies">Fatec Barueri</span>
        <span className="education__year">2018 - 2021</span>
      </BgGrid>
    </div>

    <div className="education__content">
      <MarkingTime></MarkingTime>
      <BgGrid id="education__data">
        <h3 className="education__title">Ignite Lab | ReactJs</h3>
        <span className="education__studies">Rocketseat</span>
        <span className="education__year">2022 - 2022</span>
      </BgGrid>
    </div>

    <div className="education__content">
      <MarkingTimeEnd></MarkingTimeEnd>
      <BgGrid id="education__data">
        <h3 className="education__title">Next Level Together | ReactJs</h3>
        <span className="education__studies">Rocketseat</span>
        <span className="education__year">2023 - 2023</span>
      </BgGrid>
    </div>
    </>
  );
}
