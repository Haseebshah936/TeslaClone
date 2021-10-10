import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "./app/store";
import Header from "./components/Header";
import Home from "./components/Home";
import CarsDetails from "./components/CarsDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cars" component={CarsDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
