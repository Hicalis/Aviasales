import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../Ticket/Ticket'

import { getTickets } from '../store/TicketReducer'

import classes from './TicketList.module.scss'

function TicketList() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.getTickets.tickets)

  console.log(tickets)

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  return (
    <div className={classes.TicketList}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button className={classes['btn_more']}>Показать еще 5 билетов!</button>
    </div>
  )
}
export default TicketList
