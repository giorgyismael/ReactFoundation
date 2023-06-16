import React from "react";

import Primeiro from "./Primeiro";
import ComParametro from "./ComParametro";
import Fragment from "./Fragment";
import Card from "../layout/Card";

export default () => (
  <div id="app">
    <h1>Fundations ReactJS</h1>
    <Fragment />
    <ComParametro name="João" matter="Math" note={7.5} />
    <ComParametro name="Maria" matter="Math" note={6.9} />
    <Primeiro />

    <Card title="Situação Aluno">
      <ComParametro name="João" matter="Math" note={7.5} />
    </Card>
    <Card title="Fragmento">
      <Fragment />
    </Card>
    <Card title="Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
