import './styles/global.css'

import { Header } from './pages/Header';
import { Resume } from './pages/Resume';

function App() {
  return (
    <body>
      <Header />
      <main className="l-main bd-container">
        <Resume />
      </main>
    </body>
  );
}

export default App;
