import gql from 'graphql-tag';

export default gql`
mutation addUser(  $id:String!,$name:String!,$email:String!,$number:String!,$gender:String!,$password:String!,$createdAt:String!,$type:String!){
  addUser(
    id:$id,
    name:$name,
		email:$email,
		number:$number,
    gender:$gender,
		password:$password,
		createdAt:$createdAt,
		type:$type
  ){
    id
    name
    email
    number
    gender
    password
    createdAt
    type
  }
}`;
