import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getTickets = createAsyncThunk('getTickets', async () => {
  const resId = await fetch('https://aviasales-test-api.kata.academy/search')
  const id = await resId.json()
  const res = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id.searchId}`)
  console.log(res)
  const tickets = await res.json()
  console.log(tickets)
  return tickets
})

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload
      })
      .addCase(getTickets.pending, () => {
        console.log(123)
      })
      .addCase(getTickets.rejected, () => {
        console.log('sus')
      })
  },
})

export default ticketSlice.reducer
