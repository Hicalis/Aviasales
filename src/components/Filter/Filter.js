import { useDispatch, useSelector } from 'react-redux'

import classes from './Filter.module.scss'

function Filter() {
  const dispatch = useDispatch()
  const isAll = useSelector((state) => state.filter.isAll)
  const isWithout = useSelector((state) => state.filter.isWithout)
  const isOne = useSelector((state) => state.filter.isOne)
  const isTwo = useSelector((state) => state.filter.isTwo)
  const isThree = useSelector((state) => state.filter.isThree)

  const filterAll = () => {
    dispatch({ type: 'FILTER_ALL' })
  }
  const filterWithout = () => {
    dispatch({ type: 'FILTER_WITHOUT' })
  }
  const filterOne = () => {
    dispatch({ type: 'FILTER_ONE' })
  }
  const filterTwo = () => {
    dispatch({ type: 'FILTER_TWO' })
  }
  const filterThree = () => {
    dispatch({ type: 'FILTER_THREE' })
  }

  return (
    <div className={classes.filter}>
      <h1>Количество пересадок</h1>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <input
            type="checkbox"
            checked={isAll}
            onChange={() => {
              filterAll()
            }}
          />
          <h2>Все</h2>
        </label>
      </div>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <input
            type="checkbox"
            checked={isWithout}
            onChange={() => {
              filterWithout()
            }}
          />
          <h2>Без пересадок</h2>
        </label>
      </div>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <input
            type="checkbox"
            checked={isOne}
            onChange={() => {
              filterOne()
            }}
          />
          <h2>1 пересадка</h2>
        </label>
      </div>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <input
            type="checkbox"
            checked={isTwo}
            onChange={() => {
              filterTwo()
            }}
          />
          <h2>2 пересадки</h2>
        </label>
      </div>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <input
            type="checkbox"
            checked={isThree}
            onChange={() => {
              filterThree()
            }}
          />
          <h2>3 пересадки</h2>
        </label>
      </div>
    </div>
  )
}
export default Filter
