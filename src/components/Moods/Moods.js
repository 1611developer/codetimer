import MoodItem from './MoodItem';
import "./Moods.css";
import Card from '../UI/Card';

const Moods = (props) => {

  return (
      <Card className="moods">
        <h1>Emogeez</h1>
        <MoodItem
            date={props.items[0].date}
            mood={props.items[0].mood}
        />
        <MoodItem
            date={props.items[1].date}
            mood={props.items[1].mood}
        />
        <MoodItem
            date={props.items[2].date}
            mood={props.items[2].mood}
        />
        <MoodItem
            date={props.items[3].date}
            mood={props.items[3].mood}
        />
        <MoodItem
            date={props.items[4].date}
            mood={props.items[4].mood}
        />
        <MoodItem
            date={props.items[5].date}
            mood={props.items[5].mood}
        />
        <MoodItem
            date={props.items[6].date}
            mood={props.items[6].mood}
        />
        <MoodItem
            date={props.items[7].date}
            mood={props.items[7].mood}
        />
        <MoodItem
            date={props.items[8].date}
            mood={props.items[8].mood}
        />
      </Card>
  );
}

export default Moods;