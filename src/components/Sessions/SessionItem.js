import React, { useState } from 'react';

import SessionDate from './SessionDate';
import "./SessionItem.css";
import Card from '../UI/Card';

const SessionItem = (props) => {
  // function clickHandler() {}

  // array destructuring
  //session = current state value
  // setSession = a function for updating that value
  const [session, setSession] = useState(props.session);

  const clickHandler = () => {
    setSession('Updated');
    console.log(session);
  };

  return (
    <Card className="session-item">
      <div className="session-item__description">
        <SessionDate date={props.date} />
        <div className="session-item__time">{session} hours</div> 
      </div>
      <button onClick={clickHandler}>Change Session</button>
    </Card>
  );
}

export default SessionItem;
