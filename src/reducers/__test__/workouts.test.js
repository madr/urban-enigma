import reducer from "../workouts";
import { createSet } from "../../actions";

describe("workouts", () => {
  it("returns initial state", () => {
    const initialState = reducer(undefined, { type: "dummyAction" });

    expect(initialState).toEqual([]);
  });

  it("creates workout whgen set is created", () => {
    const workout1 = { dummy: "data" };
    const doneAt = "dummy-date";
    const set = { also: "dummy-data", doneAt };
    const currentState = [workout1];

    const action = createSet(set);
    const newState = reducer(currentState, action);

    expect(newState.length).toBe(2);
    expect(newState[1].doneAt).toBe(doneAt);
  });
});
