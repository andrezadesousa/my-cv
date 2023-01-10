import { Home } from "../Home/index";
import { SocialMedia } from "../SocialMedia";
import { Profile } from "../Profile";
import { Education } from "../Education";
import { Learn } from "../learn";
import { Skills } from "../Skills";

export function ResumeLeft() {
  return (
    <div className="resume__left">
      <Home></Home>
      <SocialMedia></SocialMedia>
      <Profile></Profile>
      <Education></Education>
      <Learn></Learn>
      <Skills></Skills>
    </div>
  );
}
