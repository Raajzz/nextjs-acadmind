import EventItem from "./EventItem";
import classes from "./FeaturedEventList.module.css";

const FeaturedEventList = ({ props }) => {
  return (
    <ul className={classes.list}>
      {props.map((data) => {
        return data.isFeatured ? <EventItem key={data.id} props={data} /> : "";
      })}
    </ul>
  );
};

export default FeaturedEventList;
