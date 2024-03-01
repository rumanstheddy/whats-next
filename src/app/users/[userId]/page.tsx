const UserDetails = ({ params }: { params: { userId: string } }) => (
  <h1>Hey! User {params.userId}</h1>
);

export default UserDetails;
