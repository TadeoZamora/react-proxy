import React from 'react'

const Product = ({ ...props }) =>{

    return(
        <li onDoubleClick={props.deleteProduct} className="list-group-item">{ props.name }</li>
    )

}
export default Product