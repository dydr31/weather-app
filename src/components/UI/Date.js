import './Date.scss'

const Date = (props) => {
  let day = "";
  day = props.time.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
  });

  let weekday = ''
  weekday = props.time.toLocaleString("en-US", { weekday: "long" });

  let isWeekend = false;
  if (weekday === "Saturday" || weekday === "Sunday") {
    isWeekend = true;
  }

  return (
    <div className="date">
      <p className="day">{props.text}{day}</p>
      <p className={` ${"weekday"} ${isWeekend ? "weekend" : ""}`}>{weekday}</p>
    </div>
  );
};

export default Date;
