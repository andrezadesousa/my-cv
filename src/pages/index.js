import { Header } from "./Header/index";
import { Home } from "./Home/index";

export function Body() {
  return (
    <body>
      <Header></Header>
      <main className="l-main bd-container">
        <div className="resume">
          <div className="resume__left">
            <Home></Home>
          </div>
        </div>
      </main>
    </body>
  );
}
