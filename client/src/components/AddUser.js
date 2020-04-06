import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({setData}) => {
    const [state, setState] = useState({ name: '', bio: '' })
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/users', state)
            .then((response) => setData(response.data))
            .catch((error) => console.error(error));
        setState({ name: '', bio: '' })
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
            <button type='submit'>Add User</button>
        </form>
    )
}

export default AddUser;