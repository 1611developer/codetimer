import SessionItem from './SessionItem'
import './Sessions.css'
import Card from '../UI/Card'

const Sessions = (props) => {
  return (
    <Card className='sessions'>
      <SessionItem
        date={props.items[0].date}
        session={props.items[0].session}
      />
      <SessionItem
        date={props.items[1].date}
        session={props.items[1].session}
      />
      <SessionItem
        date={props.items[2].date}
        session={props.items[2].session}
      />
      <SessionItem
        date={props.items[3].date}
        session={props.items[3].session}
      />
      <SessionItem
        date={props.items[4].date}
        session={props.items[4].session}
      />
      <SessionItem
        date={props.items[5].date}
        session={props.items[5].session}
      />
      <SessionItem
        date={props.items[6].date}
        session={props.items[6].session}
      />
      <SessionItem
        date={props.items[7].date}
        session={props.items[7].session}
      />
      <SessionItem
        date={props.items[8].date}
        session={props.items[8].session}
      />
    </Card>
  )
}

export default Sessions
