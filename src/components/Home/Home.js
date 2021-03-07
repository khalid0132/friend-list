import React from 'react';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Home.css'

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Number of Friends: {friends.length} </h1>
            <div className= "home-style">
            {
                friends.map(friend => <p className = "home-design"><Friend friend = {friend}></Friend></p>)
                
            }
            </div>
        </div>
    );
};

export default Home;