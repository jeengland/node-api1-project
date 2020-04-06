import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  const [data, setData] = useState([]);
  const [edited, setEdited] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users/')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className="App">
      { Object.keys(edited).length 
        ? <EditUser id={edited.id} initialBio={edited.bio} initialName={edited.name} setData={setData} setEdited={setEdited} />
        : <AddUser setData={setData}/> }
      <UserList data={data} setData={setData} setEdited={setEdited}/>
    </div>
  );
}

export default App;
