import React from "react";

export default function ComParametro(props) {
  console.log(props);
  const status = props.note >= 7 ? "Aproved" : "Reproved";
  return (
    <div>
      <h2>#3 - Situação Aluno</h2>
      <h3>{props.name}</h3>
      <h4>{props.matter}</h4>
      <p>
        Sua nota é {props.note} | Status: {status}
      </p>
    </div>
  );
}
