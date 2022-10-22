import { useRef } from "react";
import { useRouter } from "next/router";

import Button from "../ui/Button";
import classes from "./EventSearch.module.css";

const EventSearch = () => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();

    const year = yearInputRef.current.value;
    const month = monthInputRef.current.value;

    router.push(`/events/${year}/${month}`);
    // pretty less intuitive and awkward to write this here
    // I'm gonna leave it here but a better way would be to put the router.push inside a
    // function and add a prop like onRedirect and execute the function with the values.
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={monthInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
