import React from "react";
import oneRm from "../helpers/1rm";
import l2k from "../helpers/lbs2kg";
import { RepsField, WeightField } from "./fields";

const OneRm = _props => {
  const calculate = e => {
    const [weight, reps, output] = e.target.form;
    const orm = oneRm(weight.valueAsNumber, reps.valueAsNumber);
    if (!isNaN(orm)) {
      output.value = `${orm}kg`;
    }
  };
  return (
    <React.Fragment>
      <div className="legend flex--space-between">
        <h1>Beräkna 1RM</h1>
        <p>
          <a href="https://www.vcalc.com/wiki/vCalc/Epley+Formula+%281+rep+max%29">
            Epleys 1RM formula
          </a>
        </p>
      </div>
      <form
        className="form oneRmForm flex--space-between"
        onInput={calculate}
        method="post"
        action=""
      >
        <div className="fieldset">
          <WeightField handleOnChange={() => {}} />
          <RepsField handleOnChange={() => {}} />
        </div>
        <output htmlFor="weight reps" />
      </form>
    </React.Fragment>
  );
};

const Lbs2Kg = _props => {
  const calculate = e => {
    const [weight, output] = e.target.form;
    const kg = l2k(weight.valueAsNumber);
    if (!isNaN(kg)) {
      output.value = `${kg}kg`;
    }
  };
  return (
    <React.Fragment>
      <div className="legend flex--space-between">
        <h1>Lbs till Kg</h1>
        <p>
          <a href="https://sv.wikipedia.org/wiki/Pund_(viktenhet)">
            Pund (viktenhet)
          </a>
        </p>
      </div>
      <form
        className="form oneRmForm flex--space-between"
        onInput={calculate}
        method="post"
        action=""
      >
        <div className="fieldset">
          <WeightField handleOnChange={() => {}} />
        </div>
        <output htmlFor="weight" />
      </form>
    </React.Fragment>
  );
};

export default _props => {
  return (
    <React.Fragment>
      <header>
        <h1>Slaskn</h1>
      </header>
      <main>
        <OneRm />
        <Lbs2Kg />
      </main>
    </React.Fragment>
  );
};
