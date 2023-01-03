import { Header } from "./Header";
import { Home } from "./Home";

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
