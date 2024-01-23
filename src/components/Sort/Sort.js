import { useDispatch, useSelector } from 'react-redux'

import classes from './Sort.module.scss'

function Sort() {
  const dispatch = useDispatch()
  const isCheapest = useSelector((state) => state.sort.isCheapest)
  const isFastest = useSelector((state) => state.sort.isFastest)

  const sortCheapest = () => {
    dispatch({ type: 'SORT_CHEAPEST' })
  }
  const sortFastest = () => {
    dispatch({ type: 'SORT_FASTEST' })
  }

  return (
    <div className={classes.sort}>
      <button
        className={classes[`${isCheapest ? 'active_first' : 'btn_first'}`]}
        onClick={() => {
          sortCheapest()
        }}
      >
        Самый дешевый
      </button>
      <button
        className={classes[`${isFastest ? 'active_second' : 'btn_second'}`]}
        onClick={() => {
          sortFastest()
        }}
      >
        Самый быстрый
      </button>
    </div>
  )
}
export default Sort
