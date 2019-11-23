import { CREATE_SET } from "../actions";

export const INITIAL = [
  "Bicepscurls",
  "Bänkpress",
  "Chins",
  "Dips",
  "Facepulls",
  "Flyes",
  "French press",
  "Hantellyft åt sidan",
  "Knäböj",
  "Latsdrag",
  "Liggande tricepsextension",
  "Marklyft",
  "Raka marklyft",
  "Rumänska marklyft",
  "Pausknäböj",
  "Press över huvudet",
  "Skivstångsrodd",
  "Smalbänk",
  "Sälrodd",
  "Uppåtlutad hantelpress",
  "Utfall"
];

const slugify = s => s.toLowerCase();

const reorderExercises = (exercises, exercise) => [
  exercise,
  ...exercises.filter(e => slugify(e) !== slugify(exercise))
];

const saveNewExercise = (exercises, { exercise: value }) => {
  if (exercises.map(s => slugify(s)).indexOf(slugify(value)) === -1) {
    exercises = [...exercises, value];
  }
  return exercises;
};

export default (currentState = INITIAL, action) => {
  switch (action.type) {
    case CREATE_SET:
      return reorderExercises(
        saveNewExercise(currentState, action.payload.draft),
        slugify(action.payload.draft.exercise)
      );
    default:
      return currentState;
  }
};
