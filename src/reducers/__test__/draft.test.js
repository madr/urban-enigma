import reducer, { emptyDraft } from "../draft";
import {
  updateDraft,
  pasteDraft,
  createSet,
  createWorkout
} from "../../actions";

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

  describe("new workout", () => {
    it("returns empty draft when a workout is created", () => {
      const currentState = { throw: "away" };
      const expected = emptyDraft();
      delete expected.id;

      const action = createWorkout("Leg day!", "2019-09-11");
      const newState = reducer(currentState, action);
      delete newState.id;

      expect(newState).toEqual(expected);
    });
  });

  describe("copy draft", () => {
    it("imports a complete set to draft", () => {
      const currentState = emptyDraft();
      const values = {
        exercise: "skriva kod",
        weight: 111,
        reps: 6,
        isWarmup: true
      };
      const expected = { ...currentState, ...values };

      const action = pasteDraft(values);
      const newState = reducer(currentState, action);

      expect(newState).toEqual(expected);
    });

    it("imports a partial set to draft", () => {
      const currentState = emptyDraft();
      const values = {
        exercise: "skriva kod"
      };
      const expected = { ...currentState, ...values };

      const action = pasteDraft(values);
      const newState = reducer(currentState, action);

      expect(newState).toEqual(expected);
    });
  });
});
