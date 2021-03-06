import { update } from "lodash-es";
import React from "react";
import cat from "../../assets/cat.jpg";
import ReactLogo from "../../assets/logo.svg";
import s from "./style.css";

export interface HelloProps {
  compiler: string;
  framework: string;
  name: string;
}

export function Hello(props: HelloProps) {
  const { compiler, framework, name } = props;

  console.log("update", update);

  console.log("API_URI", API_URI);

  return (
    <>
      <h1 className={s.hello}>
        Hello {name} from {compiler} and {framework} !
      </h1>
      <img src={cat} />
      <ReactLogo />
    </>
  );
}
