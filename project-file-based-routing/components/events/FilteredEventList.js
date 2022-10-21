import EventItem from "./EventItem";
import classes from "./FilteredEventList.module.css";

const FilteredEventList = ({ props }) => {
  return (
    <ul className={classes.list}>
      {props.map((data) => {
        return data.isFeatured ? <EventItem key={data.id} props={data} /> : "";
      })}
    </ul>
  );
};

export default FilteredEventList;
