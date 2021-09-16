import React from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <main>
          <Route to='/'>
            <Header />
            <Projects />
            <Footer />
          </Route>
        </main>
      </Switch>
    </Router>
  )
}

export default App
