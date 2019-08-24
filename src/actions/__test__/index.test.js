import * as actions from "../index";

describe("action creators", () => {
  describe("UPDATE_DRAFT", () => {
    it("puts attr and value to payload", () => {
      const attr = "abc";
      const value = "123";
      const expected = { type: actions.UPDATE_DRAFT, payload: { attr, value } };

      const action = actions.updateDraft(attr, value);

      expect(action).toEqual(expected);
    });
  });

  describe("CREATE_SET", () => {
    it("puts draft object as payload", () => {
      const draft = { thing: "abc", anotherThing: "123" };
      const expected = { type: actions.CREATE_SET, payload: { draft } };

      const action = actions.createSet(draft);

      expect(action).toEqual(expected);
    });
  });

  describe("DROP_SET", () => {
    it("puts id as payload", () => {
      const id = "abc";
      const expected = { type: actions.DROP_SET, payload: { id } };

      const action = actions.dropSet(id);

      expect(action).toEqual(expected);
    });
  });

  describe("SET_CURRENT_VIEW", () => {
    it("puts routing key (slug) as payload", () => {
      const slug = "q1w2e3r4";
      const expected = { type: actions.SET_CURRENT_VIEW, payload: { slug } };

      const action = actions.setCurrentView(slug);

      expect(action).toEqual(expected);
    });
  });

  describe("COLLAPSE_WORKOUT", () => {
    it("uses doneAt date as payload", () => {
      const doneAt = "2006-06-06";
      const expected = { type: actions.COLLAPSE_WORKOUT, payload: { doneAt } };

      const action = actions.collapseWorkout(doneAt);

      expect(action).toEqual(expected);
    });
  });

  describe("FOLD_WORKOUT", () => {
    it("uses doneAt date as payload", () => {
      const doneAt = "2006-06-06";
      const expected = { type: actions.FOLD_WORKOUT, payload: { doneAt } };

      const action = actions.foldWorkout(doneAt);

      expect(action).toEqual(expected);
    });
  });
});
