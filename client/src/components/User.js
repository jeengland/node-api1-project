import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled'

const UserDiv = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    margin: 2% auto;
    padding: 1%;
    width: 45%;
    background-color: papayawhip;
    .buttonRow {
        button {
            margin: 1%;
        }
    }
`

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
        <UserDiv>
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className='buttonRow'>
                <button type='button' onClick={deleteUser}>Delete User</button>
                <button type='button' onClick={editUser}>Edit User</button>
            </div>
        </UserDiv>
    )
}

export default User;