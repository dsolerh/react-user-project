import { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';
import UserData from './types/user';

function App() {
  const [users, setUsers] = useState<UserData[]>([])
  return (
    <div>
      <AddUser onAddNewUser={u=>setUsers(prev=>[...prev, u])}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
