import { useRef } from "react";
import Button from "../ui/button";
import classes from "./css/eventsearch.module.css";

const EventSearch = (props) => {
  const refYr = useRef();
  const refMnt = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const choosenYr = refYr.current.value;
    const choosenMnth = refMnt.current.value;

    props.onSearch(choosenYr, choosenMnth);
  };
  return (
    <div>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            <select ref={refYr} id="year">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select ref={refMnt} id="month">
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">Aug</option>
              <option value="9">Sept</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dev</option>
            </select>
          </div>
        </div>
        <Button>Find Event</Button>
      </form>
    </div>
  );
};

export default EventSearch;
