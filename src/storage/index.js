const ITEM_NAME = 'BBB'

const localStorageMiddleware = ({getState}) => {
  return next => action => {
    const result = next(action)
    localStorage.setItem(ITEM_NAME, JSON.stringify(getState()))
    return result
  }
}

export const reHydrateStore = () => {
  if (localStorage.getItem(ITEM_NAME) !== null) {
    return JSON.parse(localStorage.getItem(ITEM_NAME))
  }
}

export default localStorageMiddleware