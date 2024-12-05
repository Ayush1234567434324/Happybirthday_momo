import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import GoogleDrivePDF from "./components/Pages/Portfolio";

function App() {
  return (
    <>
      <Router>
        <HamburgerMenu />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={GoogleDrivePDF} />
            <Route path="/songs" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
