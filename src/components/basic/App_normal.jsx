import React from "react";

import Primeiro from "./Primeiro";
import ComParametro from "./ComParametro";
import Fragment from "./Fragment";

export default function App(props) {
  return (
    <div id="app">
      <h1>Fundations ReactJS</h1>
      <Fragment />
      <ComParametro name="João" matter="Math" note={7.5} />
      <ComParametro name="Maria" matter="Math" note={6.9} />
      <Primeiro />
    </div>
  );
}
