import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AuthInterface from './Components/Auth/AuthInterface';
import HomePage from './Components/HomePage';
import NavBar from './Components/Navbar/Navbar';
import StickyFooter from './Components/Navbar/Footer';
import { makeStyles } from '@material-ui/core/styles';
import PDP from './Components/PDP/PDP';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Router>
        <NavBar/>
      <Route path="/" exact component={HomePage}/>
      <Route path="/signin" render={(props)=><AuthInterface {...props} mode="signin"/>} />
      <Route path="/signup" render={(props)=><AuthInterface {...props} mode="signup"/>} />
      <Route path="/bbq" exact render={(props)=><PDP {...props}/>}/>
      <StickyFooter/>
  </Router>
    </div>
  );
}

export default App;
