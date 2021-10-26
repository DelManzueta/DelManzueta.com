import React from "react";
import ReactDOM from "react-dom";

import { Hero } from "./components/Hero/Hero";

class MyPortfolio extends React.Component {
  render() {
    return <Hero />;
  }
}

const container = document.getElementsByClassName("app-container")[0];

ReactDOM.render(React.createElement(MyPortfolio), container);
