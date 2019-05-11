import React from 'react'
import OneRm from '../helpers/1rm'

export default _props => {
  const calculate = (e) => {
    const [ weight, reps, output ] = e.target.form
    const orm = OneRm(weight.valueAsNumber, reps.valueAsNumber)
    output.value = `${Math.round(orm)}kg`
  }
  return (
    <form
      className="form"
      onInput={calculate}
      method="post"
      action=""
    >
      <label htmlFor="weight">Vikt</label>
      <input
        id="weight"
        type="number"
        min="2.5"
        max="300"
        step="2.5"
        pattern="[0-9]*"
        inputmode="numeric"
      />
      <label htmlFor="reps">Repetioner</label>
      <input
        id="reps"
        type="number"
        min="1"
        max="50"
        step="1"
        pattern="[0-9]*"
        inputmode="numeric"
      />
      <output id="1rm" htmlFor="weight reps" />
    </form>
  )
}