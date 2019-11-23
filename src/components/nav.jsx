import React from "react";
import bookIcon from "../../svg/book.svg";
import bullhornIcon from "../../svg/bullhorn.svg";
import labIcon from "../../svg/lab.svg";

export default props => {
  const { goto } = props;
  return (
    <nav id="nav">
      <button onClick={() => goto("history")}>
        <img src={bookIcon} alt="Historik" />
      </button>
      <button onClick={() => goto("new")}>
        <img src={bullhornIcon} alt="Logga träning" />
      </button>
      <button onClick={() => goto("1rm")}>
        <img src={labIcon} alt="Slaskn" />
      </button>
    </nav>
  );
};
