import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Backgroundimg from '../../assets/grill.jpg';
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import { getProfileInfo } from '../Queries/queries';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    justifyContent:'center'
  },
  image: {
    backgroundImage: `url(${Backgroundimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  field:{
      display:'flex',
      margin:'20px'
  }
}));

function Profile(props) {
  const classes = useStyles();
  const {auth} = props;
  const currentUserEmail = "pooja@grillber.com";
  const {loading,error,data} = useQuery(getProfileInfo,{
    variables: { currentUserEmail },
  });
  console.log(loading,error,data);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <AccountCircleIcon style={{ fontSize: 100 }} />
          <Typography className={classes.field} component="h1" variant="h5">
            Profile Info
          </Typography>
          <form className={classes.form} noValidate>
          <Typography className={classes.field}>
            Name: 
          </Typography>
          <Divider></Divider>
          <Typography className={classes.field}>
            Contact Number:
          </Typography>
          <Divider></Divider>
          <Typography className={classes.field}>
            Gender:
          </Typography>
          <Divider></Divider>
          <Typography className={classes.field}>
            Email
          </Typography>
          <Divider></Divider>
          <Typography className={classes.field}>
            Saved Address:
          </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update Info
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = (state) =>{
  console.log(state);
  return {
     auth:state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Profile);