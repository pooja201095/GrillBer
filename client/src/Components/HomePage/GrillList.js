import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GrillCard from './GrillCard';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core/';
import {getGrillQuery} from '../Queries/queries';

// import {graphql} from 'react-apollo';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin:'20px 40px'
    },
    centerGrid: {
        justifyContent:'center'
    }
  }));


function GrillList(props) {
    const classes = useStyles();
    const {loading,error,data} = useQuery(getGrillQuery);
    const displayGrills = () => {
        if(loading){
            return (<CircularProgress/>);
        }else if(error !== undefined){
          return (<h1 className={classes.centerGrid}>
            ERROR
          </h1>);
        } else {
          localStorage.setItem('Grills',JSON.stringify(data.grills));
            return data.grills.map(grill=>{
                return(<Grid key={grill.id} item xs={3}>
                    <GrillCard grill={grill}></GrillCard>
                </Grid>
                )
            });
        }
    }
            return (
              <div className={classes.root}>
                <Grid className={classes.centerGrid} container spacing={10}>
                  {displayGrills()}
                </Grid>
              </div>
            );
}



// const mapDispatchToProps = (dispatch) =>{
//   return {
//       grillData: (data,error) => dispatch(grillData(data,error))
//   }
// }

export default GrillList;
