export const UPDATE_DRAFT = 'UPDATE_DRAFT'
export const CREATE_SET = 'CREATE_SET'
export const DROP_SET = 'DROP_SET'

export const updateDraft = (attr, value) => ({
  type: UPDATE_DRAFT,
  payload: {
    attr,
    value,
  }
})

export const createSet = draft => ({
  type: CREATE_SET,
  payload: {
    draft,
  }
})

export const dropSet = id => ({
  type: DROP_SET,
  payload: {
    id,
  }
})