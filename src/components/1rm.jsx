import React from "react";
import OneRm from "../helpers/1rm";
import { RepsField, WeightField } from "./fields";

export default _props => {
  const calculate = e => {
    const [weight, reps, output] = e.target.form;
    const orm = OneRm(weight.valueAsNumber, reps.valueAsNumber);
    if (!isNaN(orm)) {
      output.value = `${Math.round(orm)}kg`;
    }
  };
  return (
    <form className="form" onInput={calculate} method="post" action="">
      <WeightField handleOnChange={() => {}} />
      <RepsField handleOnChange={() => {}} />
      <output id="1rm" htmlFor="weight reps" />
    </form>
  );
};
