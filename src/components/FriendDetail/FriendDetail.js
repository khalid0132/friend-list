import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let { friendId } = useParams();
    const [exactFriend, setExactFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setExactFriend(data)
            console.log(data)
        })
    }, [friendId])
    const {name, email, phone, website} = exactFriend;
    const friendDetailStyle = {
        border: '3px solid blue',
        width: '400px',
        margin: '0 auto',
        marginTop : '30px',
        padding: '20px',
        textAlign: 'center'
    }
    return (
        <div style= {friendDetailStyle}>
            <p>Friends' detail information: {friendId}</p>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
};

export default FriendDetail;