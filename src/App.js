import { Header } from "./components/layout/header/component";
import { Footer } from "./components/layout/footer/component";
import { RouterView } from "./router/index";
import { BrowserRouter as Router } from 'react-router-dom';
import { VisitsContext } from './composables/data-controls/use-visits'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <RouterView />
        <VisitsContext.Provider>
          <Footer />
        </VisitsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
