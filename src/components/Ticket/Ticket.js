import classes from './Ticket.module.scss'
import img from './S7 Logo.png'

function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes['top']}>
        <h1>13400 Р</h1>
        <img src={img}></img>
      </div>
      <div className={classes['info']}>
        <div className={classes['first']}>
          <div className={classes['info_route']}>
            <h2>MOW – HKT</h2>
            <h3>10:45 – 08:00</h3>
          </div>
          <div className={classes['info_length']}>
            <h2>В пути</h2>
            <h3>21ч 15м</h3>
          </div>
          <div className={classes['info_stops']}>
            <h2>2 пересадки</h2>
            <h3>HKG, JNB</h3>
          </div>
        </div>
        <div className={classes['second']}>
          <div className={classes['info_route']}>
            <h2>MOW – HKT</h2>
            <h3>10:45 – 08:00</h3>
          </div>
          <div className={classes['info_length']}>
            <h2>В пути</h2>
            <h3>21ч 15м</h3>
          </div>
          <div className={classes['info_stops']}>
            <h2>2 пересадки</h2>
            <h3>HKG, JNB</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ticket
