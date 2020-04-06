import React from 'react';
import axios from 'axios';

import User from './User';

const UserList = ({ data, setData }) => {
    return (
        <section className='container'>
            { data.map((user, index) => {
                return (
                    <User key={index} name={user.name} bio={user.bio} id={user.id} setData={setData} />
                )
            })}
        </section>
    )
}

export default UserList;