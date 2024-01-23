import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Ticket from '../Ticket/Ticket'
import { fetchId } from '../store/TicketReducer'

import classes from './TicketList.module.scss'

function TicketList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchId())
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
