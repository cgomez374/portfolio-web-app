import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Icons from "./components/Icons/Icons";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
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
