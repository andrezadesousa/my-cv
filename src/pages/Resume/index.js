import { ResumeLeft } from "../ResumeLeft/index";
import { ResumeRight } from "../ResumeRight";

export function Resume() {
  return (
    <div className="resume">
      <ResumeLeft></ResumeLeft>
      <ResumeRight></ResumeRight>
    </div>
  );
}
