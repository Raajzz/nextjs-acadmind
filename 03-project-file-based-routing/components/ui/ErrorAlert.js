import classes from "./ErrorAlert.module.css";

const ErrorAlert = (props) => {
  return (
    <>
      <div className={classes.error}>{props.children}</div>
    </>
  );
};

export default ErrorAlert;
