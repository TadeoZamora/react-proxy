import React from 'react';
import { useParams } from 'react-router-dom'

const PageTwo = () => {
    const { name } = useParams()
    return (
        <div className="container mt-5">
            <h1>Welcome { name } </h1>
        </div>
    );
};

export default PageTwo;