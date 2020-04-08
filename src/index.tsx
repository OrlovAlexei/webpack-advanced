import "moment";
import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "./components";
import "./index.css";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" name="Alex" />,
  document.getElementById("root")
);
