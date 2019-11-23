import React from "react";
import d2s from "../helpers/d2s";

export default props => {
  const { createWorkout } = props;

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const name = evt.target[0].value;
    const doneAt = d2s(new Date());
    createWorkout(name, doneAt);
    field.value = "";
  };

  return (
    <React.Fragment>
      <header>
        <h1>Starta pass</h1>
      </header>
      <main>
        <form
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
