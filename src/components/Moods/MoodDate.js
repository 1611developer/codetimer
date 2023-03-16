import "./MoodDate.css";

const MoodDate = (props) => {
  // const currentDate = new Date();
  // const cDay = props.currentDate.getDate();
  // const cMonth = props.currentDate.getMonth() + 1;
  // const cYear = props.currentDate.getFullYear();
  // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // const wDay = weekday[props.currentDate.getDay()];
  // const options = {
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     hour12: true
  //   };
  // const time = new Intl.DateTimeFormat('en-US', options).format(currentDate)

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const wDay = weekday[props.date.getDay()];
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", options).format(props.date);

  return (
    <div className="mood-date">
      <div className="mood-date__year">{wDay}</div>
      <div className="mood-date__month">{month}, {day}</div>
      <div className="mood-date__year">{year}</div>
      <div className="mood-date__year">{time}</div>
    </div>
  );
}

export default MoodDate;
