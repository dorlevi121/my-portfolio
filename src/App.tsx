import React, { useEffect } from "react";
import appStyle from "./App.module.scss";
import Home from "./components/home/home";
import { Route, Switch } from "react-router";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import ReactGa from 'react-ga';

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-158393931-1');
    ReactGa.pageview(window.location.pathname + window.location.search);  
  }, [])
  return (
    <div className={appStyle.App}>
      <Switch>
        {/* Home */}
        <Route exact path="/" component={Home} />
        {/* Contact */}
        <Route path="/contact" component={Contact} />
        {/* About */}
        <Route path="/about" component={About} />
        {/* Projects */}
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
