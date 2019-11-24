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
      const expected = ["d", "a", "b"];

      const action = createSet({ exercise: "d" });
      const newState = reducer(currentState, action);

      expect(newState).toEqual(expected);
    });

    it("skips duplicate", () => {
      const currentState = ["a", "d"];
      const expected = ["d", "a"];

      const action = createSet({ exercise: "d" });
      const newState = reducer(currentState, action);

      expect(newState).toEqual(expected);
    });

    it("prepend the most recent exercise to list", () => {
      const currentState = ["a", "b", "c", "d", "e"];
      const expected = ["c", "a", "b", "d", "e"];
      const alsoExpected = ["e", "c", "a", "b", "d"];

      const action = createSet({ exercise: "c" });
      const newState = reducer(currentState, action);
      const anotherAction = createSet({ exercise: "e" });
      const anotherNewState = reducer(newState, anotherAction);

      expect(newState).toEqual(expected);
      expect(anotherNewState).toEqual(alsoExpected);
    });

    it("keeps exercise formatting intact", () => {
      const currentState = ["Koda", "Headbanga"];
      const expected = ["Headbanga", "Koda"];

      const action = createSet({ exercise: "Headbanga" });
      const newState = reducer(currentState, action);

      expect(newState).toEqual(expected);
    });
  });
});
