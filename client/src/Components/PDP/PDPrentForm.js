import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: '5px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  btn: {
    margin: '0 10px'
  },
}));

export default function DateAndTimePickers(props) {
  const classes = useStyles();
  const date = new Date().toISOString().split('T')[0];
  const time = "07:30";

  const initialFormData = Object.freeze({
    fromDate: date,
    fromTime: time,
    toDate: date,
    toTime: time,
  });

  const [formData, updateFormData] = React.useState(initialFormData);
  
  useEffect(()=>{
    props.handleDates(formData);
  },[formData])

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  return (
    <form className={classes.container} noValidate>
      <div>
        <TextField
          id="fromDate"
          label="From Date"
          type="date"
          value={formData.fromDate}
          className={classes.textField}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="fromTime"
          label="From Time"
          type="time"
          value={formData.fromTime}
          className={classes.textField}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="toDate"
          label="To Date"
          type="date"
          value={formData.toDate}
          className={classes.textField}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="toTime"
          label="To Time"
          type="time"
          value={formData.toTime}
          className={classes.textField}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </form>
  );
}