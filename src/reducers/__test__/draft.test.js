import reducer, { emptyDraft, forceType } from "../draft";
import {
  editSet,
  updateSet,
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

  it("force types", () => {
    const weightExpected = 12.5;
    const repsExpected = 10;

    const weight = forceType("weight", "12.5");
    const reps = forceType("reps", "10");

    expect(weight).toEqual(weightExpected);
    expect(reps).toEqual(repsExpected);
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

  describe("new set", () => {
    it("resets draft to initial state when set is created", () => {
      const currentState = { a: "draft" };
      const expected = emptyDraft();
      delete expected.id;

      const action = createSet({ what: "ever" });
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

  describe("edit set", () => {
    it("imports an existing set", () => {
      const currentState = emptyDraft();
      const values = {
        id: "abc123",
        exercise: "skriva kod",
        weight: 111,
        reps: 6,
        isWarmup: true,
        doneAt: "2006-06-06"
      };
      const expected = { ...currentState, ...values };

      const action = editSet(values);
      const newState = reducer(currentState, action);

      expect(newState).toEqual(expected);
    });
  });

  describe("update set", () => {
    it("resets draft draft to initial state when updated set is saved", () => {
      const currentState = { a: "draft" };
      const expected = emptyDraft();
      delete expected.id;

      const action = updateSet({ what: "ever" });
      const newState = reducer(currentState, action);
      delete newState.id;

      expect(newState).toEqual(expected);
    });
  });
});
