import reducer, { emptyDraft } from "../draft";
import { updateDraft, createSet } from "../../actions";

describe("drafts", () => {
  it("returns initial state", () => {
    const expected = emptyDraft();
    delete expected.id;

    const initialState = reducer(undefined, { type: "dummyAction" });
    delete initialState.id;

    expect(initialState).toEqual(expected);
  });

  describe("resets draft draft to initial statewhen set is created", () => {
    it("drops a set", () => {
      const currentState = { a: "draft" };
      const expected = emptyDraft();
      delete expected.id;

      const action = createSet({ what: "ever" });
      const newState = reducer(currentState, action);
      delete newState.id;

      expect(newState).toEqual(expected);
    });
  });

  describe("update", () => {
    it("updates a draft", () => {
      const exercise = "skriva kod";
      const currentState = emptyDraft();

      const action = updateDraft("exercise", exercise);
      const newState = reducer(currentState, action);

      expect(newState.exercise).toEqual(exercise);
    });
  });
});
