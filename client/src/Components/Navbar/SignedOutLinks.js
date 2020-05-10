import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    btn: {
        backgroundColor:'burlywood',
        margin:'5px',
        "&:hover": {
            backgroundColor: "brown",
            color: "white",
          },
    },
    link:{
        color:'black',
        textDecoration: 'none'
    }
  }));

export default function SignedOutLinks() {
    const classes = useStyles();
    return (
        <div>
            <Link to="/signin" className={classes.link}>
                <Button color="inherit" className={classes.btn} >
                    Sign in
    </Button>
            </Link>
            <Link to="/signup" className={classes.link}>
                <Button color="inherit" className={classes.btn}>
                    Sign Up
   </Button>
            </Link>
        </div>
    );
}