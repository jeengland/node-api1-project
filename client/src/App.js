import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users/')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className="App">
      <AddUser setData={setData}/>
      <UserList data={data} setData={setData}/>
    </div>
  );
}

export default App;
