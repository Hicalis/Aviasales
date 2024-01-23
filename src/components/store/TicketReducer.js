import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchId = createAsyncThunk('fetchId', async function () {
  const response = await fetch('https://front-test.dev.aviasales.ru/search')
  const data = await response.json()
  console.log(12)
  return data
})

export const fetchTickets = createAsyncThunk('fetchTickets', async function (_, thunkAPI) {
  const id = await thunkAPI.dispatch(fetchId())
  const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id.payload}`)
  const data = await response.json()
  console.log(123)
  return data
})

// const ticketSlice = createSlice({
//   name: 'tickets',
//   initialState: {
//     tickets: [],
//     status: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchTickets.pending]: (state) => {
//       state.status = 'loading'
//       state.error = null
//     },
//     [fetchTickets.fulfilled]: (state, action) => {
//       state.status = 'resolved'
//       state.tickets = action.playload
//     },
//     [fetchTickets.rejected]: (state, action) => {},
//   },
// })

// export default ticketSlice.reducer
