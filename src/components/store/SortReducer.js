const defaultStore = {
  isCheapest: true,
  isFastest: false,
}

export const SortReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case 'SORT_CHEAPEST':
      return { isCheapest: true, isFastest: false }
    case 'SORT_FASTEST':
      return { isCheapest: false, isFastest: true }
    default:
      return state
  }
}
