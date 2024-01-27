import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../Ticket/Ticket'

import { getId, getTickets } from '../store/TicketReducer'

import classes from './TicketList.module.scss'

function TicketList() {
  const dispatch = useDispatch()
  let tickets = useSelector((state) => state.getTickets.tickets.tickets)
  let id = useSelector((state) => state.getTickets.id.searchId)
  const isCheapest = useSelector((state) => state.sort.isCheapest)
  const isAll = useSelector((state) => state.filter.isAll)
  const isWithout = useSelector((state) => state.filter.isWithout)
  const isOne = useSelector((state) => state.filter.isOne)
  const isTwo = useSelector((state) => state.filter.isTwo)
  const isThree = useSelector((state) => state.filter.isThree)

  useEffect(() => {
    dispatch(getId())
    // dispatch(getTickets(id))
  }, [dispatch])

  useEffect(() => {
    if (id) {
      dispatch(getTickets(id))
    }
  }, [id, dispatch])

  console.log(id)
  console.log(tickets)

  let allTickets = []
  let key = 0
  let ticketsArr = []

  const [displayedTickets, setDisplayedTickets] = useState(5)

  const showMoreTickets = () => {
    setDisplayedTickets((prev) => prev + 5)
  }

  if (typeof tickets !== 'undefined') {
    tickets = tickets.slice(0, tickets.length)

    isCheapest
      ? tickets.sort((a, b) => a.price - b.price)
      : tickets.sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        )

    allTickets = tickets.slice(0, tickets.length)

    if (!isAll) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length <= 3)
    }

    if (!isWithout) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length !== 0)
    }

    if (!isOne) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length !== 1)
    }

    if (!isTwo) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length !== 2)
    }

    if (!isThree) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length !== 3)
    }

    if (!isAll && !isWithout && !isOne && !isTwo && !isThree) {
      allTickets = []
    }

    allTickets = allTickets.slice(0, displayedTickets)

    ticketsArr = allTickets.map((element) => {
      key += 1
      return <Ticket key={key} price={element.price} carrier={element.carrier} segments={element.segments} />
    })
  } else {
    ticketsArr = []
  }

  return (
    <div className={classes.TicketList}>
      {ticketsArr}
      <button className={classes['btn_more']} onClick={showMoreTickets}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
export default TicketList
