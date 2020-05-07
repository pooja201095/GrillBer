import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OrderCard(props) {
  const classes = useStyles();
  const {order} = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Order Id: {order.id}
        </Typography>
        <Typography variant="h5" component="h2">
         Product: {order.grill.name}
        </Typography>
        <br></br>
        <Typography className={classes.pos} color="textSecondary">
        Booking Info:
        <br></br>
          From Date: {order.fromDate} {order.fromTime}
          <br></br>
          ToDate: {order.toDate} {order.toTime}
        </Typography>
        <Typography variant="body2" component="p">
          Total amount paid: {order.totalAmount}
        </Typography>
      </CardContent>
    </Card>
  );
}
