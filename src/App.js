import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import { RouterView } from "./router/index";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <RouterView />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
