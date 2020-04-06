import React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
  name: string;
}

export function Hello(props: HelloProps) {
  const { compiler, framework, name } = props;
  return (
    <h1>
      Hello {name} from {compiler} and {framework} !
    </h1>
  );
}
