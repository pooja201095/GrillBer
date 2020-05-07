import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getGrillQuery = gql`
{
  grills{
    name,
    description,
    price,
    id
  }
}
`;


export const grillData = (data,error) => dispatch => {
    const {loading,error,data} = useQuery(getGrillQuery);
    console.log(data,error);
    if(error == undefined){
        dispatch({
            type:'FETCH_SUCCESS',data
        })
    } else {
        dispatch({
            type:'FETCH_ERROR', error
        })
    }
   
}