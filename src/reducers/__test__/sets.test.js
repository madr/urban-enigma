import reducer from "../sets";
import { createSet, dropSet, updateSet } from "../../actions";

describe("sets", () => {
  const set1 = { id: 1, dummy: "data" };
  const set2 = { id: 2, also: "dummy-data" };

  it("returns initial state", () => {
    const initialState = reducer(undefined, { type: "dummyAction" });

    expect(initialState).toEqual([]);
  });

  describe("create", () => {
    it("creates a set", () => {
      const currentState = [set1];

      const action = createSet(set2);
      const newState = reducer(currentState, action);

      expect(newState).toEqual([set1, set2]);
    });
  });

  describe("drop", () => {
    it("drops a set", () => {
      const currentState = [set1, set2];

      const action = dropSet(2);
      const newState = reducer(currentState, action);

      expect(newState).toEqual([set1]);
    });
  });

  describe("update", () => {
    it("updates a set", () => {
      const currentState = [set1, set2];
      const updatedSet = { updated: true, ...set2 };
      const expected = [set1, updatedSet];

      const action = updateSet(updatedSet);
      const newState = reducer(currentState, action);

      expect(newState).toEqual(expected);
    });
  });
});
