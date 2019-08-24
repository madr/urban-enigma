import reducer from "../folded-workouts";
import { foldWorkout, collapseWorkout } from "../../actions";

describe("foldedWorkouts", () => {
  it("returns initial state", () => {
    const initialState = reducer(undefined, { type: "dummyAction" });

    expect(initialState).toEqual([]);
  });

  describe("collapse", () => {
    it("collapse workout", () => {
      const currentState = ["b"];

      const action = collapseWorkout("a");
      const newState = reducer(currentState, action);

      expect(newState).toEqual(["b", "a"]);
    });

    it("do not collapse already collapsed", () => {
      const currentState = ["a"];

      const action = collapseWorkout("a");
      const newState = reducer(currentState, action);

      expect(newState).toEqual(["a"]);
    });
  });

  describe("fold", () => {
    it("folds workout", () => {
      const currentState = ["b", "a"];

      const action = foldWorkout("a");
      const newState = reducer(currentState, action);

      expect(newState).toEqual(["b"]);
    });
  });
});
