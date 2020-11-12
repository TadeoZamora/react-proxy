import React from 'react'

const Product = ({ ...props }) =>{

    return(
        <li className="list-group-item">{ props.name }</li>
    )

}
export default Product