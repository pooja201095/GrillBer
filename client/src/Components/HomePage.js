import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import Backgroundimg from '../assets/grill.jpg';
import Divider from '@material-ui/core/Divider';
import GrillList from './GrillList';

const useStyles = makeStyles((theme) => ({
  p: {
    fontSize: '20px',
  },
  image: {
    height: '60vh',
    display: 'flex',
    marginBottom: '20px',
    backgroundImage: `url(${Backgroundimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    width: '50%',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: '0.7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid component="main" className={classes.image} >
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography>
            <h2>Throwing the best BBQ on the block has just become easier!</h2>
                <CheckCircleIcon fontSize='large' style={{ color: 'green' }} />
                <p className={classes.p}>Convinient</p>
                <p className={classes.p}>Affordable</p>
                <p className={classes.p}>Great Quality</p>
            <h1>You Ask!! We Deliver!!</h1>
          </Typography>
        </Paper>
      </Grid>
      <Divider variant="middle" />
      <GrillList />
    </React.Fragment>
  );
}
