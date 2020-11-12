import React,{ useState } from 'react'
import List from '../components/List'
import Product from '../components/Product'

const CreateProduct = () =>{
    //variable, function
    const [ product, setProduct ] = useState({
        name : "",
        price : 0
    })
    const [ products, setProducts ] = useState([])

    const getProductValue = (event) =>{
        // let value = event.target.value
        // let id = event.target.id
        let { value, id } = event.target

        setProduct({ ...product, [ id ] : value })
    }

    const addProduct = () => {
        let backUp = products.concat(product)
        setProducts( backUp )
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
            <List>
                {
                    products.length > 0 && 
                    <>
                        List
                        {
                            products.map((item,index) => (<Product key={ index.toString()} name={item.name}/>))
                        }
                    </>
                }
            </List>
        </div>
    )
}

export default CreateProduct