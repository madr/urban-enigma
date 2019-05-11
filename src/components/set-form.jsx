import React from 'react'

export default props => {
  const {
    draft,
    updateDraft,
    createSet,
    exercises,
  } = props
  const {
    exercise,
    reps,
    rating,
    weight,
  } = draft
  const handleOnChange = evt => {
    const { id: attr, value } = evt.target
    updateDraft(attr, value)
  }
  const handleOnSubmit = evt => {
    evt.preventDefault()
    if (!!draft.exercise) {
      createSet(draft)
    }
  }
  return (
    <form
      className="form"
      onSubmit={handleOnSubmit}
      method="post"
      action=""
    >
      <datalist id="exercises">
        {exercises.map(exercise => <option key={exercise}>{exercise}</option>)}
      </datalist>
      <label htmlFor="reps">Övning</label>
      <input
        id="exercise"
        list="exercises"
        autoComplete="off"
        value={exercise}
        onChange={handleOnChange}
      />
      <label htmlFor="weight">Vikt</label>
      <input
        id="weight"
        type="number"
        min="2.5"
        max="300"
        step="2.5"
        lang="en-150"
        pattern="[0-9]*"
        inputmode="decimal"
        value={weight}
        onChange={handleOnChange}
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
        value={reps}
        onChange={handleOnChange}
      />
      <label htmlFor="rating">Hur gick det?</label>
      <input
        id="rating"
        type="range"
        min="1"
        max="5"
        pattern="[0-9]*"
        inputmode="numeric"
        value={rating}
        onChange={handleOnChange}
        step="1"
      />
      <div className="form-actions">
        <button type="submit">Spara</button>
      </div>
    </form>
  )
}