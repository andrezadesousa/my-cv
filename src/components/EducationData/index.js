import "./styles.css";

import { BgGrid } from "../../components/BgGrid/index";
import { MarkingLine } from "../../components/MarkingLine/index";
import { MarkingLineEnd } from "../../components/MarkingLineEnd/index";

export function EducationData() {
  return (
    <>
    <div className="education__content">
      <MarkingLine></MarkingLine>
      <BgGrid id="education__data">
        <h3 className="education__title">Gestão da TI</h3>
        <span className="education__studies">Fatec Barueri</span>
        <span className="education__year">2018 - 2021</span>
      </BgGrid>
    </div>

    <div className="education__content">
      <MarkingLine></MarkingLine>
      <BgGrid id="education__data">
        <h3 className="education__title">Ignite Lab | ReactJs</h3>
        <span className="education__studies">Rocketseat</span>
        <span className="education__year">2022 - 2022</span>
      </BgGrid>
    </div>

    <div className="education__content">
      <MarkingLineEnd />
      <BgGrid id="education__data">
        <h3 className="education__title">Next Level Together | ReactJs</h3>
        <span className="education__studies">Rocketseat</span>
        <span className="education__year">2023 - 2023</span>
      </BgGrid>
    </div>
    </>
  );
}
