import reducer from "../current-view";
import { setCurrentView, editSet, updateSet } from "../../actions";

describe("currentView", () => {
  it("returns initial state", () => {
    const initialState = reducer(undefined, { type: "dummyAction" });

    expect(initialState).toEqual("new");
  });

  it("sets current view", () => {
    const currentState = "new";

    const action = setCurrentView("history");
    const newState = reducer(currentState, action);

    expect(newState).toBe("history");
  });

  it("does nothing when given bad payload", () => {
    const currentState = "history";

    const action = setCurrentView("nangiala");
    const newState = reducer(currentState, action);

    expect(newState).toBe("history");
  });

  it("shows form when a set is edited", () => {
    const currentState = "history";

    const action = editSet({ whatever: true });
    const newState = reducer(currentState, action);

    expect(newState).toBe("edit");
  });

  it("shows history when a set is saved", () => {
    const currentState = "new";

    const action = updateSet({ whatever: true });
    const newState = reducer(currentState, action);

    expect(newState).toBe("history");
  });
});
