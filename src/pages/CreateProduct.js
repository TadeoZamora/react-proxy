import React,{ useContext, useState } from 'react'
import { Store } from '../context/Process'

const CreateProduct = () =>{
    const { addToCart, updateCart, cart } = useContext( Store )

    //variable, function
    const [ product, setProduct ] = useState({
        name : "",
        price : 0
    })


    const getProductValue = (event) =>{
        // let value = event.target.value
        // let id = event.target.id
        let { value, id } = event.target

        setProduct({ ...product, [ id ] : value })
    }

    const addProduct = () => {
        if(product.name !== "" && product.price > 0){
            addToCart(product)
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="">Name of product</label>
                        <input className="form-control" 
                            id="name"
                            type="text"
                            onChange={ getProductValue }
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input className="form-control" 
                            id="price"
                            type="number"
                            onChange={ getProductValue }
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-success"
                        onClick={ () => addProduct() }
                    >Add</button>
                </div>
            </div>
            <hr/>
            
        </div>
    )
}

export default CreateProduct