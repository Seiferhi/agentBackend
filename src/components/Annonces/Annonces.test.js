import React from "react";
import ReactDOM from "react-dom";
import Annonces from "./Annonces";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Annonces />, div);
});
