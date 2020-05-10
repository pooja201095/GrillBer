import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import { Divider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Link } from "react-router-dom";
import {addReservation} from '../Queries/queries';
import { useMutation } from '@apollo/react-hooks';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: "#ffb100",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    border: "1px solid #ffb100",
    color: "#fff",
    marginLeft: "5px",
    backgroundColor: "#ffb100",
    fontWeight: 700,
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
    },
  },
  orderPlaced: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#ffb100",
  },
  link:{
    textDecoration: 'none'
  },
  orderSuccessContainer:{
    minHeight: '75vh'
  }
}));

function CheckoutForm(props) {
  const classes = useStyles();
  const {auth,itemsInCart} = props;
  const [addReservationToMongo] = useMutation(addReservation);

  const initialFormData = {};

  const [formData, updateFormData] = React.useState(initialFormData);
  const [orderPlaced, setOrderPlaced] = React.useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    itemsInCart.forEach(async(item)=>{
    var response = await addReservationToMongo({variables: { 
    userId:auth.uid,
    grillId:item.id,
    fromDate:item.fromDate,
    toDate:item.toDate,
    fromTime:item.fromTime,
    toTime:item.toTime,
    totalAmount:item.price.toString() } });
    console.log(response);
    });
    setOrderPlaced(true);
  };

  return (
    <>
      <div className="orderSuccessContainer">
        {orderPlaced ? (
          <Grid
            item
            component={Paper}
            elevation={6}
            square
            className={classes.orderPlaced}
          >
            <div className={classes.orderPlaced}>
              <Typography variant="h5" component="p">
                Order Placed Successfully .
              </Typography>
              <Link to="/orders" className={classes.link}>
                <Typography variant="h6" color="textSecondary">
                  Goto my Orders
                </Typography>
              </Link>
            </div>
          </Grid>
        ) : (
          <Grid
            container
            component="main"
            justify="center"
            className={classes.root}
          >
            <CssBaseline />

            <Grid item component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Checkout
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        value="Mr. Dummy"
                        autoFocus
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value="Dum"
                        autoComplete="lname"
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            /> */}
                  <TextField
                    autoComplete="address"
                    name="address"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    value="#007 Dummy Apartment"
                    autoFocus
                    onChange={handleChange}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="country"
                        name="country"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="country"
                        label="Country"
                        value="India"
                        autoFocus
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="state"
                        name="state"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="state"
                        label="State"
                        value="Karnataka"
                        autoFocus
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="Shipping address is the same as my billing address."
                      />
                    </Grid>
                  </Grid>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Payment Method</FormLabel>
                    <RadioGroup
                      aria-label="payment Method"
                      name="Payment Method"
                      // value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="debitCard"
                        control={<Radio />}
                        label="Debit Card"
                        checked
                      />
                      <FormControlLabel
                        value="creditCard"
                        control={<Radio />}
                        label="Credit Card"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="nameoncard"
                        name="NameOnCard"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="NameOnCard"
                        label="Name on card"
                        value="MR DUMMY DUM"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="creditcardnumber"
                        name="CreditCardNumber"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="creditCardNumber"
                        value="3458-3458-3458-3458"
                        label="Credit Card Number"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="expiration"
                        name="expiration"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="expiration"
                        label="Expiration"
                        value="10/2022"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="CVV"
                        name="CVV"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="CVV"
                        label="CVV"
                        value="369"
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    // color="primary"
                    className={classes.button}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Place Order!
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth,
    itemsInCart:
      (state.cart && state.cart.cart && state.cart.cart.itemsInCart) || {},
    totalAmount:
      (state.cart && state.cart.cart && state.cart.cart.totalAmount) || 0,
  };
};

export default connect(mapStateToProps)(CheckoutForm);