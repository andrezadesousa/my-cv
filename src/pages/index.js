import { Header } from "./Header/index";
import { Home } from "./Home/index";
import { SocialMedia } from "./SocialMedia";
import { Profile } from "./Profile";

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
          </div>
        </div>
      </main>
    </body>
  );
}
