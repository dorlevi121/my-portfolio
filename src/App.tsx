import React from "react";
import appStyle from "./App.module.scss";
import Home from "./components/home/home";
import { Route, Router, Switch } from "react-router";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Projects from "./components/projects/projects";

function App() {
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
