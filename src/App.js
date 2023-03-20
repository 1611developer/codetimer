import Sessions from "./components/Sessions/Sessions";
import NewSession from "./components/NewSession/NewSession";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const sessions = [
    {
      id: "1",
      date: new Date(),
      session: "4.34",
    },
    {
      id: "2",
      date: new Date(),
      session: "2.50",
    },
    {
      id: "3",
      date: new Date(),
      session: "6.34",
    },
    {
      id: "4",
      date: new Date(),
      session: "1.42",
    },
    {
      id: "5",
      date: new Date(),
      session: "8.45",
    },
    {
      id: "6",
      date: new Date(),
      session: "4.11",
    },
    {
      id: "7",
      date: new Date(),
      session: "5",
    },
    {
      id: "8",
      date: new Date(),
      session: "1.23",
    },
    {
      id: "9",
      date: new Date(),
      session: "5.23",
    },
  ];


  return (
    <div>
       <div><h1>CodeTimer.io</h1></div>
       <h1>
       <Stopwatch />
      
      </h1>
       
      {/* <Stopwatch /> */}
      <NewSession />
      <Sessions items={sessions} />
    </div>
  );
  
};

export default App;
