import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "./app/store";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route } from "react";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
