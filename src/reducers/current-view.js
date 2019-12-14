import { SET_CURRENT_VIEW, EDIT_SET, UPDATE_SET } from "../actions";

const availableRoutes = ["new", "history", "1rm", "edit"];
const defaultRoute = availableRoutes[0];

export default (currentState = defaultRoute, action) => {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      const { slug } = action.payload;
      return availableRoutes.find(ar => ar === slug) ? slug : currentState;
    case EDIT_SET:
      return availableRoutes[3];
    case UPDATE_SET:
      return availableRoutes[1];
    default:
      return currentState;
  }
};
