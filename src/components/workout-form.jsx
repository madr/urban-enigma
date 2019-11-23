import React from "react";
import d2s from "../helpers/d2s";
import checkIcon from "../../svg/checkmark.svg";

export default props => {
  const { createWorkout } = props;

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const name = evt.target[1].value;
    const doneAt = d2s(new Date());
    createWorkout(name, doneAt);
  };

  return (
    <React.Fragment>
      <header>
        <h1>Starta pass</h1>
        <button type="submit" form="new-workout">
          <img src={checkIcon} alt="Kör!" />
        </button>
      </header>
      <main>
        <form
          id="new-workout"
          className="form"
          onSubmit={handleOnSubmit}
          method="post"
          action=""
        >
          <div>
            <label htmlFor="name">Döp passet</label>
            <input id="name" type="text" />
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};
