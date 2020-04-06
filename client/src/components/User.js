import React from 'react';
import axios from 'axios';

const User = ({ name, bio, id, setData, setEdited }) => {
    const deleteUser = () => {
        axios
            .delete(`http://localhost:5000/api/users/${id}`)
            .then((response) => setData(response.data))
            .catch((error) => console.error(error))
    }
    const editUser = () => {
        setEdited({
            name: name,
            bio: bio,
            id: id,
        })
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className='buttonRow'>
                <button type='button' onClick={deleteUser}>Delete User</button>
                <button type='button' onClick={editUser}>Edit User</button>
            </div>
        </div>
    )
}

export default User;