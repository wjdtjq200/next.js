import { users } from '../../data';

const Users = ({ usersList }) => {
  return (
    <table className='users'>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
      </tr>
      {usersList.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.company}</td>
        </tr>
      ))}
    </table>

    // {
    //   id: 2,
    //   name: 'Ervin Howell',
    //   username: 'Antonette',
    //   email: 'Shanna@melissa.tv',
    //   phone: '010-692-6593 x09125',
    //   website: 'anastasia.net',
    //   company: 'Deckow-Crist',
    // },
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      usersList: users,
    },
  };
};

export default Users;
