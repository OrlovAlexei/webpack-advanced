import React from "react";
import s from "./style.css";

export interface HelloProps {
  compiler: string;
  framework: string;
  name: string;
}

export function Hello(props: HelloProps) {
  const { compiler, framework, name } = props;
  return (
    <h1 className={s.hello}>
      Hello {name} from {compiler} and {framework} !
    </h1>
  );
}
