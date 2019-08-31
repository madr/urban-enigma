import reducer from "../workouts";
import { createSet, createWorkout } from "../../actions";

describe("workouts", () => {
  it("returns initial state", () => {
    const initialState = reducer(undefined, { type: "dummyAction" });

    expect(initialState).toEqual([]);
  });

  it("creates workout when set is created and no workout is present", () => {
    const workout1 = { dummy: "data" };
    const doneAt = "dummy-date";
    const set = { also: "dummy-data", doneAt };
    const currentState = [workout1];

    const action = createSet(set);
    const newState = reducer(currentState, action);

    expect(newState.length).toBe(2);
    expect(newState[1].doneAt).toBe(doneAt);
  });

  it("creates a new workout with a name", () => {
    const name = "presspasset";
    const doneAt = "2006-06-06";
    const currentState = [];

    const action = createWorkout(name, doneAt);
    const newState = reducer(currentState, action);

    expect(newState.length).toBe(1);
    expect(newState[0]).toEqual({ name, doneAt });
  });
});
