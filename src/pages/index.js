import { Header } from "./Header/index";
import { Home } from "./Home/index";
import { SocialMedia } from "./SocialMedia";
import { Profile } from "./Profile";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Experience } from "./Experience";

export function Body() {
  return (
    <body>
      <Header></Header>
      <main className="l-main bd-container">

        <div className="resume">
          <div className="resume__left">
            <Home></Home>
            <SocialMedia></SocialMedia>
            <Profile></Profile>
            <Education></Education>
            <Skills></Skills>
          </div>
        </div>

        <div className="resume__right">
          <Experience></Experience>
        </div>
      </main>
    </body>
  );
}
