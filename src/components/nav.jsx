import React from "react";

export default props => {
  const { goto } = props;
  return (
    <nav id="nav">
      <button title="Historik" onClick={() => goto("history")}>
        📆
      </button>
      <button title="Logga pass" onClick={() => goto("new")}>
        ➕
      </button>
      <button title="Kalkylator för 1rm" onClick={() => goto("1rm")}>
        1RM
      </button>
    </nav>
  );
};
