import React from 'react';
import styled from '@emotion/styled';

import User from './User';

const ListContainer = styled.section`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    min-height: 100vh;
`

const UserList = ({ data, setData, setEdited }) => {
    return (
        <ListContainer>
            { data.map((user, index) => {
                return (
                    <User key={index} name={user.name} bio={user.bio} id={user.id} setData={setData} setEdited={setEdited}/>
                )
            })}
        </ListContainer>
    )
}

export default UserList;