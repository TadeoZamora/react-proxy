import React from 'react';

const List = ({...props}) => {
    return (
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {
                        props.children
                    }
                </ul>
            </div>
        </div>
    );
};

export default List;