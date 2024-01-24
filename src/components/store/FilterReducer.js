import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAll: false,
  isWithout: false,
  isOne: false,
  isTwo: false,
  isThree: false,
}

// export const FilterReducer = (state = defaultStore, action) => {
// switch (action.type) {
// case 'FILTER_ALL':
// if (state.isAll) {
// return { isAll: false, isWithout: false, isOne: false, isTwo: false, isThree: false }
// } else {
// return { isAll: true, isWithout: true, isOne: true, isTwo: true, isThree: true }
// }
// case 'FILTER_WITHOUT': {
// if (state.isAll && state.isWithout) {
// return { ...state, isAll: false, isWithout: false }
// } else if (state.isOne && state.isTwo && state.isThree && !state.isWithout) {
// return { ...state, isAll: true, isWithout: true }
// } else {
// return { ...state, isWithout: !state.isWithout }
// }
// }
// case 'FILTER_ONE': {
// if (state.isAll && state.isOne) {
// return { ...state, isAll: false, isOne: false }
// } else if (state.isWithout && state.isTwo && state.isThree && !state.isOne) {
// return { ...state, isAll: true, isOne: true }
// } else {
// return { ...state, isOne: !state.isOne }
// }
// }
// case 'FILTER_TWO': {
// if (state.isAll && state.isTwo) {
// return { ...state, isAll: false, isTwo: false }
// } else if (state.isWithout && state.isOne && state.isThree && !state.isTwo) {
// return { ...state, isAll: true, isTwo: true }
// } else {
// return { ...state, isTwo: !state.isTwo }
// }
// }
// case 'FILTER_THREE': {
// if (state.isAll && state.isTwo) {
// return { ...state, isAll: false, isThree: false }
// } else if (state.isWithout && state.isOne && state.isTwo && !state.isThree) {
// return { ...state, isAll: true, isThree: true }
// } else {
// return { ...state, isThree: !state.isThree }
// }
// }
// default:
// return state
// }
// }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAll: (state) => {
      if (state.isAll) {
        state.isAll = false
        state.isWithout = false
        state.isOne = false
        state.isTwo = false
        state.isThree = false
      } else {
        state.isAll = true
        state.isWithout = true
        state.isOne = true
        state.isTwo = true
        state.isThree = true
      }
    },
  },
  fastest: (state) => {
    state.isCheapest = false
    state.isFastest = true
  },
})

export const { filterAll, fastest } = filterSlice.actions
export default filterSlice.reducer
