import React from 'react';
import axios from 'axios';

const User = ({name, bio, id, setData}) => {
    const deleteUser = (event) => {
        axios
            .delete(`http://localhost:5000/api/users/${id}`)
            .then((response) => setData(response.data))
            .catch((error) => console.error(error))
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
            <button type='button' onClick={deleteUser}>Delete User</button>
        </div>
    )
}

export default User;