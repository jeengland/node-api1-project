import React, { useState } from 'react';
import axios from 'axios';

const EditUser = ({id, initialBio, initialName, setData, setEdited}) => {
    const [state, setState] = useState({ name: initialName, bio: initialBio })
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`http://localhost:5000/api/users/${id}`, state)
            .then((response) => setData(response.data))
            .catch((error) => console.error(error));
        setState({ name: '', bio: '' })
        setEdited({});
    } 
    return (
        <form onSubmit={handleSubmit}>
            <div className='formRow'>
                <label htmlFor='newName'>Name:</label>
                <input type='text' name='name' id='name' value={state.name} onChange={handleChange} />
            </div>
            <div className='formRow'>
                <label htmlFor='newBio'>Bio:</label>
                <input type='text' name='bio' id='bio' value={state.bio} onChange={handleChange} />
            </div>
            <button type='submit'>Edit User</button>
        </form>
    )
}

export default EditUser;