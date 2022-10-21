import Button from "../ui/Button";
import classes from "./EventSearch.module.css";

const EventSearch = () => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year">
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month">
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
