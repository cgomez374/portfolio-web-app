import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Icons from "./components/Icons/Icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <Header />
          <About />
          <Icons />
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
