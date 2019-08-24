import reducer, { INITIAL } from "../exercises";
import { createSet } from "../../actions";

describe("currentView", () => {
  it("returns initial state", () => {
    const initialState = reducer(undefined, { type: "dummyAction" });

    expect(initialState).toEqual(INITIAL);
  });

  describe("Adds new exercises", () => {
    it("add new exercise when set has it", () => {
      const currentState = ["a", "b"];

      const action = createSet({ exercise: "d" });
      const newState = reducer(currentState, action);

      expect(newState).toEqual(["a", "b", "d"]);
    });

    it("skips duplicate", () => {
      const currentState = ["a", "d"];

      const action = createSet({ exercise: "d" });
      const newState = reducer(currentState, action);

      expect(newState).toEqual(currentState);
    });

    it("skipping duplicates case sensitively", () => {
      const currentState = ["a", "d"];

      const action = createSet({ exercise: "D" });
      const newState = reducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
