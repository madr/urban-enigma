const some = (state = [], action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      const { id } = action.payload;
      return [
        ...state,
        { id }
      ]
    default:
      return state
  }
}

export default some