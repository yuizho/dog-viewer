import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Dogs from "./containers/Dogs";

const title = "dog viewer";

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{title}</title>
    </Helmet>

    <header>
      <h1>{title}</h1>
      <br />
    </header>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:type/dogs" exact component={Dogs} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
