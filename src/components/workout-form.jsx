import React from "react";
import d2s from "../helpers/d2s";

export default props => {
  const { createWorkout } = props;

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const field = document.getElementById("name");
    createWorkout(field.value, d2s(new Date()));
    field.value = "";
  };

  return (
    <form className="form" onSubmit={handleOnSubmit} method="post" action="">
      <div>
        <label htmlFor="name">Döp passet</label>
        <input id="name" type="text" />
      </div>
      <div className="form-actions">
        <button type="submit">Starta pass</button>
      </div>
    </form>
  );
};
