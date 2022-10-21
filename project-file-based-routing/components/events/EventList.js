import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = ({ props }) => {
  return (
    <ul className={classes.list}>
      {props.map((data) => (
        <EventItem key={data.id} props={data} />
      ))}
    </ul>
  );
};

export default EventList;
