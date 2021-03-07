import React from 'react';

const NoMatch = () => {
    const noMatch = {
        textAlign: 'center',
        border: '1px solid gray',
        boxShadow: '5px 5px 10px gray',
        padding: '20px',
        width: '400px',
        margin: '0 auto',
        marginTop: '50px',
        borderRadius: '20px'
    }

    return (
        <div style={noMatch}>
            <h2>Page not found</h2>
            <h1>Error, Try again.....</h1>
        </div>
    );
};

export default NoMatch;