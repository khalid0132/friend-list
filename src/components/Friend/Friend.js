import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    function handleClick(friendId) {
        history.push(`/friend/${friendId}`)
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}><button>Show friend's Id {id}</button></Link>
            <p><button onClick={()=>handleClick(id)}>Click to show detail</button></p>
            
        </div>
    );
};

export default Friend;