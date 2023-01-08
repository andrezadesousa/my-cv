import { Header } from "./Header/index";
import { Home } from "./Home/index";
import { SocialMedia } from "./SocialMedia";

export function Body() {
  return (
    <body>
      <Header></Header>
      <main className="l-main bd-container">
        <div className="resume">
          <div className="resume__left">
            <Home></Home>
            <SocialMedia></SocialMedia>
          </div>
        </div>
      </main>
    </body>
  );
}
