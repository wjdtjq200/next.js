import { users } from '../../data';

const User = ({ userData }) => {
  return (
    // <div className='users'>
    //   <p>{userData.name}</p>
    //   <p>{userData.username}</p>
    //   <p>{userData.email}</p>
    //   <p>{userData.phone}</p>
    //   <p>{userData.website}</p>
    //   <p>{userData.name}</p>
    // </div>

    <table className='users'>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
      </tr>
      <tr key={userData.id}>
        <td>{userData.name}</td>
        <td>{userData.username}</td>
        <td>{userData.email}</td>
        <td>{userData.phone}</td>
        <td>{userData.website}</td>
        <td>{userData.company}</td>
      </tr>
    </table>
  );
};

export const getStaticPaths = async () => {
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const userId = params.id;
  const user = users.filter((user) => user.id.toString() === userId);
  return {
    props: {
      userData: user[0],
    },
  };
};

export default User;
