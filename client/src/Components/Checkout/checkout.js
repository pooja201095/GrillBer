import React, { Component } from "react";
import CheckoutForm from "./checkoutForm";
import { connect } from "react-redux";
import { Grid, CssBaseline } from "@material-ui/core";
import {Redirect} from 'react-router-dom';

const styles = {
  container: {
    padding: "10px",
    flexGrow: 1,
    minHeight: "81vh",
  },
};

class Checkout extends Component {
  render() {
    return (this.props.auth.uid ? <div style={styles.container}>
        <CssBaseline />
        <Grid container direction="row" justify="center">
          <Grid item xs={12} sm={7}>
            <CheckoutForm />
          </Grid>
        </Grid>
      </div>
    :
    <Redirect to='/'/> 
    );
  }
}

const mapStateToProps = (state) =>{
  return {
     auth:state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Checkout);