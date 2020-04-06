import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Form = styled.form`
    width: 400px;
    background-color: papayawhip;
    margin: 0 auto;
    padding: 1%;
    border: 1px solid black;
    border-radius: 5px;
    .formRow {
        label {
            display: inline-block;
            width: 15%;
            text-align: right;
            margin: 1% 5px 2% 0;
        }
    }
`

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
        <Form onSubmit={handleSubmit}>
            <div className='formRow'>
                <label htmlFor='newName'>Name:</label>
                <input type='text' name='name' id='name' value={state.name} onChange={handleChange} />
            </div>
            <div className='formRow'>
                <label htmlFor='newBio'>Bio:</label>
                <input type='text' name='bio' id='bio' value={state.bio} onChange={handleChange} />
            </div>
            <button type='submit'>Submit Edit</button>
        </Form>
    )
}

export default EditUser;