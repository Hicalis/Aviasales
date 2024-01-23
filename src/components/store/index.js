import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { FilterReducer } from './FilterReducer'
import { SortReducer } from './SortReducer'

const rootReducer = combineReducers({
  filter: FilterReducer,
  sort: SortReducer,
})

export const store = configureStore({ reducer: rootReducer })
