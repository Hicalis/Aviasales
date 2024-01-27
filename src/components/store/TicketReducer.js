import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getId = createAsyncThunk('getId', async () => {
  const resId = await fetch('https://aviasales-test-api.kata.academy/search')
  const id = await resId.json()
  return id
})

export const getTickets = createAsyncThunk('getTickets', async (id) => {
  // const resId = await fetch('https://aviasales-test-api.kata.academy/search')
  // const id = await resId.json()
  const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
  const tickets = await res.json()
  return tickets
})

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    status: null,
    error: null,
    id: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.fulfilled, (state, action) => {
        // state.tickets.push (action.payload)
        if (action.payload.stop === 'false') {
          getTickets()
        }
      })
      .addCase(getTickets.pending, () => {})
      .addCase(getTickets.rejected, () => {
        getTickets()
      })
      .addCase(getId.fulfilled, (state, action) => {
        state.id = action.payload
      })
  },
})

export default ticketSlice.reducer
