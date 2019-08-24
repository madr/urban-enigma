import { SET_CURRENT_VIEW } from "../actions";

const availableRoutes = ["new", "history", "1rm"];
const defaultRoute = availableRoutes[0];

export default (currentState = defaultRoute, action) => {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      const { slug } = action.payload;
      return availableRoutes.find(ar => ar === slug) ? slug : currentState;
    default:
      return currentState;
  }
};
