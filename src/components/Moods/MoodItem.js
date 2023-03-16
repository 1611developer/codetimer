import MoodDate from './MoodDate';
import "./MoodItem.css";
import Card from '../UI/Card';

const MoodItem = (props) => {

  return (
    <Card className="mood-item">
      <div className="mood-item__description">
        <MoodDate date={props.date} />
        <div className="mood-item__emoji">{props.mood}</div> 
      </div>
    </Card>
  );
}

export default MoodItem;
