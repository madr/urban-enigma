import reducer from "../current-view";
import { setCurrentView } from "../../actions";

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
});
