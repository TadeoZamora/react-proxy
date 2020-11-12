import React, { useState } from 'react';

const Counter = () => {

    const [ count, setCount ] = useState(0)

    return (
        <div className="container text-center mt-4">
            { count }
            <br/>
            <button className="btn btn-info" 
                onClick={ () => setCount( count + 1 ) }> 
                Click me! </button>
        </div>
    );
};

export default Counter;