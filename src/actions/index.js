export const UPDATE_DRAFT = "UPDATE_DRAFT";
export const CREATE_SET = "CREATE_SET";
export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const DROP_SET = "DROP_SET";
export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW";
export const COLLAPSE_WORKOUT = "COLLAPSE_WORKOUT";
export const FOLD_WORKOUT = "FOLD_WORKOUT";

export const updateDraft = (attr, value) => ({
  type: UPDATE_DRAFT,
  payload: {
    attr,
    value
  }
});

export const createSet = draft => ({
  type: CREATE_SET,
  payload: {
    draft
  }
});

export const dropSet = id => ({
  type: DROP_SET,
  payload: {
    id
  }
});

export const setCurrentView = slug => ({
  type: SET_CURRENT_VIEW,
  payload: {
    slug
  }
});

export const collapseWorkout = doneAt => ({
  type: COLLAPSE_WORKOUT,
  payload: {
    doneAt
  }
});

export const foldWorkout = doneAt => ({
  type: FOLD_WORKOUT,
  payload: {
    doneAt
  }
});

export const createWorkout = (name, doneAt) => ({
  type: CREATE_WORKOUT,
  payload: {
    name,
    doneAt
  }
});
