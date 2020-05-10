import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  withStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#111",
    height: "100%",
    minHeight: "550px",
    minWidth: "300px",
    maxWidth: "400px",
  },
  price: {
    color: "#ffb100",
  },
  text: {
    color: "#cec4c4",
  },
  container: {
    paddingTop: "20px",
  },
  checkboxLabel: {
    paddingTop: "20px",
    color: "#cec4c4",
    fontSize: "0.8rem",
  },
  button: {
    color: "#ffb100",
    border: "1px solid #ffb100",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#ffb100",
      borderColor: "#ffb100",
      color: "#000",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ffb100",
      color: "fff",
      borderColor: "#ffb100",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    }
  },
  link:{
      textDecoration: 'none'
  }
});

const GreenCheckbox = withStyles({
  root: {
    color: "#ffb100",
    "&$checked": {
      color: "#ffb100",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export function OrderSummary(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={3}
        direction="row"
        className={classes.container}
      >
        <Grid item>
          <Typography className={classes.text}>CART TOTAL</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="p" className={classes.price}>
            ${props.totalAmount}
          </Typography>
        </Grid>
        <Grid item className={classes.text}>
          <Typography variant="body2" component="p">
            Shipping & taxes calculated at Checkout
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <FormControlLabel
            control={
              <GreenCheckbox
                // checked={state.checkedG}
                // onChange={handleChange}
                name="checkedG"
              />
            }
            label="I Agree to Terms & conditions"
            className={classes.checkboxLabel}
          />
        </Grid>
        <Grid item>
          <Link to="/checkout" className={classes.link}>
            <Button
              variant="outlined"
              color="default"
              className={classes.button}
            >
              Checkout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}