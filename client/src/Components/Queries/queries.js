import {gql} from 'apollo-boost';

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

const addUser = gql`
mutation($name: String!, $email: String!) {
    addUser(name: $name,email: $email){
      id,
      name,
      email
    }
  }
`;

const getProfileInfo = gql`
query UserByEmail($email: String!) {
    userByEmail(email: $email) {
      name,
      email
    }
  }
`;

const getOrders = gql`
query($userId: ID!) {
    reservationByUserID(userId: $userId) {
      id,
    grill{
      name,
      description,
      price
    },
    fromDate,
    toDate,
    fromTime,
    toTime,
    totalAmount
    }
  }
`;

const getReservationsQuery = gql`
{
  reservations{
    id,
    userId,
    grillId,
    fromDate,
    toDate,
    fromTime,
    toTime,
    totalAmount
  }
}
`;

export {getGrillQuery,addUser,getReservationsQuery,getOrders,getProfileInfo};