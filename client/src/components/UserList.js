import React from 'react';

const UserList = ({ data }) => {
    return (
        <section className='container'>
            { data.map((user) => {
                return (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.bio}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default UserList;