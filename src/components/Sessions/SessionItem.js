import SessionDate from './SessionDate';
import "./SessionItem.css";
import Card from '../UI/Card';

const SessionItem = (props) => {

  return (
    <Card className="session-item">
      <div className="session-item__description">
        <SessionDate date={props.date} />
        <div className="session-item__time">{props.session} hours</div> 
      </div>
    </Card>
  );
}

export default SessionItem;
