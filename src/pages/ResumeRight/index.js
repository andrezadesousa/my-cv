import { Experience } from "../Experience";
import { References } from "../Reference";
import { Interests } from "../Interests";
import { Bootcamp } from "../Bootcamp";

export function ResumeRight() {
  return (
    <div className="resume__right">
      <Experience></Experience>
      <Bootcamp></Bootcamp>
      <References></References>
      <Interests></Interests>
    </div>
  );
}
