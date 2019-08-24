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

const saveNewExercise = (exercises, { exercise: value }) => {
  if (exercises.map(s => s.toLowerCase()).indexOf(value.toLowerCase()) === -1) {
    exercises = [...exercises, value];
  }
  return exercises;
};

export default (currentState = INITIAL, action) => {
  switch (action.type) {
    case CREATE_SET:
      return saveNewExercise(currentState, action.payload.draft);
    default:
      return currentState;
  }
};
