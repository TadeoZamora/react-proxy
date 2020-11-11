import React from 'react'

const Product = ({ ...props }) =>{

    return(
        <p>{ props.name }</p>
    )

}
export default Product