import React from "react";
import pasteIcon from "../../svg/paste.svg";

export default props => {
  const { recentSet, reuseSet } = props;

  return (
    <button type="button" onClick={() => reuseSet(recentSet)}>
      <img src={pasteIcon} alt="Klistra in" />
    </button>
  );
};
