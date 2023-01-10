import '../styles/global.css'

import { Header } from "./Header/index";
import { Home } from "./Home/index";
import { SocialMedia } from "./SocialMedia";
import { Profile } from "./Profile";
import { Education } from "./Education";
import { Learn } from './learn';
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { References } from "./Reference";
import { Interests } from "./Interests";

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
            <Learn></Learn>
          </div>

          <div className="resume__right">
            <Experience></Experience>
            <Skills></Skills>
            <References></References>
            <Interests></Interests>
          </div>

        </div>
      </main>
    </body>
  );
}
